"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ContactButtonProps {
    href: string;
    text: string;
    icon: string;
    className?: string;
    onClick?: () => void;
}

const ContactButton = ({
    href,
    text,
    icon,
    className = "",
    onClick,
}: ContactButtonProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || pathname.startsWith(`${href}/`);

    return (
        <Link
            href={href}
            onClick={onClick}
            className={`group relative flex flex-row items-center justify-center gap-4 rounded-full border shadow-xl shadow-[#abb4b9] transition-all duration-300 ${
                isActive
                    ? "border-[#0081a1] bg-white text-[#0081a1]"
                    : "bg-btn-primary border-transparent text-white hover:opacity-90"
            } p-1.5 px-2 py-2 text-sm font-semibold ${className}`}
        >
            <span className="font-funnel flex items-center pl-4 leading-none font-medium">
                {text}
            </span>
            <span
                className={`${
                    isActive
                        ? "bg-[#0081a1] text-white"
                        : "text-btn-primary bg-white"
                } flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    !isActive ? "group-hover:rotate-45" : ""
                }`}
            >
                <div className="relative h-3 w-3">
                    <Image
                        src={icon}
                        alt=""
                        fill
                        className={`object-contain transition-all duration-500 ${
                            isActive ? "rotate-135 brightness-0 invert" : ""
                        }`}
                    />
                </div>
            </span>
            {isActive && (
                <div className="absolute bottom-[0px] left-1/2 h-1 w-[70%] -translate-x-1/2 rounded-t-full bg-[#0081a1]" />
            )}
        </Link>
    );
};

export default ContactButton;
