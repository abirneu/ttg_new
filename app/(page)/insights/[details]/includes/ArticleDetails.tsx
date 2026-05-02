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
                className="relative pt-24 pb-2 md:pt-32 md:pb-10"
                style={{
                    backgroundImage:
                        "url('/images/Insights/article-details.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "scroll",
                }}
            >
                <Container>
                    <div className="mx-auto mb-1 md:mb-12 max-w-4xl md:mx-0">
                        <h1 className="font-clash text-center text-3xl leading-tight font-semibold text-[#04070D] md:text-left md:text-[36px]">
                            {article.title}
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 gap-2 md:gap-12 lg:grid-cols-12">
                        {/* Main Image */}
                        <div className="order-2 md:order-none lg:col-span-8">
                            <div className="relative aspect-[4/5] md:aspect-[19/9] rounded-2xl  shadow-sm ">
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
                        <div className="order-1 flex h-fit flex-col items-center justify-center gap-8 p-6 text-center md:order-none md:items-start md:text-left lg:col-span-4 md:p-8">
                            {/* Author */}
                            {article.author && (
                                <div>
                                    <p className="mb-4 text-[14px] font-medium text-[#000000]">
                                        Written by
                                    </p>
                                    <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-4 md:justify-start">
                                        <div className="relative h-12 w-12 border-2 border-btn-primary overflow-hidden rounded-full">
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
                            <div className="hidden md:block">
                                <p className="mb-4 text-[14px] font-medium text-[#525353]">
                                    Category
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                                    {categoryItems.map(
                                        (category: string, index: number) => (
                                            <span
                                                key={`${category}-${index}`}
                                                className="inline-flex items-center rounded-[14px] text-[16px] border border-[#CDD3DA] bg-[#ffffff] px-8 py-2.5 text-base font-medium text-[#525353]"
                                            >
                                                {category}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Metadata */}
                            <div className="hidden items-center justify-center gap-5 border-t border-[#F1F5F9] pt-6 md:flex md:justify-start">
                                <div className="flex items-center gap-2 text-sm text-[#4a5565]">
                                    <FiCalendar className="text-[#4a5565]" />
                                    <span>{article.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-[#4a5565]">
                                    <FiEye className="text-[#4a5565]" />
                                    <span>{article.views || "1K Viewers"}</span>
                                </div>
                            </div>
                        </div>

                        {/* Mobile: Metadata after image */}
                        <div className="order-3 flex items-center justify-start gap-5 border-t border-[#F1F5F9] px-6 pt-6 text-left md:hidden">
                            <div className="flex items-center gap-2 text-sm text-[#4a5565]">
                                <FiCalendar className="text-[#4a5565]" />
                                <span>{article.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#4a5565]">
                                <FiEye className="text-[#4a5565]" />
                                <span>{article.views || "1K Viewers"}</span>
                            </div>
                        </div>

                        {/* Mobile: Category after metadata */}
                        <div className="order-4 px-6 pb-2 text-left md:hidden">
                            <p className="mb-4 text-[14px] font-medium text-black">
                                Category
                            </p>
                            <div className="flex flex-wrap justify-start gap-4">
                                {categoryItems.map((category: string, index: number) => (
                                    <span
                                        key={`${category}-${index}`}
                                        className="inline-flex items-center rounded-[14px] text-[16px] border border-[#CDD3DA] bg-[#ffffff] px-8 py-2.5 text-base font-medium text-[#525353]"
                                    >
                                        {category}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Content Section */}
            <section className="py-1 md:py-2">
                <Container>
                    <div className="mx-auto ">
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
                        <div className="mt-1  pt-8">
                            <p className="text-[16px] font-medium text-[#555555]">
                                {article.date} - {article.readingTime}
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Articles Section */}
            <section className="bg-[#F8FAFC] py-6 md:py-24">
                <Container>
                    <div className="mb-5 md:mb-16 text-center">
                        <h2 className="font-clash text-[24px] font-medium text-[#04070D] md:text-[36px]">
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
