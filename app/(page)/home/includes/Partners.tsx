"use client";
import Container from "@/app/components/Container";
import Image from "next/image";
import React from "react";

const logos = [
    {src: "/images/Home/Check-Point.png",},
    {src: "/images/Home/Logo-Google.png",},
    {src: "/images/Home/Microsoft_logo.png",},
    {src: "/images/Home/PaloAltoNetworks.png",},
    {src: "/images/Home/tidio-logo.png",},
];

const Partners = () => {
    return (
        <section className="relative  bg-[#f5f7f8]  min-h-[20vh] lg:min-h-[40vh] overflow-hidden">
            <Container className="relative flex flex-col items-center justify-center gap-6 sm:gap-12 py-6 sm:py-12 z-10">
                <p className="font-clash font-regular text-[24px] uppercase">our game-changing partners</p>
                <div className="relative w-full overflow-hidden">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 md:w-16 bg-linear-to-r from-white to-transparent"/>
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 md:w-16 bg-linear-to-l from-white to-transparent"/>
                    <div className="flex w-[200%] animate-marquee">
                        <div className="flex w-1/2 justify-around items-center mar gap-4 sm:gap-8 px-4 sm:px-10">
                            {logos.map((logo, i) => (
                                <div key={i} className="shrink-0">
                                    <Image
                                        src={logo.src}
                                        alt={logo.src}
                                        width={280}
                                        height={96}
                                        className="w-24 sm:w-40 h-auto object-contain saturate-0 hover:saturate-100"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex w-1/2 justify-around items-center gap-4 sm:gap-8 px-4 sm:px-10">
                            {logos.map((logo, i) => (
                                <div key={i + logos.length} className="shrink-0">
                                    <Image
                                        src={logo.src}
                                        alt={logo.src}
                                        width={280}
                                        height={96}
                                        className="w-24 sm:w-40 h-auto object-contain saturate-0 hover:saturate-100"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>


        </section>
    );
};

export default Partners;