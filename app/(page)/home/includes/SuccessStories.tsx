import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/Container";
import CommonButton from "@/app/components/CommonButton";
import InfoBadge from "@/app/components/InfoBadge";

type SuccessCard = {
    title: string;
    description: string;
    image: string;
    href: string;
};

const successCards: SuccessCard[] = [
    {
        title: "40% Cost Reduction for Fintech CX Team",
        description:
            "Deployed a 12-agent TTG BPO unit replacing an expensive in-house UK team with 24/7 multi-channel coverage.",
        image: "/images/Home/success-stories-img-1.png",
        href: "/about",
    },
    {
        title: "End-to-End Security Overhaul for Manufacturer",
        description:
            "Designed and deployed integrated physical + cyber security architecture for a 3-site manufacturing group.",
        image: "/images/Home/success-stories-img-2.png",
        href: "/about",
    },
];

const SuccessStories = () => {
    return (
        <section
            className="relative overflow-hidden bg-[#f1f3f4] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/images/Home/success-stories-bg.png')",
            }}
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-white/8"
            />

            <Container className="relative py-14 md:py-20">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    <div>
                        <div className="flex items-center justify-center md:justify-start">
                            <InfoBadge
                            icon="/icons/Badges/success.png"
                            text="Why TotalTech Global"
                        />
                        </div>
                        

                        <h2 className="text-center md:text-start font-clash  mt-7 max-w-3xl text-[28px] font-medium text-[#2d3136] md:text-[40px]">
                            Everything you need to scale-four core capabilities
                            in one integrated partner.
                        </h2>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                        <CommonButton
                        href="/about"
                        text="Explore Case Study"
                        icon="/icons/Button_arrow/double-right-arrow.png"
                        className="w-fit  md:mt-2 md:self-auto"
                    />
                    </div>
                    
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {successCards.map((card, index) => (
                        <article
                            key={card.title}
                            className="group overflow-hidden rounded-[18px] bg-[#ffffff] shadow-[0_16px_50px_rgba(15,23,42,0.06)] backdrop-blur-[2px]"
                        >
                            <div className="px-3 pt-3">
                                <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl border border-[#d7dde2] bg-[#edf1f4]">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                        priority={index === 0}
                                    />
                                </div>
                            </div>

                            <div className="flex min-h-42.5 flex-col gap-3 px-5 py-5 md:px-6">
                                <h3 className="font-clash text-[14px]  font-medium text-[#1f2328] md:text-[20px]">
                                    {card.title}
                                </h3>

                                <p className="font-funnel max-w-xl text-[12px] leading-[1.6] text-[#555555] md:text-[16px]">
                                    {card.description}
                                </p>

                                <Link
                                    href={card.href}
                                    className="font-funnel mt-auto self-end text-[13px] font-semibold tracking-[0.01em] text-[#0c7e9a] transition-colors hover:text-[#095f74]"
                                >
                                    Read More
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default SuccessStories;
