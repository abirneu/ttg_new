import React from "react";
import Image from "next/image";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";
import CommonButton from "@/app/components/CommonButton";

const cultureCards = [
    {
        title: "Global",
        description:
            "Collaborate extensively with top clients from all over the world.",
        image: "/images/Careers/global.png",
    },
    {
        title: "Growth",
        description:
            "Collaborate extensively with top clients from all over the world.",
        image: "/images/Careers/growth.png",
    },
    {
        title: "Impact",
        description:
            "Collaborate extensively with top clients from all over the world.",
        image: "/images/Careers/impact.png",
    },
    {
        title: "Remoter",
        description:
            "Collaborate extensively with top clients from all over the world.",
        image: "/images/Careers/remoter.png",
    },
] as const;

const WhyWorkTTG = () => {
    return (
        <section className="w-full bg-[#f5f7f8] py-14 md:py-20">
            <Container>
                <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
                    <div className="max-w-3xl">
                        <div className="flex items-center justify-center md:items-start md:justify-start">
                        <InfoBadge
                            icon="/icons/Badges/question.png"
                            text="Why TTG?"
                            className="mb-7"
                        />
                        </div>
                        

                        <h2 className="font-clash text-[28px] text-center md:text-left  leading-[1.12] font-medium text-[#080b12] md:text-[40px]">
                            Why Work at TTG?
                        </h2>

                        <p className="font-funnel text-center md:text-left mt-4 max-w-xl text-[14px] leading-[1.65] text-[#525353] md:text-[16px]">
                            Defining the future of global BPO and technical
                            solutions requires a culture that transcends
                            borders.
                        </p>
                    </div>

                    <div className="hidden md:block flex justify-start lg:justify-end">
                        <div className="relative w-72 md:w-86">
                            <Image
                                src="/images/Careers/drop-cv-bg.png"
                                alt=""
                                width={344}
                                height={252}
                                className="pointer-events-none h-auto w-full opacity-60"
                            />
                            <CommonButton
                                href="/careers"
                                text="Drop Your CV"
                                icon="/icons/drop-cv.png"
                                className="absolute  top-1/2 left-1/2 whitespace-nowrap z-10 -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 px-5 md:px-0 xl:mt-16 xl:grid-cols-4">
                    {cultureCards.map((item, index) => {
                        const isLowerCard = index % 2 === 1;

                        return (
                            <article
                                key={item.title}
                                className={`relative rounded-2xl bg-[#ffffff] p-3  transition-transform duration-300 ${isLowerCard ? "xl:translate-y-14" : "xl:-translate-y-1"}`}
                            >
                                <span className="absolute top-3 right-3 h-2.5 w-2.5 rounded-full bg-[#cfd3d7]" />

                                <h3 className="font-clash px-1 text-[20px] md:text-[24px] leading-none font-medium text-[#11151d] ">
                                    {item.title}
                                </h3>

                                <div className="mt-3 flex min-h-56 md:min-h-63.75 flex-col rounded-xl bg-[#f3f3f3] p-4">
                                    <div className="mx-auto mt-4 md:mt-1 flex h-[66.79px] w-[66.79px] md:h-29.5 md:w-29.5 items-center justify-center md:h-31.5 md:w-31.5">
                                        <Image
                                            src={item.image}
                                            alt={`${item.title} icon`}
                                            width={126}
                                            height={126}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>

                                    <p className="font-funnel mt-auto max-w-62.5  leading-[1.45] text-[#555b64] text-[16px]">
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
                <div className="md:hidden block flex mt-5 justify-center ">
                        <div className="relative w-62 ">
                            <Image
                                src="/images/Careers/drop-cv-bg.png"
                                alt=""
                                width={344}
                                height={252}
                                className="pointer-events-none h-auto w-full opacity-60"
                            />
                            <div className="absoulte">
                                <CommonButton
                                href="/careers"
                                text="Drop Your CV"
                                icon="/icons/drop-cv.png"
                                className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
                            />
                            </div>
                            
                        </div>
                    </div>
            </Container>
        </section>
    );
};

export default WhyWorkTTG;
