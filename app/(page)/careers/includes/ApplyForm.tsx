import React from "react";
import Container from "@/app/components/Container";
import jobsData from "@/app/data/jobs.json";

const jobs = jobsData;

const inputClassName =
    "h-11 w-full rounded-xl border border-transparent bg-[#ffffff] px-4 font-funnel text-[16px] text-[#3f454d] placeholder:text-[#a4a8ad] outline-none focus:border-[#9bcdd8]";

const ApplyForm = () => {
    return (
        <section
            id="apply-form"
            className="w-full bg-[#f5f7f8] py-14 md:py-20"
            style={{
                backgroundImage:
                    "radial-gradient(circle, rgba(12,126,154,0.09) 1.4px, transparent 1.4px)",
                backgroundSize: "22px 22px",
            }}
        >
            <Container>
                <div className="grid items-start gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
                    <div className="max-w-2xl pt-2 md:pt-8">
                        <h2 className="font-clash text-center md:text-left text-[28px] leading-[1.12] font-medium text-[#0a1018] md:text-[40px]">
                            Shape the
                            <span className="text-btn-primary block">
                                Future with Us.
                            </span>
                        </h2>

                        <p className="font-funnel text-center md:text-left mt-4 max-w-md leading-[1.55] text-[#555555] text-[16px]">
                            We aren&apos;t just looking for employees;
                            we&apos;re looking for visionaries. Drop your CV to
                            get started.
                        </p>
                    </div>

                    <div>
                        <form className="rounded-3xl border border-[#ffffff] bg-[#f7f9fa] p-5 md:p-8">
                            <h3 className="font-clash text-[18px] font-medium text-[#161b22] md:text-[20px]">
                                Provide Your Information
                            </h3>

                            <div className="mt-6 space-y-5 md:mt-8 md:space-y-6">
                                <div>
                                    <label
                                        htmlFor="fullName"
                                        className="font-funnel mb-2 block text-[14px] font-medium text-[#494949] md:text-[16px]"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        placeholder="Enter your name here"
                                        className={inputClassName}
                                    />
                                </div>

                                <div className="grid gap-5 md:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="font-funnel mb-2 block text-[14px] font-medium text-[#494949] md:text-[16px]"
                                        >
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Your Email"
                                            className={inputClassName}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="contact"
                                            className="font-funnel mb-2 block text-[14px] font-medium text-[#494949] md:text-[16px]"
                                        >
                                            Contact Number
                                        </label>
                                        <input
                                            id="contact"
                                            name="contact"
                                            type="tel"
                                            placeholder="Your contact Number here"
                                            className={inputClassName}
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-5 md:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="position"
                                            className="font-funnel mb-2 block text-[14px] font-medium text-[#494949] md:text-[16px]"
                                        >
                                            Desired Position
                                        </label>

                                        <div className="relative">
                                            <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#8c9198]">
                                                <svg
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M13.333 5H6.667A1.667 1.667 0 005 6.667v6.666A1.667 1.667 0 006.667 15h6.666A1.667 1.667 0 0015 13.333V6.667A1.667 1.667 0 0013.333 5z"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M7.5 10h5M10 7.5V12.5"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>

                                            <select
                                                id="position"
                                                name="position"
                                                defaultValue=""
                                                className="font-funnel h-11 w-full appearance-none rounded-xl border border-transparent bg-[#ffffff] pr-10 pl-11 text-[16px] text-[#3f454d] outline-none focus:border-[#9bcdd8]"
                                            >
                                                <option value="" disabled>
                                                    Select a role
                                                </option>
                                                {jobs.map((job) => {
                                                    return (
                                                        <option
                                                            key={job.id}
                                                            value={job.id}
                                                        >
                                                            {job.title}
                                                        </option>
                                                    );
                                                })}
                                            </select>

                                            <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[#69717a]">
                                                <svg
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M5 7.5L10 12.5L15 7.5"
                                                        stroke="currentColor"
                                                        strokeWidth="1.8"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="cv"
                                            className="font-funnel mb-2 block text-[14px] font-medium text-[#494949] md:text-[16px]"
                                        >
                                            Upload CV
                                        </label>

                                        <input
                                            id="cv"
                                            name="cv"
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            className="font-funnel file:font-funnel h-11 w-full cursor-pointer rounded-xl border border-transparent bg-[#ffffff] pt-1 pr-2 pl-2 text-[15px] text-[#9da2a8] outline-none file:mr-3 file:cursor-pointer file:rounded-md file:border file:border-[#9fa4a9] file:bg-[#f0f0f0] file:px-2.5 file:py-1.5 file:text-[15px] file:text-[#4f5358] focus:border-[#9bcdd8]"
                                        />

                                        <p className="font-funnel mt-2 text-[14px] text-[#9ea3a9] md:text-[15px]">
                                            PDF or DOC, max 5MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="mt-4 flex justify-end">
                            <button
                                type="button"
                                className="group bg-btn-primary font-funnel relative inline-flex items-center rounded-full px-4 py-2 md:py-3 pr-13 md:pr-15 text-[14px] md:text-[17px] font-medium text-white transition-opacity hover:opacity-90"
                            >
                                Submit
                                <span className="text-btn-primary absolute right-1 flex h-7 md:h-10 w-7 md:w-10 items-center justify-center rounded-full bg-white transition-transform group-hover:translate-x-0.5">
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M5 10H15"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10 5L15 10L10 15"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ApplyForm;
