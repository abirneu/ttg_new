import React from "react";
import Image from "next/image";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";

const whyCards = [
    {
        title: "Centralized Operations",
        description:
            "Replace fragmented vendors with one integrated partner across technology, talent, and day-to-day execution.",
        tags: ["Unified Partner", "AI Efficiency"],
        image: "/images/Home/why-ttg-box-img-1.png",
        imageOffsetY: 0,
    },
    {
        title: "Built-In Automation",
        description:
            "We embed AI and smart workflows from the ground up, helping teams move faster with fewer manual bottlenecks.",
        tags: ["Aligned Workflows", "Continuous Optimization"],
        image: "/images/Home/why-ttg-box-img-2.png",
        imageOffsetY: 0,
    },
    {
        title: "Global Operations Ready",
        description:
            "Built for companies operating across regions with systems and workflows aligned to international delivery standards.",
        tags: ["Global Support", "Flexible Infrastructure"],
        image: "/images/Home/why-ttg-box-img-4.png",
        imageOffsetY: 16,
    },
    {
        title: "Frictionless Scaling",
        description:
            "Our model grows with your business, so you can expand into new markets without adding operational complexity.",
        tags: ["Cross-border Scale", "No Hiring Delays"],
        image: "/images/Home/why-ttg-box-img-3.png",
        imageOffsetY: 14,
    },
];

const Why_ttg = () => {
    return (
        <section className="bg-[#ffffff]">
            <Container className="py-14 md:py-20">
                <div className="mb-5">
                    <InfoBadge
                        icon="/icons/Badges/why-question-badge.svg"
                        text="Why TotalTech Global"
                    />
                </div>

                <div className="max-w-4xl">
                    <h2 className="font-clash text-[30px] leading-[1.2] font-medium text-[#1a1a2e] md:text-[48px]">
                        Integrated Operations for Companies That Refuse to Stay
                        Stuck
                    </h2>
                    <p className="mt-5 max-w-3xl font-funnel text-[15px] leading-[1.85] text-[#616b75] md:text-[18px]">
                        We do not just deliver services. We design and run the
                        systems behind your growth, from execution to
                        optimization, so every moving part works together.
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-1 overflow-hidden border border-[#cecece] md:grid-cols-2">
                    {whyCards.map((item, index) => {
                        const isTopRow = index < 2;
                        const isLeftColumn = index % 2 === 0;
                        const isLastMobileCard = index === whyCards.length - 1;

                        return (
                            <article
                                key={item.title}
                                className={`flex min-h-105 flex-col p-6 md:p-8 ${
                                    !isLastMobileCard ? "border-b border-[#cecece]" : ""
                                } ${
                                    isTopRow
                                        ? "md:border-b md:border-[#cecece]"
                                        : "md:border-b-0"
                                } ${
                                    isLeftColumn
                                        ? "md:border-r md:border-[#cecece]"
                                        : ""
                                }`}
                            >
                                <h3 className="font-clash text-[28px] leading-[1.2] font-medium text-[#1f2937] md:text-[34px]">
                                    {item.title}
                                </h3>
                                <p className="mt-3 max-w-140 font-funnel text-[15px] leading-[1.8] text-[#6b7280]">
                                    {item.description}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-3">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full  bg-[#fafafa] px-4 py-1.5 font-funnel text-[13px] text-[#74808c]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="relative  mt-8 -mb-8 h-52.5 overflow-hidden md:h-62.5">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={920}
                                        height={460}
                                        className="h-full w-full object-contain"
                                        style={{
                                            transform: `translateY(${item.imageOffsetY}px)`,
                                        }}
                                    />
                                </div>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default Why_ttg;