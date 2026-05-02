import React from "react";
import { MdAccessTime } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import Image from "next/image";

const CallInfo = () => {
    return (
        <div className="flex h-full w-full flex-col items-start justify-between bg-white">
            <div className="space-y-1">
                {/* Logo and Title */}
                <div className="space-y-3">
                    <div className="flex h-39 items-center justify-center">
                        <div className="h-30 w-full border-b">
                            <Image
                                src="/icons/ttg_logo.png"
                                alt="TTG Logo"
                                width={80}
                                height={32}
                                className="md:h-10 h-15 w-auto"
                            />
                             <div className="relative mt-3 mb-3 h-px  bg-black w-[260px]  md:w-[200px]">
                                <span className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-black" />
                                <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-black" />
                            </div>
                        </div>
                        
                    </div>
                </div>

                {/* Call Details */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <MdAccessTime className="flex-shrink-0 text-2xl text-black" />
                        <span className="text-base text-black">30 minutes</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MdLanguage className="flex-shrink-0 text-2xl text-black" />
                        <span className="text-base text-black">
                            Strategy Call
                        </span>
                    </div>
                </div>

                {/* Description */}
                <p className="mt-8 text-[12px] md:text-sm leading-relaxed text-black">
                    Discuss your project goals with the Exoveon team. We&apos;ll
                    explore your idea, scope the project complexity, and suggest
                    the best plan for your product journey.
                </p>
            </div>

            {/* address */}
            <div className="flex-row mt-auto mb-15 flex gap-15 pt-10 text-black">
                <div>
                    <p className="font-clash text-[16px] font-medium text-[#0b0b0b] ">
                        Contact us on
                    </p>
                    <p className="text-[12px]">+880 1711 000 000</p>
                    <p className="text-[12px]">yourmail@email.com</p>
                </div>
                <div>
                    <p className="font-clash text-[16px] font-medium text-[#0b0b0b] ">
                        Find us
                    </p>
                    <p className="text-[12px] leading-relaxed text-black">
                        6391 Elgin St. Celina, <br /> Delaware 10299
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CallInfo;
