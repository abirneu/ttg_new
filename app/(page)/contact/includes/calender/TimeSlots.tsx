"use client";

import { useState, useCallback, useEffect } from "react";
import { FaSpinner, FaCheck, FaAngleDoubleRight } from "react-icons/fa";

interface TimeSlot {
    id: string;
    time: string;
    status: "available" | "unavailable" | "selected";
}

interface MeetingFormData {
    full_name: string;
    email: string;
    phone_number: string;
    summary: string;
    description?: string;
    location: string;
}

const slots: TimeSlot[] = [
    { id: "1", time: "11:00 AM", status: "available" },
    { id: "2", time: "02:00 PM", status: "available" },
    { id: "3", time: "03:00 PM", status: "unavailable" },
    { id: "4", time: "04:00 PM", status: "available" },
];

// Personal Info Form Component
const MeetingPersonalInfoForm = ({
    formData,
    handleFormChange,
    handleFormSubmit,
    loading,
    error,
    requiresAuth,
    onCancel,
}: {
    formData: MeetingFormData;
    handleFormChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    handleFormSubmit: (e: React.FormEvent) => void;
    loading: boolean;
    error: string | null;
    requiresAuth: boolean;
    onCancel: () => void;
}) => {
    return (
        <div className="mt-0   space-y-4 rounded-lg p-1">
            
            <form onSubmit={handleFormSubmit} className="space-y-2">
                <div>
                    <label
                        htmlFor="full_name"
                        className="mb-1 block text-[14px] font-funnel font-bold text-black"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleFormChange}
                        required
                        className="w-full rounded-lg shadow-sm bg-white px-4 py-3 text-black transition-colors"
                        placeholder="Enter your full name"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="mb-1 block text-[14px] font-funnel font-bold text-black"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className="w-full rounded-lg shadow-sm bg-white px-4 py-3 text-black transition-colors focus:border-orange-500 focus:outline-none"
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label
                        htmlFor="phone_number"
                        className="mb-1 block text-[14px] font-funnel font-bold text-black"
                    >
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone_number"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleFormChange}
                        required
                        className="w-full rounded-lg shadow-sm bg-white px-4 py-3 text-black transition-colors focus:border-orange-500 focus:outline-none"
                        placeholder="Enter your phone number"
                    />
                </div>
                <div>
                    <label
                        htmlFor="summary"
                        className="mb-2 block text-[14px] font-funnel font-bold text-black"
                    >
                        Meeting Purpose
                    </label>
                    <input
                        type="text"
                        id="summary"
                        name="summary"
                        value={formData.summary}
                        onChange={handleFormChange}
                        required
                        className="w-full rounded-lg shadow-sm bg-white px-4 py-3 text-black transition-colors focus:border-orange-500 focus:outline-none"
                        placeholder="Type your message "
                    />
                </div>
                <div className="flex gap-2 pt-2">
                    <button
                        type="button"
                        onClick={onCancel}
                        className=" flex-1  px-1 py-2.5 text-black transition-colors hover:bg-white rounded-full"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-btn-primary flex flex-1 items-center justify-center gap-2 rounded-full px-1 py-1 text-[16px] font-funnel font-semibold text-white transition-colors hover:cursor-pointer  disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {loading ? (
                            <>
                                <FaSpinner className="animate-spin" />
                                Booking...
                            </>
                        ) : (
                            "Confirm"
                        )}
                    </button>
                </div>
                {error && !loading && !requiresAuth && (
                    <div className="rounded-lg border border-red-500 bg-red-500/10 p-3 text-sm text-red-500">
                        {error}
                    </div>
                )}
            </form>
        </div>
    );
};

// Meeting Details Display Component
const MeetingDetailsDisplay = ({
    selectedSlot,
    timezone,
    formData,
    selectedDate,
}: {
    selectedSlot: TimeSlot;
    timezone: string;
    formData: MeetingFormData;
    selectedDate: string;
}) => {
    const formattedDate = selectedDate
        ? new Date(selectedDate).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
          })
        : "N/A";

    return (
        <div className="mt-6 space-y-4 rounded-lg border border-green-500 p-6">
            <div className="mb-4 flex items-center gap-2">
                <FaCheck className="text-green-500" size={24} />
                <h3 className="text-xl font-semibold text-white">
                    Meeting Confirmed!
                </h3>
            </div>
            <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-gray-700 py-2">
                    <p className="text-gray-400">Date</p>
                    <span className="font-medium text-white">
                        {formattedDate}
                    </span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-700 py-2">
                    <p className="text-gray-400">Time</p>
                    <span className="font-medium text-white">
                        {selectedSlot.time}
                    </span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-700 py-2">
                    <p className="text-gray-400">Timezone</p>
                    <span className="font-medium text-white">{timezone}</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-700 py-2">
                    <p className="text-gray-400">Platform</p>
                    <span className="font-medium text-white">Google Meet</span>
                </div>
                <div className="flex items-center justify-between py-2">
                    <p className="text-gray-400">Attendee</p>
                    <span className="font-medium text-white">
                        {formData.email}
                    </span>
                </div>
            </div>
            <p className="mt-4 text-sm text-gray-400">
                A confirmation email has been sent to your email address.
            </p>
        </div>
    );
};

