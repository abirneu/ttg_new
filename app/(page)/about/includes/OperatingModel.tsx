import React from "react";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";
import Image from "next/image";

const operationCards = [
    {
        number: "01",
        title: "Embedded\nTeams",
        description:
            "We don\u2019t just hand over deliverables. Our teams operate as an extension of your organization with daily standups and direct access.",
        icon: "/icons/Badges/three-people.png",
    },
    {
        number: "02",
        title: "Technology-\nFirst",
        description:
            "Every engagement begins with an automation assessment. We identify what can be optimized before adding headcount.",
        icon: "/images/About/WebhooksLogo.png",
    },
    {
        number: "03",
        title: "Global\nDelivery",
        description:
            "Operations run from DHAKA and SWEDEN, covering US/EU time zones. 24/7 availability with no gap in coverage.",
        icon: "/images/About/GlobeHemisphereWest.png",
    },
] as const;

const OperatingModel = () => {
    return (
        <section className="w-full bg-[#f5f7f8] py-10 md:py-20">
            <Container>
                <div className="max-w-3xl">
                    <div className="flex justify-center md:justify-start">
                        <InfoBadge
                            icon="/icons/Badges/operating-model.png"
                            text="How We Work"
                            className="mb-8"
                        />
                    </div>

                    <h2 className="font-clash flex justify-center text-[28px] leading-[1.1] font-medium text-[#0d1117] md:justify-start md:text-[40px]">
                        Our Operating Model
                    </h2>
                    <p className="font-funnel mt-2 flex max-w-2xl justify-center text-[14px] leading-normal text-[#4c5158] md:justify-start md:text-[16px]">
                        A synchronized approach to global business operations
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-0 md:mt-10 md:grid-cols-3 md:items-end">
                    {operationCards.map((card, index) => {
                        const cardTitle = card.title.split("\n");

                        return (
                            <article
                                key={card.number}
                                className={`group relative h-90 md:h-117.5 overflow-hidden border border-[#dadde0] bg-[#ffffff] p-6 transition-[height,border-color,background-color] duration-500 ease-out hover:h-80 md:hover:h-90 hover:border-[#0f1217] md:h-125 md:self-end md:p-8 md:hover:h-105 ${
                                    index > 0 ? "-mt-px md:mt-0 md:-ml-px" : ""
                                }`}
                                style={{
                                    backgroundImage:
                                        "repeating-linear-gradient(-38deg, rgba(16, 20, 25, 0.022) 0px, rgba(16, 20, 25, 0.022) 1px, transparent 5px, transparent 5px)",
                                }}
                            >
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100"
                                    style={{
                                        backgroundColor: "#0f1217",
                                        backgroundImage:
                                            "repeating-linear-gradient(-38deg, rgba(182, 188, 197, 0.09) 0px, rgba(182, 188, 197, 0.09) 10px, transparent 10px, transparent 22px)",
                                    }}
                                />

                                <div className="relative z-10 flex h-full flex-col">
                                    <span className="font-clash text-btn-primary text-[28px] leading-none font-medium transition-colors duration-300 group-focus-within:text-[#e6eaef] group-hover:text-[#e6eaef] md:text-[40px]">
                                        {card.number}
                                    </span>

                                    <h3 className="font-clash mt-8 text-[16px] leading-[1.05] font-medium text-[#101419] transition-colors duration-300 group-focus-within:text-[#ffffff] group-hover:text-[#ffffff] md:text-[24px]">
                                        {cardTitle.map((line) => (
                                            <React.Fragment key={line}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </h3>

                                    <p className="font-funnel mt-6 max-w-xs text-[14px] leading-[1.6] text-[#50555b] transition-colors duration-300 group-focus-within:text-[#d4d8dd] group-hover:text-[#d4d8dd] md:text-[16px]">
                                        {card.description}
                                    </p>

                                    <div className="mt-auto flex justify-end pt-8">
                                        <Image
                                            src={card.icon}
                                            alt={`${card.title.replace("\n", " ")} icon`}
                                            width={30}
                                            height={30}
                                            className="transition-all duration-300 group-focus-within:brightness-0 group-focus-within:invert group-hover:brightness-0 group-hover:invert"
                                        />
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default OperatingModel;
