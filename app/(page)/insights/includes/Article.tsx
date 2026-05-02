"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "@/app/components/Container";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";
import articlesData from "@/app/data/articles.json";
import Link from "next/link";
import { truncateText } from "@/app/utils/truncate";

const Article = () => {
    const featuredArticles = articlesData.slice(0, 3);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % featuredArticles.length);
        }, 5000); // Slide every 5 seconds

        return () => clearInterval(interval);
    }, [featuredArticles.length]);

    return (
        <section className="overflow-hidden bg-white py-6 md:py-20">
            <Container>
                {/* Section Title */}
                <div className="mb-6 text-center md:mb-10">
                    <h2 className="font-clash text-[28px] font-medium text-[#04070D] md:text-[40px]">
                        Latest Article
                    </h2>
                </div>

                {/* Sliding Carousel Container */}
                <div className="w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {featuredArticles.map((article) => (
                            <div
                                key={article.id}
                                className="w-full shrink-0 px-2 md:px-4"
                            >
                                <div className="overflow-hidden rounded-xl border-2 border-[#eaeaeb] bg-white shadow-[10px_20px_60px_-15px_rgba(0,0,0,0.05)]">
                                    <div className="flex flex-col gap-2 md:gap-8 p-1 md:flex-row md:gap-10 md:p-2 md:p-6">
                                        {/* Image Section */}
                                        <div className="relative  w-full shrink-0 overflow-hidden rounded-xl Break  h-[244px] md:w-[480px] md:rounded-xl">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex w-full px-3 md:px-0 flex-col justify-center py-4">
                                            <h3 className="font-clash mb-3 md:mb-6 text-[16px] leading-[1.2] font-semibold text-[#04070D] md:text-[36px]">
                                                {article.title}
                                            </h3>

                                            <div className="mb-10 space-y-5">
                                                <p className="font-funnel text-[12px] md:text-[16px] leading-[1.6] text-[#525353]">
                                                    <span className="block md:hidden">
                                                        {truncateText(
                                                            article.description,
                                                            200
                                                        )}
                                                    </span>
                                                    <span className="hidden md:block">
                                                        {truncateText(
                                                            article.description,
                                                            750
                                                        )}
                                                    </span>
                                                </p>
                                            </div>

                                            {/* Footer Metadata & Link */}
                                            <div className="flex flex-wrap items-center justify-between gap-6 md:pt-16">
                                                <div className="flex items-center gap-6">
                                                    <div className="flex items-center gap-2.5 text-[#525353]">
                                                        <FiCalendar className="text-xl opacity-70" />
                                                        <span className="font-funnel text-[12px] md:text-[16px]">
                                                            {article.date}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-1 md:gap-2.5 text-[#525353]">
                                                        <FiClock className="text-xl opacity-70" />
                                                        <span className="font-funnel text-[12px] md:text-[16px]">
                                                            {
                                                                article.readingTime
                                                            }
                                                        </span>
                                                    </div>
                                                </div>

                                                <Link
                                                    href={`/insights/${article.id}`}
                                                    className="group flex items-center gap-1 text-[14px] md:text-[17px] font-semibold text-[#0C7E9A] transition-all duration-300 hover:gap-4"
                                                >
                                                    Read More
                                                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </Container>
        </section>
    );
};

export default Article;
