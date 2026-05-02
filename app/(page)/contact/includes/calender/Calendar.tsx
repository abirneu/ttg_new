"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
    format,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    startOfWeek,
    endOfWeek,
    isSameMonth,
    isToday,
    addMonths,
    subMonths,
} from "date-fns";

interface CalendarDay {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
}

const Calendar = ({
    onDateSelect,
    availableDates = [],
    selectedDate,
}: {
    onDateSelect: (date: string) => void;
    availableDates?: string[];
    selectedDate?: string;
}) => {
    const [currentDate, setCurrentDate] = useState(() => new Date());
    const [internalSelectedDate, setInternalSelectedDate] = useState<string>(
        () => selectedDate ?? ""
    );
    const activeSelectedDate = selectedDate ?? internalSelectedDate;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const hasAvailability = availableDates.length > 0;

    const handleDateClick = (date: Date) => {
        if (!isSameMonth(date, currentDate)) return;
        if (date <= today) return;
        if (hasAvailability) {
            const dateString = format(date, "yyyy-MM-dd");
            if (!availableDates.includes(dateString)) return;
        }

        const dateString = format(date, "yyyy-MM-dd");
        if (selectedDate === undefined) {
            setInternalSelectedDate(dateString);
        }
        onDateSelect(dateString);
    };

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const calendarStart = startOfWeek(monthStart);
    const calendarEnd = endOfWeek(monthEnd);

    const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

    const calendarDays: CalendarDay[] = days.map((date) => ({
        date,
        isCurrentMonth: isSameMonth(date, currentDate),
        isToday: isToday(date),
    }));

    const weeks: CalendarDay[][] = [];
    for (let i = 0; i < calendarDays.length; i += 7) {
        weeks.push(calendarDays.slice(i, i + 7));
    }

    const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
    const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

    const dayNames = ["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"];

    return (
        <div className="mx-auto w-full max-w-sm rounded-lg p-6">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <h2 className="font-clash text-xl font-medium text-[#0b0b0b]">
                    {format(currentDate, "MMMM").toUpperCase()}{" "}
                    <span className="text-lg font-normal text-gray-400">
                        {format(currentDate, "yyyy")}
                    </span>
                </h2>
                <div className="flex gap-1">
                    <button
                        onClick={handlePrevMonth}
                        className="rounded-lg p-2 transition-colors hover:bg-gray-100"
                        aria-label="Previous month"
                    >
                        <FaChevronLeft
                            size={14}
                            className="text-[#0b0b0b]/60"
                        />
                    </button>
                    <button
                        onClick={handleNextMonth}
                        className="rounded-lg p-2 transition-colors hover:bg-gray-100"
                        aria-label="Next month"
                    >
                        <FaChevronRight
                            size={14}
                            className="text-[#0b0b0b]/60"
                        />
                    </button>
                </div>
            </div>

            {/* Day Names */}
            <div className="mb-2 grid grid-cols-7 gap-1">
                {dayNames.map((day) => (
                    <div
                        key={day}
                        className="py-1 text-center font-sans text-[12px] tracking-wider text-[#555555]"
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Days */}
            <div className="space-y-1">
                {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="grid grid-cols-7 gap-1">
                        {week.map((day, dayIndex) => {
                            const dateString = format(day.date, "yyyy-MM-dd");
                            const isAvailable =
                                hasAvailability &&
                                availableDates.includes(dateString);

                            return (
                            <button
                                key={dayIndex}
                                onClick={() => handleDateClick(day.date)}
                                disabled={
                                    !day.isCurrentMonth ||
                                    day.date <= today ||
                                    (hasAvailability && !isAvailable)
                                }
                                className={`relative flex aspect-square items-center justify-center rounded-lg font-sans text-[16px] transition-all duration-200 disabled:cursor-not-allowed ${
                                    activeSelectedDate ===
                                    dateString // ✅ string comparison
                                        ? "bg-btn-primary text-white"
                                        : isAvailable
                                          ? "bg-[#dce7ea] text-[#0b0b0b]"
                                          : day.isToday
                                            ? "bg-gray-200 text-gray-500"
                                            : day.isCurrentMonth &&
                                                day.date > today
                                              ? "cursor-pointer text-[#0b0b0b] hover:bg-gray-100"
                                              : day.isCurrentMonth &&
                                                  day.date <= today
                                                ? "cursor-not-allowed text-gray-300"
                                                : "text-gray-200"
                                }`}
                            >
                                {format(day.date, "d")}
                            </button>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
