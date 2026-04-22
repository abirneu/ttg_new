"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";

type StoryItem = {
    id: number;
    rating: number;
    logo: string;
    description: string;
    name: string;
    role: string;
    image: string;
};

const sharedLogo = "/images/Home/Stories-logo-1.png";
const sharedImage = "/images/Home/Stories-person-1.png";

const stories: StoryItem[] = [
    {
        id: 1,
        rating: 4,
        logo: sharedLogo,
        description:
            "Working with TTG was a game changer for our business. Their team understood our vision and delivered a polished product with speed and precision.",
        name: "Ethan Carther",
        role: "Head of Creative @ GrapesLAB",
        image: sharedImage,
    },
    {
        id: 2,
        rating: 5,
        logo: sharedLogo,
        description:
            "We needed one partner to handle strategy, execution, and support. TTG integrated every moving part and helped us scale with confidence.",
        name: "Maya Reynolds",
        role: "Operations Lead @ BrightKite",
        image: sharedImage,
    },
    {
        id: 3,
        rating: 5,
        logo: sharedLogo,
        description:
            "The process felt seamless from day one. Communication was clear, deadlines were met, and the final output exceeded what we expected.",
        name: "Daniel Harper",
        role: "Marketing Director @ LumenFlow",
        image: sharedImage,
    },
    {
        id: 4,
        rating: 3,
        logo: sharedLogo,
        description:
            "TTG brought structure to our growth phase. Their team blended design, technology, and operations into one smooth system for our company.",
        name: "Nina Patel",
        role: "Co-Founder @ NorthPeak",
        image: sharedImage,
    },
];

const Stories = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const slideOffset = activeIndex * (100 / stories.length);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % stories.length);
    };

    const handlePrevious = () => {
        setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
    };

    return (
        <section className="bg-[#eceff1]">
            <Container className="py-16 md:py-24">
                <InfoBadge
                    icon="/icons/Badges/iconoir_quote.png"
                    text="Real Stories, Real Results"
                />

                <h2 className="mt-8 max-w-240 font-clash text-[34px] leading-[1.2] font-medium text-[#0b0b0b] md:text-[40px] md:leading-[1.05]">
                    Loved by creators, marketers, and teams
                </h2>

                <p className="mt-4 font-funnel text-[18px] text-[#525353] md:text-[16px]">
                    Real stories from individuals, teams, creators, and marketers.
                </p>

                <div className="relative mt-10 overflow-hidden rounded-2xl bg-[#0b0b0b] p-4 md:p-5">
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ width: `${stories.length * 100}%`, transform: `translateX(-${slideOffset}%)` }}
                    >
                        {stories.map((story) => (
                            <article
                                key={story.id}
                                className="box-border shrink-0 overflow-hidden px-3 md:px-5"
                                style={{ width: `${100 / stories.length}%` }}
                            >
                                <div className="flex h-full flex-col gap-5 overflow-hidden rounded-xl md:flex-row md:items-center md:justify-between md:gap-8">
                                    <div className="flex min-h-64 min-w-0 flex-1 flex-col px-2 py-2 pb-12 md:px-1 md:py-3 md:pr-5 ">
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-1.5">
                                                {Array.from({ length: 5 }).map((_, starIndex) => (
                                                    <FaStar
                                                        key={`${story.id}-star-${starIndex}`}
                                                        size={18}
                                                        className={
                                                            starIndex < story.rating
                                                                ? "text-[#ff6f3d]"
                                                                : "text-[#d4d4d4]"
                                                        }
                                                    />
                                                ))}
                                            </div>

                                            <div className="border-l border-[#7a7f85] pl-6">
                                                <Image
                                                    src={story.logo}
                                                    alt={`${story.name} logo`}
                                                    width={130}
                                                    height={36}
                                                    className="h-auto w-auto max-w-23 object-contain"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-8 h-px w-full bg-[#f2f4f6]/80" />

                                        <p className="mt-12 max-w-2xl font-funnel text-[15px] leading-[1.7] text-[#f4f6f8] md:mt-20 md:text-[16px] ">
                                            “{story.description}”
                                        </p>

                                        <p className="mt-auto pt-10 font-funnel text-[18px] text-[#f8fbfe] md:text-[16px]">
                                            <span className="font-semibold">{story.name}</span>
                                            <span className="text-[#c0c7ce]"> - {story.role}</span>
                                        </p>
                                    </div>

                                    <div className="relative aspect-square w-full overflow-hidden rounded-xl md:ml-2 md:h-65 md:w-65 md:shrink-0">
                                        <Image
                                            src={story.image}
                                            alt={story.name}
                                            fill
                                            className="object-cover"
                                            priority={story.id === 1}
                                        />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="pointer-events-none absolute inset-x-4 bottom-5 z-10 md:inset-x-1 md:bottom-6">
                        <div className="flex items-end md:gap-5">
                            <div className="pointer-events-auto flex w-full items-center justify-end">
                                <div className="flex items-center gap-5 text-white">
                                    <button
                                        type="button"
                                        aria-label="Previous story"
                                        onClick={handlePrevious}
                                        className="inline-flex items-center justify-center transition-colors duration-200 hover:cursor-pointer"
                                    >
                                        <FiArrowLeft size={25} />
                                    </button>

                                    <button
                                        type="button"
                                        aria-label="Next story"
                                        onClick={handleNext}
                                        className="inline-flex items-center justify-center transition-colors duration-200 hover:cursor-pointer "
                                    >
                                        <FiArrowRight size={25} />
                                    </button>
                                </div>
                            </div>

                            <div className="hidden w-80 shrink-0 md:block" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Stories;