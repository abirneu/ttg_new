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
      className={`group flex flex-row items-center justify-center gap-4 py-2 px-2 rounded-full bg-btn-primary p-1.5 text-sm font-semibold text-white transition-all hover:opacity-90 shadow-xl shadow-[#abb4b9] ${className}`}
    >
      <span className="flex items-center font-funnel font-medium pl-4 leading-none">{text}</span>
      {icon && (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-btn-primary transition-transform group-hover:rotate-45 shrink-0">
          {typeof icon === "string" ? (
            <div className="relative h-4 w-4">
              <Image src={icon} alt="" fill className="object-contain" />
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
