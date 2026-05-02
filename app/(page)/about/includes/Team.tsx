import React from "react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";

const teamMembers = [
    {
        role: "CEO & Founder",
        name: "Abdul Bashir",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        linkedin: "https://www.linkedin.com/",
    },
    {
        role: "COO",
        name: "Sabbir Rahman",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        linkedin: "https://www.linkedin.com/",
    },
    {
        role: "CTO",
        name: "Mahbub Hossain",
        image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
        linkedin: "https://www.linkedin.com/",
    },
    {
        role: "Head of Operations",
        name: "Nadia Karim",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        linkedin: "https://www.linkedin.com/",
    },
    {
        role: "Product Lead",
        name: "Tanvir Hossain",
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
        linkedin: "https://www.linkedin.com/",
    },
] as const;

const Team = () => {
    return (
        <section className="w-full overflow-hidden bg-[#ffffff] py-5 md:py-10">
            <Container>
                <div className="max-w-3xl">
                    <div className="flex justify-center md:justify-start">
                        <InfoBadge
                            icon="/icons/Badges/three-people.png"
                            text="Meet The Team"
                            className="mb-4"
                        />
                    </div>

                    <h2 className="font-clash flex justify-center text-[28px] font-medium text-[#0d1219] md:justify-start md:text-[40px]">
                        The Team Behind TTG
                    </h2>
                    <p className="font-funnel mt-2 text-center text-[14px] leading-[1.55] text-[#4f555c] md:max-w-xl md:text-left md:text-[16px]">
                        A multidisciplinary team of visionaries, engineers, and
                        operational experts dedicated to scaling your business.
                    </p>
                </div>

                <div className="team-marquee-shell relative mt-10 overflow-hidden md:mt-14">
                    <div className="team-marquee-track">
                        {[0, 1].map((copyIndex) => (
                            <div
                                key={copyIndex}
                                className={`team-marquee-strip flex items-stretch gap-0 ${copyIndex === 1 ? "team-marquee-duplicate" : ""}`}
                                aria-hidden={copyIndex === 1}
                            >
                                {teamMembers.map((member) => (
                                    <article
                                        key={`${member.name}-${copyIndex}`}
                                        className="group/member w-72 shrink-0 sm:w-80 lg:w-96"
                                    >
                                        <div className="relative overflow-hidden border border-transparent transition-colors duration-500 group-hover/member:border-[#0c7e9a]">
                                            <span className="pointer-events-none absolute top-0 left-0 z-20 h-12 w-12 border-t-2 border-l border-[#0c7e9a] transition-opacity duration-300 group-hover/member:opacity-0" />
                                            <span className="pointer-events-none absolute top-0 right-0 z-20 h-12 w-12 border-t-2 border-r border-[#0c7e9a] transition-opacity duration-300 group-hover/member:opacity-0" />
                                            <span className="pointer-events-none absolute bottom-0 left-0 z-20 h-12 w-12 border-b-2 border-l border-[#0c7e9a] transition-opacity duration-300 group-hover/member:opacity-0" />
                                            <span className="pointer-events-none absolute right-0 bottom-0 z-20 h-12 w-12 border-r-2 border-b border-[#0c7e9a] transition-opacity duration-300 group-hover/member:opacity-0" />

                                            <div className="pointer-events-none absolute inset-0 z-10 border border-[#0c7e9a] opacity-0 transition-opacity duration-500 group-hover/member:opacity-100" />

                                            <div
                                                className="relative h-88 overflow-hidden bg-[#f7f9fb] sm:h-96 lg:h-107.5"
                                                style={{
                                                    backgroundImage:
                                                        "repeating-linear-gradient(-40deg, rgba(17, 23, 30, 0.03) 0px, rgba(17, 23, 30, 0.03) 1px, transparent 1px, transparent 7px)",
                                                }}
                                            >
                                                <Image
                                                    src={member.image}
                                                    alt={`${member.name} portrait`}
                                                    fill
                                                    sizes="(max-width: 640px) 18rem, (max-width: 1024px) 20rem, 24rem"
                                                    className="object-cover object-top grayscale transition-all duration-500 ease-out group-hover/member:scale-105 group-hover/member:grayscale-0"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-5 flex items-start justify-between gap-4 px-5">
                                            <div>
                                                <p className="font-clash text-btn-primary text-[14px] md:text-[16px] font-medium uppercase">
                                                    {member.role}
                                                </p>
                                                <h3 className="font-clash mt-1 text-[20px] md:text-[24px] leading-tight font-medium text-[#0d1219]">
                                                    {member.name}
                                                </h3>
                                            </div>

                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Visit ${member.name} on LinkedIn`}
                                                className="mt-2 inline-flex h-6 w-6 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-md border border-[#0c7e9a] text-[#0c7e9a] transition-colors duration-300 hover:bg-[#0c7e9a] hover:text-white"
                                            >
                                                <FaLinkedinIn className="h-3 w-3 md:h-4 md:w-4" />
                                            </a>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Team;
