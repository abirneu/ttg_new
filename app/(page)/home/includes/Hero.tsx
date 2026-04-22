"use client";

import React from "react";
import Image from "next/image";
import CommonButton from "@/app/components/CommonButton";
import InfoBadge from "@/app/components/InfoBadge";


const Hero = () => {
    return (
        <div
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url('/images/Home/hero-bg-1.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",

            }}
        >
            {/* Content */}
            <div className="relative z-10 md:mt-40 flex flex-col items-center justify-center text-center px-4 md:px-8 max-w-4xl">
                {/* Badge */}
                <div>
                    <InfoBadge
                        icon="/icons/Badges/mage_light-bulb.png"
                        text="Innovation In Action"
                        className="h-[40px] w-[200px] md:h-full md:w-full"
                    />
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-clash font-medium text-gray-900 mb-6 leading-tight">
                    Empowering Businesses{" "}
                    <span className="block">With Smart Tech Solution.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base md:text-lg text-[#646464]/90 font-funnel mb-10 max-w-2xl leading-relaxed">
                    We unify technology, talent, and infrastructure to help your
                    business scale smoothly and efficiently without friction.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center">
                    <CommonButton
                        href="/consultation"
                        text="Book A Consultation"
                        icon="/icons/arrow-up-right.png"
                    />
                    <button
                        className="group flex flex-row items-center justify-center gap-4 py-2 px-2 rounded-full border-2 border-btn-primary p-1.5 text-sm font-semibold text-black transition-all "
                        onClick={() => {
                            document.getElementById("services")?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        <span className="flex items-center font-funnel font-medium pl-4 leading-none">Explore Services</span>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-btn-primary text-btn-primary transition-transform group-hover:rotate-45 shrink-0">
                            <div className="relative h-5 w-5">
                                <Image
                                    src="/icons/discover-circle.png"
                                    alt="Discover services"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </span>
                    </button>
                </div>

                <div className="relative  md:mt-24 w-screen  overflow-hidden">
                    <video
                        src="/videos/home/home-hero-1.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-65 w-full object-cover object-center md:h-100 "
                    ></video>
                    <div className="pointer-events-none absolute inset-0  mix-blend-multiply"></div>
                </div>
            </div>

        </div>

    );
};

export default Hero;
