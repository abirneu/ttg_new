"use client";

import React from "react";
import Image from "next/image";
import CommonButton from "@/app/components/CommonButton";
import InfoBadge from "@/app/components/InfoBadge";

const Hero = () => {
    return (
        <div
            className="relative flex md:min-h-screen pt-30 md:pt-0 w-full items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url('/images/Home/hero-bg-1.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
            }}
        >
            {/* Content */}
            <div className="relative z-10 flex max-w-4xl flex-col items-center justify-center px-4 text-center md:mt-40 md:px-8">
                {/* Badge */}
                <div>
                    <InfoBadge
                        icon="/icons/Badges/mage_light-bulb.png"
                        text="Innovation In Action"
                        className="h-[40px] w-[200px] md:h-full md:w-full"
                    />
                </div>

                {/* Main Heading */}
                <h1 className="font-clash mb-6 text-[28px] leading-tight font-medium text-gray-900 md:text-5xl lg:text-6xl">
                    Empowering Businesses{" "}
                    <span className="block">With Smart Tech Solution.</span>
                </h1>

                {/* Subtitle */}
                <p className="font-funnel px-4 md:px-0 mb-10 md:max-w-2xl text-[14px] leading-relaxed text-[#646464] md:text-lg">
                    We unify technology, talent, and infrastructure to help your
                    business scale smoothly and efficiently without friction.
                </p>

                {/* Buttons */}
                <div className="flex flex-row items-center justify-center gap-5 md:flex-row md:gap-6">
                    <CommonButton
                        href="/consultation"
                        text="Book A Consultation"
                        icon="/icons/Button_arrow/arrow-up-right.png"
                    />
                    <button
                        className="group border-btn-primary flex flex-row items-center justify-center gap-4 rounded-full border-2 p-1.5 px-2 py-2 text-sm font-semibold text-black transition-all"
                        onClick={() => {
                            document
                                .getElementById("services")
                                ?.scrollIntoView({
                                    behavior: "smooth",
                                });
                        }}
                    >
                        <span className="font-funnel flex items-center text-[14px] md:text-[20px] pl-4 font-white font-medium ">
                            Explore Services
                        </span>
                        <span className="bg-btn-primary text-btn-primary flex h-7 w-7 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full transition-transform group-hover:rotate-45">
                            <div className="relative h-5 w-5">
                                <Image
                                    src="/icons/Button_arrow/discover-circle.png"
                                    alt="Discover services"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </span>
                    </button>
                </div>

                <div className="relative w-screen overflow-hidden md:mt-24">
                    <video
                        src="/videos/home/home-hero-2.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-65 w-full object-cover object-center md:h-100"
                    ></video>
                    <div className="pointer-events-none absolute inset-0 mix-blend-multiply"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
