import React, { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export default function Container({
    children,
    className = "",
}: ContainerProps) {
    return (
        <div
            className={`mx-auto h-full w-full max-w-screen-2xl px-10 md:px-20 ${className}`}
        >
            {children}
        </div>
    );
}
