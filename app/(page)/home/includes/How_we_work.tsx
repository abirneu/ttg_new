import React from "react";
import Image from "next/image";
import {
    FiArrowRight,
    FiCompass,
    FiLayout,
    FiNavigation,
    FiSettings,
    FiTrendingUp,
} from "react-icons/fi";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";

const workflowSteps = [
    {
        number: "01",
        title: "Deep Discovery",
        description:
            "We analyze your business, identify operational gaps, and align on clear growth objectives before anything begins.",
        image: "/images/Home/how-we-work-image.png",
        icon: FiCompass,
    },
    {
        number: "02",
        title: "Solution Architecture",
        description:
            "We design a tailored execution plan--combining systems, workflows, and resources aligned with your goals.",
        image: "/images/Home/how-we-work-image.png",
        icon: FiLayout,
    },
    {
        number: "03",
        title: "Seamless Onboarding",
        description:
            "Teams, tools, and processes are set up and integrated--ensuring a smooth transition without disrupting your operations.",
        image: "/images/Home/how-we-work-image.png",
        icon: FiSettings,
    },
    {
        number: "04",
        title: "Execution Goes Live",
        description:
            "We launch operations with real-time monitoring and continuous oversight--ensuring a stable, efficient start from day one without disruptions.",
        image: "/images/Home/how-we-work-image.png",
        icon: FiNavigation,
    },
    {
        number: "05",
        title: "Continuous Optimization",
        description:
            "We track performance, refine workflows, and improve systems--so your operations keep scaling over time.",
        image: "/images/Home/how-we-work-image.png",
        icon: FiTrendingUp,
    },
];

const How_we_work = () => {
    return (
        <section className="bg-[#f4f6f7]">
            <Container className="py-16 md:py-24">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.15fr] lg:gap-10">
                    <div className="lg:sticky lg:top-28 lg:self-start">
                        <InfoBadge
                            icon="/icons/Badges/solar_settings.png"
                            text="How We Work"
                        />

                        <h2 className="mt-7 max-w-140 font-clash text-[44px] leading-[1.1] font-medium text-[#0b1015] md:text-[54px] md:leading-[1.02]">
                            From Inquiry to Results in 5 Steps
                        </h2>

                        <p className="mt-8 max-w-140 font-funnel text-[16px] leading-[1.55] text-[#4c5762] md:text-[16px]">
                            Our refined process transforms your vision into a
                            high-performing and scalable reality through
                            structured execution, clear milestones, and
                            continuous optimization.
                        </p>
                    </div>

                    <div className="relative pb-14 lg:pb-28">
                        {workflowSteps.map((step, index) => {
                            const StepIcon = step.icon;

                            return (
                                <article
                                    key={step.number}
                                    className="sticky top-24  py-5"
                                    style={{ zIndex: index + 1 }}
                                >
                                    <div className="rounded-xl border border-[#d5d5d5] bg-[#fcfcfc] p-4 md:p-5">
                                        <div className="flex gap-10 justify-between items-end-safe md:items-start">
                                            <div>
                                                <div className="flex items-start justify-between gap-4">
                                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm bg-[#0f1319] text-white">
                                                        <StepIcon size={16} />
                                                    </span>
                                                    <span className="font-clash text-[32px] leading-none text-[#b3b7bc] md:text-[40px]">
                                                        {step.number}
                                                    </span>
                                                </div>

                                                <h3 className="mt-5 font-clash text-[14px] leading-[1.15] font-medium text-[#151c23] md:text-[24px]">
                                                    {step.title}
                                                </h3>

                                                <p className="mt-4 max-w-170 font-funnel text-[15px] leading-normal text-[#515d68] md:text-[16px]">
                                                    {step.description}
                                                </p>

                                                <button
                                                    type="button"
                                                    className="mt-8 inline-flex items-center gap-3 font-funnel text-[15px] font-semibold text-[#0a81a8] transition-opacity hover:opacity-80 md:text-[16px]"
                                                >
                                                    Learn more about this step
                                                    <FiArrowRight size={17} />
                                                </button>
                                            </div>

                                            <div className="relative h-52 overflow-hidden rounded-lg md:h-[240px] md:w-[390px]">
                                                <Image
                                                    src={step.image}
                                                    alt={step.title}
                                                    width={580}
                                                    height={420}
                                                    className="h-full w-full object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default How_we_work;