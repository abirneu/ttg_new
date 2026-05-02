import React from "react";
import Link from "next/link";
import Container from "@/app/components/Container";
import jobsData from "@/app/data/jobs.json";

const jobs = jobsData;

const OpenPositions = () => {
    return (
        <section className="w-full bg-[#ffffff] py-14 md:py-20">
            <Container>
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-2xl">
                        <h2 className="font-clash text-center md:text-left text-[28px] leading-tight font-medium text-[#0a0f17] md:text-[40px]">
                            Open Positions
                        </h2>
                        <p className="font-funnel text-center md:text-left mt-1 text-[14px] leading-relaxed text-[#555555] md:text-[16px]">
                            Filter by department or location to find your match.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="font-funnel relative inline-flex w-fit items-center rounded-full border border-[#1083a3] bg-[#f5f7f8] px-3 md:px-5 py-2 md:py-3  pr-12 md:pr-16 text-[14px] md:text-[16px] font-medium text-[#1f242b]"
                    >
                        All Department
                        <span className="bg-btn-primary absolute right-1 md:right-1 flex h-7 w-7 md:h-10 md:w-10 items-center justify-center rounded-full text-white">
                            <svg
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                aria-hidden="true"
                            >
                                {" "}
                                <path
                                    d="M5 7.5L10 12.5L15 7.5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </button>
                </div>

                <div className="mt-8 space-y-4 md:mt-10 md:space-y-5">
                    {jobs.map((opening) => {
                        return (
                            <article
                                key={opening.id}
                                className="rounded-xl px-4 py-4 md:px-6 md:py-5"
                                style={{
                                    backgroundColor: "#f0f2f3",
                                    backgroundImage:
                                        "repeating-linear-gradient(-33deg, rgba(18, 26, 34, 0.03) 0px, rgba(18, 26, 34, 0.03) 1px, transparent 1px, transparent 8px)",
                                }}
                            >
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <div className="min-w-0 flex-1">
                                        <h3 className="font-clash text-[16px] leading-tight font-medium text-[#11161e] md:text-[24px]">
                                            {opening.title}
                                        </h3>

                                        <p className="font-funnel mt-3 flex flex-wrap items-center gap-3 text-[14px] text-[#4f555d] md:text-[16px]">
                                            <span className="font-semibold text-[#464c54]">
                                                {opening.type}
                                            </span>
                                            <span className="bg-btn-primary h-1.5 w-1.5 rounded-full" />
                                            <span>{opening.location}</span>
                                        </p>
                                    </div>

                                    <Link
                                        href={`/careers/${opening.id}`}
                                        className="font-funnel text-btn-primary shrink-0 self-center text-[14px] font-medium underline decoration-1 underline-offset-2 transition-opacity hover:opacity-85"
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default OpenPositions;
