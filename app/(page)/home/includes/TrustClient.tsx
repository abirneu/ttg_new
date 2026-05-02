"use client";
import Container from "@/app/components/Container";
import Image from "next/image";
import React from "react";

const logos = [
    { src: "/images/Home/Hbh-Security.png" },
    { src: "/images/Home/Mas-lace.png" },
    { src: "/images/Home/Talikhata.png" },
    { src: "/images/Home/Sustainable.png" },
    { src: "/images/Home/Omami.png" },
];

const TrustClient = () => {
    return (
        <section className="relative min-h-[20vh] overflow-hidden bg-[#f5f7f8] lg:min-h-[40vh]">
            <Container className="relative z-10 flex flex-col items-center justify-center gap-6 py-6 sm:gap-12 sm:py-12">
                <p className="font-clash font-regular text-[20px] md:text-[24px] uppercase">
                    TRUSTED BY CLIENTS WORLDWIDE
                </p>
                <div className="relative w-full overflow-hidden">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-linear-to-r from-[#f5f7f8] to-transparent md:w-16" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-linear-to-l from-[#f5f7f8] to-transparent md:w-16" />
                    <div className="animate-marquee flex w-[200%] gap-4 sm:gap-0">
                        <div className="mar flex w-full items-center gap-4 px-3 sm:w-1/2 sm:justify-around sm:gap-8 sm:px-10">
                            {logos.map((logo, i) => (
                                <div key={i} className="shrink-0">
                                    <Image
                                        src={logo.src}
                                        alt={logo.src}
                                        width={280}
                                        height={96}
                                        className="h-auto w-16 object-contain saturate-0 hover:saturate-100 sm:w-40"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex w-full items-center gap-4 px-3 sm:w-1/2 sm:justify-around sm:gap-8 sm:px-10">
                            {logos.map((logo, i) => (
                                <div
                                    key={i + logos.length}
                                    className="shrink-0"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.src}
                                        width={280}
                                        height={96}
                                        className="h-auto w-16 object-contain saturate-0 hover:saturate-100 sm:w-40"
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

export default TrustClient;
