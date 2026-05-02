import React from "react";
import Image from "next/image";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";

const Hero = () => {
    return (
        <section
            className="relative w-full overflow-hidden"
            style={{
                backgroundImage: "url('/images/About/about-hero-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
            }}
        >
            <Container className="relative z-10 py-24 pt-32 md:py-28 md:pt-40">
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center justify-center md:justify-start">
                            <InfoBadge
                            icon="/icons/Badges/three-people.png"
                            text="Who we are"
                            className=""
                        />
                        </div>
                        

                        <h1 className="font-clash text-[28px] text-center md:text-left leading-tight font-medium text-[#04070D] md:text-[40px]">
                            We design systems powering modern companies.
                        </h1>

                        <p className="font-funnel mt-3 max-w-md text-[16px] leading-relaxed text-[#525353]">
                            TotalTech Global unifies operations across teams,
                            tools, and workflows with scalable, structured
                            systems.
                        </p>
                    </div>

                    <div className="relative h-110 w-full md:h-130">
                        <div className="about-hero-glow absolute right-0 bottom-0 h-80 w-80 rounded-full" />

                        <div className="relative h-full w-full md:sticky md:top-28">
                            <article className="about-floating-card-top absolute top-18 right-0 z-20 w-56 md:w-87">
                                <Image
                                    src="/images/About/credit-breakdown-ontainer.png"
                                    alt="Global operations summary card"
                                    width={568}
                                    height={568}
                                    className="md:h-[219px] md:w-[240px]"
                                />
                            </article>

                            <article className="about-floating-card-bottom absolute right-0 bottom-12 z-10 w-72 md:w-87">
                                <Image
                                    src="/images/About/graphs-container.png"
                                    alt="Performance trend card"
                                    width={1200}
                                    height={800}
                                    className="md:h-[170px] md:w-[242px]"
                                />
                            </article>

                            <article className="about-floating-card-front absolute top-37 left-30 z-30 w-72 overflow-hidden rounded-4xl md:w-108">
                                <video
                                    className="block h-[240px] w-[250px] scale-[1.07] rounded-3xl object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source
                                        src="/videos/about/efficiency.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </article>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
