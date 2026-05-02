import React from "react";
import Container from "@/app/components/Container";
import Image from "next/image";

const reviewCards: { id: number; name: string; logo: string }[] = [
    { id: 1, name: "Google", logo: "/images/Home/google-logo.jpeg" },
    { id: 2, name: "Google", logo: "/images/Home/google-logo.jpeg" },
    { id: 3, name: "Google", logo: "/images/Home/google-logo.jpeg" },
    { id: 4, name: "Clutch", logo: "/images/Home/Clutch-logo.png" },
    { id: 5, name: "Clutch", logo: "/images/Home/Clutch-logo.png" },
    { id: 6, name: "Clutch", logo: "/images/Home/Clutch-logo.png" },
];

const ProvenTrust = () => {
    return (
        <section
            className="bg-[#f5f7f8]"
            style={{
                backgroundImage:
                    "radial-gradient(circle, rgba(32, 125, 150, 0.14) 1.1px, transparent 1.1px)",
                backgroundSize: "16px 16px",
            }}
        >
            <Container className="py-10 md:py-20">
                <h2 className="font-clash font-Regular text-center text-[18px] text-[#111827] md:text-[28px]">
                    Proven & Trusted Worldwide
                </h2>

                <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                    {reviewCards.map((item) => (
                        <article
                            key={item.id}
                            className="rounded-2xl border border-[#ddedf0] bg-[#f8f9fa] px-8 py-8"
                        >
                            <div className="mb-3 flex justify-center">
                                <Image
                                    src={item.logo}
                                    alt={`${item.name} logo`}
                                    width={72}
                                    height={72}
                                    className="h-13 w-13 object-contain"
                                />
                            </div>

                            <h3 className="font-funnel text-center text-[20px] leading-none font-semibold text-[#111827] md:text-[25px]">
                                {item.name}
                            </h3>

                            <p className="font-funnel mt-4 text-center text-[20px] leading-none text-[#5f6872] md:text-[16px]">
                                Reviewed On
                            </p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ProvenTrust;
