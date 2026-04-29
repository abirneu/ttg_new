"use client";

import React from "react";
import Image from "next/image";
import Container from "@/app/components/Container";
import { FiCalendar, FiClock, FiEye } from "react-icons/fi";
import articlesData from "@/app/data/articles.json";
import Link from "next/link";

type ArticleContentBlock = {
    type: "paragraph" | "heading";
    text: string;
};

type Article = (typeof articlesData)[number] & {
    content?: ArticleContentBlock[];
    views?: string;
};

interface ArticleDetailsProps {
    article: Article;
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({ article }) => {
    // Get related articles (excluding the current one)
    const relatedArticles = articlesData
        .filter((a) => a.id !== article.id)
        .slice(0, 3);

    const categoryItems: string[] = Array.isArray(article?.category)
        ? article.category
              .map((item: unknown) => String(item).trim())
              .filter(Boolean)
        : typeof article?.category === "string"
          ? article.category
                .split(/[,|/]/)
                .map((item: string) => item.trim())
                .filter(Boolean)
          : [];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section
                className="relative pt-24 pb-12 md:pt-32 md:pb-20"
                style={{
                    backgroundImage:
                        "url('/images/Insights/article-details-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "scroll",
                }}
            >
                <Container>
                    <div className="mb-12 max-w-4xl">
                        <h1 className="font-clash text-3xl leading-tight font-semibold text-[#04070D] md:text-[36px]">
                            {article.title}
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-12">
                        {/* Main Image */}
                        <div className="lg:col-span-8">
                            <div className="relative aspect-[19/9] rounded-2xl p-2 shadow-sm md:p-3">
                                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Info */}
                        <div className="flex h-fit flex-col justify-center gap-8 p-6 md:p-8 lg:col-span-4">
                            {/* Author */}
                            {article.author && (
                                <div>
                                    <p className="mb-4 text-[14px] font-medium text-[#525353]">
                                        Written by
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                                            <Image
                                                src={article.author.image}
                                                alt={article.author.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#04070D]">
                                                {article.author.name}
                                            </h4>
                                            <p className="text-xs text-[#525353]">
                                                {article.author.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Category */}
                            <div>
                                <p className="mb-4 text-[14px] font-medium text-[#525353]">
                                    Category
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {categoryItems.map(
                                        (category: string, index: number) => (
                                            <span
                                                key={`${category}-${index}`}
                                                className="inline-flex items-center rounded-[14px] border border-[#CDD3DA] bg-[#ffffff] px-8 py-2.5 text-base font-medium text-[#525353]"
                                            >
                                                {category}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Metadata */}
                            <div className="flex items-center justify-between border-t border-[#F1F5F9] pt-6">
                                <div className="flex items-center gap-2 text-sm text-[#525353]">
                                    <FiCalendar className="text-[#4a5565]" />
                                    <span>{article.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-[#525353]">
                                    <FiEye className="text-[#4a5565]" />
                                    <span>{article.views || "1K Viewers"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="mx-auto max-w-4xl">
                        <div className="prose prose-lg prose-slate max-w-none">
                            {article.content ? (
                                article.content.map(
                                    (block: ArticleContentBlock, index: number) => {
                                        if (block.type === "paragraph") {
                                            return (
                                                <p
                                                    key={index}
                                                    className="font-funnel mb-8 text-lg leading-relaxed text-[#525353] md:text-xl"
                                                >
                                                    {block.text}
                                                </p>
                                            );
                                        }
                                        if (block.type === "heading") {
                                            return (
                                                <h2
                                                    key={index}
                                                    className="font-clash mt-12 mb-6 text-2xl font-semibold text-[#04070D] md:text-3xl"
                                                >
                                                    {block.text}
                                                </h2>
                                            );
                                        }
                                        return null;
                                    }
                                )
                            ) : (
                                <p className="font-funnel text-lg leading-relaxed text-[#525353]">
                                    {article.description}
                                </p>
                            )}
                        </div>

                        {/* Footer Meta */}
                        <div className="mt-16 border-t border-[#F1F5F9] pt-8">
                            <p className="text-sm font-medium text-[#94A3B8]">
                                {article.date} - {article.readingTime}
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Articles Section */}
            <section className="bg-[#F8FAFC] py-24">
                <Container>
                    <div className="mb-16 text-center">
                        <h2 className="font-clash text-4xl font-medium text-[#04070D] md:text-[36px]">
                            Related Articles
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                        {relatedArticles.map((rel) => (
                            <div
                                key={rel.id}
                                className="group flex h-full flex-col bg-transparent transition-all duration-500"
                            >
                                <div className="relative mb-6 aspect-[4/3] rounded-md bg-white p-2 md:p-3">
                                    <div className="absolute top-2.5 left-2.5 z-20 h-2 w-2 rounded-full bg-black/20" />
                                    <div className="absolute top-2.5 right-2.5 z-20 h-2 w-2 rounded-full bg-black/20" />
                                    <div className="absolute bottom-2.5 left-2.5 z-20 h-2 w-2 rounded-full bg-black/20" />
                                    <div className="absolute right-2.5 bottom-2.5 z-20 h-2 w-2 rounded-full bg-black/20" />

                                    <div className="relative h-full w-full overflow-hidden rounded-none">
                                        <Image
                                            src={rel.image}
                                            alt={rel.title}
                                            fill
                                            className="object-cover p-2 transition-transform duration-700"
                                        />
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="flex flex-grow flex-col">
                                    <h4 className="font-clash mb-3 text-xl leading-tight font-semibold text-[#04070D] transition-colors md:text-[20px]">
                                        {rel.title}
                                    </h4>
                                    <p className="font-funnel mb-6 line-clamp-2 text-[14px] leading-relaxed text-[#545454]">
                                        {rel.description}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex items-center gap-5 text-[14px] text-[#545454]">
                                            <div className="flex items-center gap-2">
                                                <FiCalendar className="text-lg opacity-60" />
                                                <span>{rel.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FiClock className="text-lg opacity-60" />
                                                <span>{rel.readingTime}</span>
                                            </div>
                                        </div>
                                        <Link
                                            href={`/insights/${rel.id}`}
                                            className="text-[15px] font-bold text-[#0C7E9A] transition-all hover:underline"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
};

export default ArticleDetails;