// ✅ Accept selectedDate as prop
const TimeSlots = ({ selectedDate }: { selectedDate: string }) => {
    const [timezone, setTimezone] = useState("Asia/Dhaka");
    const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [showMeetingDetails, setShowMeetingDetails] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
    const [formData, setFormData] = useState<MeetingFormData>({
        full_name: "",
        email: "",
        phone_number: "",
        summary: "",
        description: "",
        location: "Online",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const requiresAuth = false;

    const parseTimeLabel = useCallback((label: string) => {
        const parts = label.trim().split(" ");
        const timePart = parts[0];
        const meridiem = (parts[1] || "").toUpperCase();
        const [rawHour, rawMinute] = timePart.split(":");
        let hour = parseInt(rawHour, 10);
        const minute = parseInt(rawMinute || "00", 10);
        if (meridiem === "AM") {
            if (hour === 12) hour = 0;
        } else if (meridiem === "PM") {
            if (hour < 12) hour += 12;
        }
        return { hour, minute };
    }, []);

    const handleArrowClick = (slot: TimeSlot) => {
        setSelectedSlot(slot);
        setShowForm(true);
        setShowMeetingDetails(false);
    };

    const handleFormChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedSlot) return;

        if (!selectedDate) {
            // ✅ use prop directly
            console.warn("No date selected yet. Pick a date first.");
            return;
        }

        const { hour, minute } = parseTimeLabel(selectedSlot.time);
        const startLocal = new Date(selectedDate); // ✅ use prop directly
        startLocal.setHours(hour, minute, 0, 0);

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 1000);
    };

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setShowForm(false);
                setShowMeetingDetails(true);
            }, 100);

            const resetTimer = setTimeout(() => {
                setSuccess(false);
                setSelectedSlotId(null);
                setShowMeetingDetails(false);
                setSelectedSlot(null);
                setFormData({
                    full_name: "",
                    email: "",
                    phone_number: "",
                    summary: "",
                    description: "",
                    location: "Online",
                });
            }, 5000);

            return () => {
                clearTimeout(timer);
                clearTimeout(resetTimer);
            };
        }
        if (error && !requiresAuth) {
            const timer = setTimeout(() => {
                setError(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [success, error, requiresAuth]);

    const handleCancel = () => {
        setShowForm(false);
        setSelectedSlotId(null);
        setSelectedSlot(null);
        setError(null);
        setSuccess(false);
    };

    return (
        <div className="mx-auto mb-2 md:mb-0 md:ml-0 mr-2 ml-2 md:mr-6 w-full md:max-w-md rounded-xl bg-[#f3f7f8] p-6">
            {!showForm && !showMeetingDetails && (
                <>
                    {/* Timezone selector */}
                    <div className="mb-6">
                        <label className="mb-2 block text-sm font-medium text-[#0b0b0b]">
                            Time zone
                        </label>
                        <div className="relative w-full">
                            <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-[#0b0b0b]/60"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.8}
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"
                                    />
                                </svg>
                            </div>
                            <select
                                value={timezone}
                                onChange={(e) => setTimezone(e.target.value)}
                                className="focus:border-btn-primary w-full appearance-none rounded-full border border-gray-300 bg-white py-3 pr-10 pl-11 text-sm text-[#0b0b0b] focus:outline-none"
                            >
                                <option>Asia/Dhaka</option>
                                <option>Asia/Kolkata</option>
                                <option>Asia/Bangkok</option>
                                <option>UTC</option>
                                <option>America/New_York</option>
                                <option>Europe/London</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {selectedDate && (
                        <p className="mb-4 text-center text-sm font-medium text-[#0b0b0b]/70">
                            {new Date(selectedDate).toLocaleDateString(
                                "en-US",
                                {
                                    weekday: "long",
                                    day: "numeric",
                                }
                            )}
                        </p>
                    )}

                    {/* Time slots */}
                    <div className="space-y-3">
                        {slots.map((slot) => {
                            const isSelected = selectedSlotId === slot.id;
                            const isUnavailable = slot.status === "unavailable";
                            return (
                                <div
                                    key={slot.id}
                                    className={`flex h-[56px] w-full items-center justify-between rounded-full px-5 text-sm font-medium transition-all duration-200 ${
                                        isUnavailable
                                            ? "cursor-not-allowed bg-[#d2e0e4] text-gray-400 opacity-50"
                                            : isSelected
                                              ? "bg-btn-primary text-white"
                                              : "bg-[#d2e0e4] text-[#0b0b0b] "
                                    }`}
                                >
                                    <button
                                        type="button"
                                        disabled={isUnavailable}
                                        onClick={() =>
                                            setSelectedSlotId(
                                                isSelected ? null : slot.id
                                            )
                                        }
                                        className="h-full flex-1 cursor-pointer text-left disabled:cursor-not-allowed"
                                    >
                                        {slot.time}
                                    </button>
                                    {isSelected && (
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleArrowClick(slot);
                                            }}
                                            className="text-btn-primary flex h-10 w-10 shrink-0 translate-x-3 cursor-pointer items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-100"
                                            aria-label="Proceed to booking"
                                        >
                                            <FaAngleDoubleRight size={18} />
                                        </button>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </>
            )}

            {showForm && !showMeetingDetails && (
                <MeetingPersonalInfoForm
                    formData={formData}
                    handleFormChange={handleFormChange}
                    handleFormSubmit={handleFormSubmit}
                    loading={loading}
                    error={error}
                    requiresAuth={requiresAuth}
                    onCancel={handleCancel}
                />
            )}

            {showMeetingDetails && selectedSlot && (
                <MeetingDetailsDisplay
                    selectedSlot={selectedSlot}
                    timezone={timezone}
                    formData={formData}
                    selectedDate={selectedDate}
                />
            )}
        </div>
    );
};

export default TimeSlots;
