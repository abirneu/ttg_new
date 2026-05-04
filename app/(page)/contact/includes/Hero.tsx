import React from "react";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";
import CommonButton from "@/app/components/CommonButton";
import Image from "next/image";

const Hero = () => {
    return (
        <section
            className="relative h-screen w-full overflow-hidden bg-[#f5f7f8]"
            style={{
                backgroundImage: "url('/images/Contact/BG.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
            }}
        >
            <Container className="relative z-10 pt-32 md:py-8 md:pt-40">
                <div className="pointer-events-none absolute inset-0">
                    {/* australia */}
                    <div
                        className="absolute bottom-60 md:bottom-0 right-40 mz-50 w-[80px] md:top-40 md:right-125 md:h-[67px] md:w-[127px]"
                        data-aos="zoom-in"
                        data-aos-delay="1100"
                        aria-hidden="true"
                    >
                        <Image
                            src="/images/Contact/australia.png"
                            alt=""
                            width={450}
                            height={550}
                            className="h-auto w-full rotate-[-0deg] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform duration-500 ease-in-out "
                        />
                    </div>
                    {/* Germany */}
                    <div
                        className="absolute bottom-50 md:bottom-0 right-70 mz-50 w-[80px] md:top-53 md:right-165 md:h-[67px] md:w-[127px]"
                        data-aos="zoom-in"
                        data-aos-delay="1000"
                        aria-hidden="true"
                    >
                        <Image
                            src="/images/Contact/germany.png"
                            alt=""
                            width={450}
                            height={550}
                            className="h-auto w-full rotate-[-0deg] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform duration-500 ease-in-out "
                        />
                    </div>
                    {/* Canada */}
                    <div
                        className="absolute bottom-15 md:bottom-0 right-10 z-50 w-[80px] md:top-100 md:right-25 md:h-[67px] md:w-[127px]"
                        data-aos="zoom-in"
                        data-aos-delay="900"
                        aria-hidden="true"
                    >
                        <Image
                            src="/images/Contact/canada.png"
                            alt=""
                            width={450}
                            height={550}
                            className="h-auto w-full rotate-[-0deg] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform duration-500 ease-in-out "
                        />
                    </div>
                    {/* USA */}
                    <div
                        className="absolute bottom-30 md:bottom-0 right-35 z-50 w-[80px] md:top-97 md:right-85 md:h-[67px] md:w-[127px]"
                        data-aos="zoom-in"
                        data-aos-delay="800"
                        aria-hidden="true"
                    >
                        <Image
                            src="/images/Contact/usa.png"
                            alt=""
                            width={450}
                            height={550}
                            className="h-auto w-full rotate-[-0deg] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform duration-500 ease-in-out "
                        />
                    </div>
                    {/* UAE */}
                    <div
                        className="absolute bottom-10 md:bottom-0 right-60 z-50 w-[80px] md:top-115 md:right-132 md:h-[67px] md:w-[127px]"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                        aria-hidden="true"
                    >
                        <Image
                            src="/images/Contact/uae.png"
                            alt=""
                            width={450}
                            height={550}
                            className="h-auto w-full rotate-[-0deg] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform duration-500 ease-in-out "
                        />
                    </div>
                </div>
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-6">
                    <div className="max-w-2xl">
                        <InfoBadge
                            icon="/icons/Badges/get-in-touch.png"
                            text="Get in Touch"
                            className=""
                        />

                        <h1 className="font-clash text-center md:text-start text-[28px] leading-tight font-medium text-[#04070D] md:text-[56px]">
                            Let’s build something <br />{" "}
                            <span className="text-btn-primary">
                                great together
                            </span>
                        </h1>

                        <p className="font-funnel text-center md:text-start mt-3 max-w-md text-[16px] leading-relaxed text-[#525353]">
                            Have a question or project in mind? Reach out—we’ll
                            respond within 24 hours with clear next steps.
                        </p>
                        <CommonButton
                            href="/consultation"
                            text="Get In Touch"
                            icon="/icons/Button_arrow/arrow-up-right.png"
                            className="mt-4 w-fit"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
