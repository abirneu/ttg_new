import React from "react";
import Image from "next/image";

interface InfoBadgeProps {
    icon: string;
    text: string;
    className?: string;
}

const InfoBadge: React.FC<InfoBadgeProps> = ({ icon, text, className }) => {
    return (
        <div
            className={`relative inline-flex items-center gap-[10px] rounded-[40px] bg-white p-[6px] pr-[24px] shadow-[0_0_30px_rgba(244,248,248,1)] border border-[#f4f8f8] ${className}`}
        >
            <div className="relative flex h-[38px] w-[50px] items-center justify-center rounded-[20px] bg-[#f0f9ff]/60">
                <div className="relative h-[20px] w-[20px]">
                    <Image
                        src={icon}
                        alt="icon"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            <span className="text-[17px] font-medium text-[#636363] font-funnel whitespace-nowrap">
                {text}
            </span>
        </div>
    );
};

export default InfoBadge;
