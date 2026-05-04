"use client";

import React, { useEffect } from "react";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <section
            className="relative w-full overflow-hidden"
            style={{
                backgroundImage: "url('/images/Insights/inshiht-her-bg-v2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
            }}
        >
            <Container className="relative z-10  pt-32 md:py-8 md:pt-40 ">
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                    <div className="max-w-2xl">
                        <div className="flex items-center justify-center md:items-start md:justify-start  ">
                            <InfoBadge
                            icon="/icons/Badges/earth.png"
                            text="Insights"
                            className=""
                        />
                        </div>
                        

                        <h1 className="font-clash mt-6 text-center md:text-start text-[28px] leading-tight font-medium text-[#04070D] md:text-[56px]">
                            Where Strategy Meets  Execution
                        </h1>

                        <p className="font-funnel text-center md:text-start mt-6 max-w-xl text-[16px] md:text-[22px] leading-relaxed text-[#525353]">
                            Explore how modern businesses are solving
                            operational challenges, adopting smarter systems,
                            and scaling with clarity through proven strategies
                            and real-world experience.
                        </p>
                    </div>

                    <div className="relative flex min-h-[450px] items-center justify-center md:min-h-[600px]">
                        {/* Hero Card 1 - Back (Top) */}
                        <div
                            className="absolute -top-10 right-10 z-10 w-[310px] md:-top-10 md:right-40 md:w-[450px]"
                            data-aos="fade-down-left"
                            data-aos-delay="200"
                        >
                            <Image
                                src="/images/Insights/hero-card-img-3.png"
                                alt="Strategy Card 1"
                                width={450}
                                height={550}
                                className="h-auto w-full rotate-[-15deg]  transition-transform duration-500 hover:rotate-[-8deg]"
                            />
                        </div>

                        {/* Hero Card 2 - Middle */}
                        <div
                            className="absolute top-1 right-5 z-20 w-[310px] md:top-10 md:right-30 md:w-[450px]"
                            data-aos="fade-left"
                            data-aos-delay="400"
                        >
                            <Image
                                src="/images/Insights/hero-card-img-2.png"
                                alt="Strategy Card 2"
                                width={450}
                                height={550}
                                className="h-auto w-full rotate-[0deg]  transition-transform duration-500 hover:rotate-[-2deg]"
                            />
                        </div>

                        {/* Hero Card 3 - Front (Bottom) */}
                        <div
                            className="absolute right-0 bottom-20 z-30 w-[310px] md:right-30 md:bottom-15 md:w-[450px] "
                            data-aos="fade-up-left"
                            data-aos-delay="600"
                        >
                            <Image
                                src="/images/Insights/hero-card-img-1.png"
                                alt="Strategy Card 3"
                                width={450}
                                height={550}
                                className="h-auto w-full rotate-[15deg] transition-transform duration-500 hover:rotate-[4deg]"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
