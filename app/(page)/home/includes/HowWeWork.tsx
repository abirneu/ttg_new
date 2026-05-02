import React from "react";
import Image from "next/image";
import {
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

const HowWeWork = () => {
    return (
        <section className="bg-[#f4f6f7]">
            <Container className="py-10 md:py-24">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.95fr_1.15fr] md:gap-10">
                    <div className="md:sticky md:top-28 md:self-start  ">
                        <div className="flex items-center justify-center md:justify-start md:items-start">
                            <InfoBadge
                            icon="/icons/Badges/solar_settings.png"
                            text="How We Work"
                        />

                        </div>
                        

                        <h2 className="font-clash mt-7 max-w-140 text-[28px] text-center md:text-left leading-[1.1] font-medium text-[#0b1015] md:text-[54px] md:leading-[1.02]">
                            From Inquiry to Results in 5 Steps
                        </h2>

                        <p className="font-funnel mt-8 max-w-140 text-[14px] text-center md:text-left leading-[1.55] text-[#4c5762] md:text-[16px]">
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
                                    className="sticky top-24 py-5"
                                    style={{ zIndex: index + 1 }}
                                >
                                    <div className="rounded-xl border border-[#d5d5d5] bg-[#fcfcfc] p-4 md:p-5">
                                        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-10">
                                            <div>
                                                <div className="flex items-start justify-between gap-4">
                                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm bg-[#0f1319] text-white">
                                                        <StepIcon size={16} />
                                                    </span>
                                                    <span className="font-clash text-[32px] leading-none text-[#b3b7bc] md:text-[40px]">
                                                        {step.number}
                                                    </span>
                                                </div>

                                                <h3 className="font-clash mt-5 text-[14px] leading-[1.15] font-medium text-[#151c23] md:text-[24px]">
                                                    {step.title}
                                                </h3>

                                                <p className="font-funnel mt-4 max-w-170 text-[15px] leading-normal text-[#515d68] md:text-[16px]">
                                                    {step.description}
                                                </p>

                                                
                                            </div>

                                            <div className="relative h-52 w-full overflow-hidden rounded-lg md:h-[240px] md:w-[390px]">
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

export default HowWeWork;
