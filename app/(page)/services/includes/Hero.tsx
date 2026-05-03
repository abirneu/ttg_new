import React from "react";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";

const Hero = () => {
    return (
        <section className="relative h-[820px] w-full overflow-hidden md:h-[760px]">
            <div
                className="pointer-events-none  absolute inset-0 flex flex-col md:flex-row"
                
            >
                <div
                    className="h-full w-full bg-cover bg-white bg-center bg-no-repeat md:w-[55%]"
                    style={{
                        backgroundImage:
                            "url('/images/Services/services-hero-bg-left.png')",
                    }}
                />
                <div className="h-full w-full md:w-[45%] bg-white">
                    <video
                        className="h-full w-full  object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source
                            src="/videos/service/service-bg.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>
            <Container className="sticky z-10 py-24 pt-32 md:py-28 md:pt-80 ">
                <div className="grid items-center gap-10  md:grid-cols-2 md:gap-0">
                    <div className="  mt-10 md:-mt-20">
                        <div className="flex items-center justify-center md:justify-start ">
                            <InfoBadge
                            icon="/icons/Badges/core-service.png"
                            text="Core Service"
                            className=""
                        />
                        </div>
                        

                        <h1 className="font-clash text-center md:text-left whitespace-nowrap  text-[28px] leading-tight font-medium text-[#04070D] md:text-[56px]">
                            All you need to scale—six key <br /> capabilities in one partner.
                        </h1>

                        <p className="font-funnel text-center md:text-left   mt-3 max-w-xl text-[16px] md:text-[22px] leading-relaxed text-[#525353]">
                            Six interconnected service pillars designed to cover every dimension of modern business operations.{" "}
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
