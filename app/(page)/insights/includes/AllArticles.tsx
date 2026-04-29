"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/app/components/Container";
import {
    FiCalendar,
    FiClock,
    FiChevronLeft,
    FiChevronRight,
    FiChevronsLeft,
    FiChevronsRight,
} from "react-icons/fi";
import articlesData from "@/app/data/articles.json";
import Link from "next/link";

const categories = ["All", "Tech", "AI", "Marketing"];

const AllArticles = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);

    const filteredArticles =
        activeCategory === "All"
            ? articlesData
            : articlesData.filter(
                  (article) => article.category === activeCategory
              );

    const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedArticles = filteredArticles.slice(startIndex, endIndex);

    return (
        <section className="bg-[#f7f7f7] py-16 md:py-24">
            <Container>
                <div className="mb-16 flex flex-wrap items-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setCurrentPage(1);
                            }}
                            className={`relative rounded-xl px-8 py-2.5 text-[15px] font-medium transition-all duration-300 ${
                                activeCategory === category
                                    ? "border-3 border-[#d9d9d9] bg-[#0C7E9A] text-white shadow-lg"
                                    : "border-3 border-[#d9d9d9] bg-white text-[#525353]"
                            }`}
                        >
                            {activeCategory === category && (
                                <>
                                    <div className="absolute top-1.5 left-1.5 h-1.5 w-1.5 rounded-full bg-[#dedede] opacity-80" />
                                    <div className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#dedede] opacity-80" />
                                    <div className="absolute bottom-1.5 left-1.5 h-1.5 w-1.5 rounded-full bg-[#dedede] opacity-80" />
                                    <div className="absolute right-1.5 bottom-1.5 h-1.5 w-1.5 rounded-full bg-[#dedede] opacity-80" />
                                </>
                            )}
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                    {displayedArticles.map((article) => (
                        <div
                            key={article.id}
                            className="group flex h-full flex-col bg-transparent transition-all duration-500"
                        >
                            <div className="relative mb-6 aspect-[4/3] rounded-md bg-white p-2 md:p-3">
                                <div className="absolute top-2.5 left-2.5 z-20 h-2 w-2 rounded-full bg-black/20" />
                                <div className="absolute top-2.5 right-2.5 z-20 h-2 w-2 rounded-full bg-black/20" />
                                <div className="absolute bottom-2.5 left-2.5 z-20 h-2 w-2 rounded-full bg-black/20" />
                                <div className="absolute right-2.5 bottom-2.5 z-20 h-2 w-2 rounded-full bg-black/20" />

                                <div className="relative h-full w-full overflow-hidden rounded-none">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover p-2 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="flex flex-grow flex-col">
                                <h4 className="font-clash mb-3 text-xl leading-tight font-semibold text-[#04070D] transition-colors md:text-[20px]">
                                    {article.title}
                                </h4>
                                <p className="font-funnel mb-6 line-clamp-2 text-[14px] leading-relaxed text-[#545454]">
                                    {article.description}
                                </p>

                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center gap-5 text-[14px] text-[#545454]">
                                        <div className="flex items-center gap-2">
                                            <FiCalendar className="text-lg opacity-60" />
                                            <span>{article.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FiClock className="text-lg opacity-60" />
                                            <span>{article.readingTime}</span>
                                        </div>
                                    </div>
                                    <Link
                                        href={`/insights/${article.id}`}
                                        className="text-[15px] font-bold text-[#0C7E9A] transition-all hover:underline"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-24 flex flex-wrap items-center justify-center gap-6 border-t border-[#E2E8F0] pt-10">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setCurrentPage(1)}
                            className="text-[#94a3b8] transition-all hover:text-[#0C7E9A] disabled:opacity-30"
                            disabled={currentPage === 1}
                        >
                            <FiChevronsLeft size={18} />
                        </button>
                        <button
                            onClick={() =>
                                setCurrentPage((prev) => Math.max(prev - 1, 1))
                            }
                            className="text-[#94a3b8] transition-all hover:text-[#0C7E9A] disabled:opacity-30"
                            disabled={currentPage === 1}
                        >
                            <FiChevronLeft size={18} />
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        {Array.from(
                            { length: Math.min(5, totalPages) },
                            (_, i) => {
                                let pageNum;
                                if (totalPages <= 5) {
                                    pageNum = i + 1;
                                } else if (currentPage <= 3) {
                                    pageNum = i + 1;
                                } else if (currentPage > totalPages - 3) {
                                    pageNum = totalPages - 4 + i;
                                } else {
                                    pageNum = currentPage - 2 + i;
                                }

                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => setCurrentPage(pageNum)}
                                        className={`h-13 w-13 rounded-full text-sm font-medium transition-all ${
                                            pageNum === currentPage
                                                ? "text-btn-primary bg-[#e1e8ea]"
                                                : "text-[#525353] transition-all hover:bg-[#e1e8ea] hover:text-[#0C7E9A]"
                                        }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            }
                        )}
                    </div>

                    <div className="flex items-center gap-4 text-[#94a3b8]">
                        <button
                            onClick={() =>
                                setCurrentPage((prev) =>
                                    Math.min(prev + 1, totalPages)
                                )
                            }
                            className="transition-all hover:text-[#0C7E9A] disabled:opacity-30"
                            disabled={currentPage === totalPages}
                        >
                            <FiChevronRight size={18} />
                        </button>
                        <button
                            onClick={() => setCurrentPage(totalPages)}
                            className="transition-all hover:text-[#0C7E9A] disabled:opacity-30"
                            disabled={currentPage === totalPages}
                        >
                            <FiChevronsRight size={18} />
                        </button>
                    </div>
                    <div className="ml-4">
                        <div className="relative">
                            <select
                                value={itemsPerPage}
                                onChange={(e) => {
                                    setItemsPerPage(Number(e.target.value));
                                    setCurrentPage(1);
                                }}
                                className="cursor-pointer appearance-none rounded-[8px] border border-[#E2E8F0] bg-white px-6 py-2.5 pr-10 text-[14px] text-[#525353] focus:ring-2 focus:ring-[#0C7E9A]/10 focus:outline-none"
                            >
                                <option>9</option>
                                <option>12</option>
                                <option>15</option>
                            </select>
                            <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
                                <FiChevronRight className="size-3 rotate-90 text-[#94a3b8]" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AllArticles;
