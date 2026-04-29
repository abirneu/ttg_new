import React from "react";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";
import CommonButton from "@/app/components/CommonButton";

const Hero = () => {
    return (
        <section
            className="relative h-screen w-full overflow-hidden bg-[#f5f7f8]"
            style={{
                backgroundImage: "url('/images/Contact/contact-hero-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
            }}
        >
            <Container className="relative z-10 py-24 pt-32 md:py-28 md:pt-80">
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-6">
                    <div className="max-w-2xl">
                        <InfoBadge
                            icon="/icons/Badges/get-in-touch.png"
                            text="Get in Touch"
                            className=""
                        />

                        <h1 className="font-clash text-4xl leading-tight font-medium text-[#04070D] md:text-[40px]">
                            Let’s build something <br />{" "}
                            <span className="text-btn-primary">
                                great together
                            </span>
                        </h1>

                        <p className="font-funnel mt-3 max-w-md text-[16px] leading-relaxed text-[#525353]">
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
