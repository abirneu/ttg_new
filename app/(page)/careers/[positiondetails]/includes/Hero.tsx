import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/app/components/Container";
import jobsData from "@/app/data/jobs.json";
import InfoBadge from "@/app/components/InfoBadge";
import CommonButton from "@/app/components/CommonButton";

type JobDetails = (typeof jobsData)[number];

interface HeroProps {
    job: JobDetails;
}

interface SectionHeaderProps {
    title: string;
    icon?: string;
}

const POSITION_DETAILS_HERO_IMAGE =
    "/images/Insights/open-posiiton-details-hero.png";

const SectionHeader = ({
    title,
    icon = "/images/Careers/about-ttg.png",
}: SectionHeaderProps) => {
    return (
        <div className="mb-4 flex items-center gap-4">
            <div className="flex shrink-0 items-center gap-2.5">
                <span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-[#dfeef0]">
                    <Image
                        src={icon}
                        alt=""
                        width={18}
                        height={18}
                        className="object-contain"
                    />
                </span>
                <h2 className="font-clash text-[24px] leading-tight font-medium text-[#151c24] md:text-[30px]">
                    {title}
                </h2>
            </div>
            <div className="h-[1px] flex-1 bg-[#dde7eb]" />
        </div>
    );
};

const Hero = ({ job }: HeroProps) => {
    return (
        <main className="w-full overflow-hidden bg-[#f6f8f9]">
            <section
                className="relative w-full overflow-hidden pt-24 pb-16 md:pt-32 md:pb-60"
                style={{
                    backgroundImage: `url('${POSITION_DETAILS_HERO_IMAGE}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "scroll",
                }}
            >
                <Container>
                    <div className="grid items-center gap-10">
                        <div className="max-w-4xl md:mt-50">
                            <InfoBadge
                                icon="/icons/Badges/open-position.png"
                                text="Open Position"
                                className=""
                            />

                            <h1 className="font-clash mt-5 text-[36px] font-medium text-[#0a0f17] md:text-[48px]">
                                {job.title}
                            </h1>

                            <div className="mt-5 flex flex-wrap gap-3">
                                <span className="font-funnel inline-flex items-center gap-2 rounded-full border border-[#d9f2ff] bg-[#f6f8f9] px-4 py-2 text-[14px] font-[14px] text-[#464f58] shadow-[0_2px_8px_rgba(12,126,154,0.06)]">
                                    <span className="h-2 w-2 rounded-full bg-[#0c7e9a]" />
                                    {job.type}
                                </span>
                                <span className="font-funnel inline-flex items-center gap-2 rounded-full border border-[#d9f2ff] bg-[#f6f8f9] px-4 py-2 text-[14px] font-[14px] text-[#464f58] shadow-[0_2px_8px_rgba(12,126,154,0.06)]">
                                    <span className="h-2 w-2 rounded-full bg-[#0c7e9a]" />
                                    {job.location}
                                </span>
                                <span className="font-funnel inline-flex items-center gap-2 rounded-full border border-[#d9f2ff] bg-[#f6f8f9] px-4 py-2 text-[14px] text-[#464f58] shadow-[0_2px_8px_rgba(12,126,154,0.06)]">
                                    <span className="h-2 w-2 rounded-full bg-[#0c7e9a]" />
                                    {job.experience}
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="relative pb-20 md:pb-24">
                <div
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, #c5e4e9 1.5px, transparent 1.5px)",
                        backgroundSize: "22px 22px",
                        maskImage:
                            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                        opacity: 0.6,
                    }}
                />

                <div className="mx-auto px-5 md:px-0 flex md:max-w-5xl items-center justify-center relative z-10">
                    <article className="relative rounded-xl border border-[#aed3de] bg-[#f6f8f9] p-5 md:px-20 shadow-[0_18px_50px_rgba(31,54,70,0.06)] md:p-10">
                        <div className="space-y-8 md:space-y-10">
                            <section>
                                <SectionHeader title="About TTG" />
                                <p className="font-funnel text-[15px] ml-10 leading-relaxed text-[#535353] md:text-[16px]">
                                    {job.sections.aboutTtg}
                                </p>
                            </section>

                            <section className="pt-2">
                                <SectionHeader
                                    title="The Role"
                                    icon="/images/Careers/role.png"
                                />
                                <p className="font-funnel text-[15px] ml-10 leading-relaxed text-[#535353] md:text-[16px]">
                                    {job.sections.theRole}
                                </p>
                            </section>

                            <section className="pt-2">
                                <SectionHeader
                                    title="Responsibilities"
                                    icon="/images/Careers/responsibilities.png"
                                />
                                <ul className="font-funnel list-disc ml-10 space-y-1.5 pl-6 text-[15px] leading-relaxed text-[#535353] md:text-[16px]">
                                    {job.sections.responsibilities.map(
                                        (item) => {
                                            return <li key={item}>{item}</li>;
                                        }
                                    )}
                                </ul>
                            </section>

                            <section className="pt-2">
                                <SectionHeader
                                    title="Requirements"
                                    icon="/images/Careers/requirements.png"
                                />
                                <ul className="font-funnel list-disc ml-10 space-y-1.5 pl-6 text-[15px] leading-relaxed text-[#535353] md:text-[16px]">
                                    {job.sections.requirements.map((item) => {
                                        return <li key={item}>{item}</li>;
                                    })}
                                </ul>
                            </section>

                            <section className="pt-2">
                                <SectionHeader
                                    title="Nice to Have"
                                    icon="/images/Careers/nice-to-have.png"
                                />
                                <ul className="font-funnel list-disc ml-10 space-y-1.5 pl-6 text-[15px] leading-relaxed text-[#535353] md:text-[16px]">
                                    {job.sections.niceToHave.map((item) => {
                                        return <li key={item}>{item}</li>;
                                    })}
                                </ul>
                            </section>

                            <section className="pt-2">
                                <SectionHeader
                                    title="Key Skills"
                                    icon="/images/Careers/key-skills.png"
                                />
                                <div className="flex flex-wrap gap-2.5">
                                    {job.keySkills.map((skill) => {
                                        return (
                                            <span
                                                key={skill}
                                                className="font-funnel ml-10 rounded-md border border-[#cde1e8] bg-[#eaf5fa] px-2.5 py-1 text-[13px] text-[#2f7387]"
                                            >
                                                {skill}
                                            </span>
                                        );
                                    })}
                                </div>
                            </section>

                            <section className="pt-2">
                                <SectionHeader
                                    title="What We Offer"
                                    icon="/images/Careers/what-we-offer.png"
                                />
                                <div className="flex flex-wrap gap-4">
                                    {job.whatWeOffer.map((benefit) => {
                                        return (
                                            <div
                                                key={benefit}
                                                className="relative ml-10"
                                            >
                                                <div className="flex items-center rounded-lg border border-[#dde7eb] bg-[#efefef] py-3 pr-5 pl-4 transition-all">
                                                    <div className="absolute top-[10%] bottom-[10%] left-[-1.5px] w-[2.5px] rounded-r-full bg-[#0c7e9a]" />
                                                    <span className="font-funnel ml-2 text-[16px] text-[#464f58]">
                                                        {benefit}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>
                        </div>
                    </article>
                </div>
                <div className="mx-auto mt-5 px-5 md:px-0 flex flex-wrap justify-end gap-3 md:max-w-5xl relative z-10">
                    <Link
                        href="/careers"
                        className="font-funnel inline-flex items-center rounded-full border border-[#0c7e9a] px-5 py-2 text-[14px] font-medium text-[#272727] transition-colors hover:bg-[#eef8fb]"
                    >
                        Back to Careers
                    </Link>
                     <div>
                        <CommonButton
                        href={`/careers/${job.id}/apply`}
                        text="Apply for this Role"
                        icon="/icons/Button_arrow/arrow-right.png"
                        className="!bg-[#0c7e9a] py-1.5 shadow-none z-999999 "
                        />
                    </div>               
                    
                </div>
            </section>
        </main>
    );
};

export default Hero;
