import Link from "next/link";
import React from "react";
import Image from "next/image";

interface CommonButtonProps {
    href: string;
    text: string;
    icon?: string | React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const CommonButton = ({
    href,
    text,
    icon,
    className = "",
    onClick,
}: CommonButtonProps) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`group bg-btn-primary flex flex-row items-center justify-center gap-4 rounded-full p-1.5 px-2 md:px-2 py-2 md:py-2.5 text-[14px] md:text-[20px] font-semibold text-white md:shadow-xl  md:shadow-[#abb4b9] transition-all hover:opacity-90 ${className}`}
        >
            <span className="font-funnel flex items-center text-[14px] md:text-[20px] pl-4 font-white font-medium">
                {text}
            </span>
            {icon && (
                <span className="text-btn-primary flex h-7 w-7 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-white transition-transform group-hover:rotate-45">
                    {typeof icon === "string" ? (
                        <div className="relative h-4 w-4">
                            <Image
                                src={icon}
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </div>
                    ) : (
                        icon
                    )}
                </span>
            )}
        </Link>
    );
};

export default CommonButton;
