import React from "react";
import Link from "next/link";
import Container from "@/app/components/Container";
import jobsData from "@/app/data/jobs.json";
import CommonButton from "@/app/components/CommonButton";

type JobDetails = (typeof jobsData)[number];

interface ApplyFormProps {
    job: JobDetails;
}

const jobs = jobsData;
const workModes = ["Remote", "On-Site", "Hybrid"];
const availabilityOptions = [
    "Immediately",
    "Within 2 weeks",
    "Within 1 month",
    "More than 1 month",
];
const experienceOptions = Array.from(
    new Set(jobs.map((item) => item.experience))
);

const labelClassName =
    "font-funnel mb-2 block text-[15px] font-medium text-[#494949]";
const inputClassName =
    "font-funnel h-11 w-full rounded-lg border border-transparent bg-[#ffffff] px-4 text-[14px] text-[#3f454d] placeholder:text-[#a3a3a3] outline-none transition-colors focus:border-[#8dc8d8]";
const selectClassName =
    "font-funnel h-11 w-full appearance-none rounded-lg border border-transparent bg-[#f1f5f7] px-4 pr-9 text-[14px] text-[#3f454d] outline-none transition-colors focus:border-[#8dc8d8]";

const ApplyForm = ({ job }: ApplyFormProps) => {
    return (
        <main className="w-full overflow-hidden">
            <section
                className="relative w-full overflow-hidden pt-24 pb-6"
                style={{
                    backgroundImage: `url('/images/Careers/apply-form-bg-img.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "scroll",
                }}
            >
                <Container>
                    <div className="grid items-center gap-10">
                        <div className="max-w-4xl md:mt-20">
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

            <section className="relative pb-20 md:mt-25 md:pb-24">
                <div
                    className="pointer-events-none absolute inset-0"
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

                <div className="mx-auto max-w-5xl px-4 md:-mt-24">
                    <form className="relative rounded-2xl border border-[#9ecddd] bg-[#f7f9fa] p-5 shadow-[0_14px_42px_rgba(26,63,81,0.08)] md:p-8">
                        <div className="pb-5">
                            <p className="font-funnel text-btn-primary text-[14px] font-semibold uppercase">
                                Application Form
                            </p>
                            <h2 className="font-clash mt-1 text-[20px] leading-tight font-medium text-[#111921]">
                                Personal Information
                            </h2>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className={labelClassName}
                                >
                                    First Name{" "}
                                    <span className="text-btn-primary">*</span>
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    placeholder="e.g. Sarah"
                                    className={inputClassName}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="lastName"
                                    className={labelClassName}
                                >
                                    Last Name{" "}
                                    <span className="text-btn-primary">*</span>
                                </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    placeholder="e.g. Ahmed"
                                    className={inputClassName}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="emailAddress"
                                    className={labelClassName}
                                >
                                    Email Address{" "}
                                    <span className="text-btn-primary">*</span>
                                </label>
                                <input
                                    id="emailAddress"
                                    name="emailAddress"
                                    type="email"
                                    placeholder="you@example.com"
                                    className={inputClassName}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="phoneNumber"
                                    className={labelClassName}
                                >
                                    Phone Number{" "}
                                    <span className="text-btn-primary">*</span>
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        value="+880"
                                        readOnly
                                        className="font-funnel h-11 w-20 rounded-lg border border-transparent bg-[#f1f5f7] px-3 text-[14px] text-[#6a7580]"
                                    />
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="tel"
                                        placeholder="1XXX-XXXXXX"
                                        className={`${inputClassName} flex-1`}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="city"
                                    className={labelClassName}
                                >
                                    City
                                </label>
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    placeholder="Dhaka"
                                    className={inputClassName}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="country"
                                    className={labelClassName}
                                >
                                    Country
                                    <span className="text-btn-primary">*</span>
                                </label>
                                <input
                                    id="country"
                                    name="country"
                                    type="text"
                                    placeholder="Bangladesh"
                                    className={inputClassName}
                                />
                            </div>
                        </div>

                        <div className="mt-7 border-t border-[#d7e8ef] pt-6">
                            <h3 className="font-clash mb-4 flex items-center gap-2 text-[28px] leading-tight font-medium text-[#15202a]">
                                <span className="text-[#0c7e9a]">
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M6.667 3.333h6.666A1.667 1.667 0 0115 5v10a1.667 1.667 0 01-1.667 1.667H6.667A1.667 1.667 0 015 15V5a1.667 1.667 0 011.667-1.667z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            d="M7.5 7.5h5M7.5 10h5M7.5 12.5h3.333"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                                Position & Availability
                            </h3>

                            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                                <div>
                                    <label
                                        htmlFor="positionApplying"
                                        className={labelClassName}
                                    >
                                        Position Applying For
                                        <span className="text-btn-primary">
                                            *
                                        </span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="positionApplying"
                                            name="positionApplying"
                                            defaultValue={job.id}
                                            className={selectClassName}
                                        >
                                            {jobs.map((item) => {
                                                return (
                                                    <option
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.title}
                                                    </option>
                                                );
                                            })}
                                        </select>

                                        <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[#72808a]">
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
                                        htmlFor="employmentType"
                                        className={labelClassName}
                                    >
                                        Employment Type
                                        <span className="text-btn-primary">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        id="employmentType"
                                        name="employmentType"
                                        value={job.type}
                                        readOnly
                                        className={inputClassName}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="availabilityStart"
                                        className={labelClassName}
                                    >
                                        Availability to Start
                                        <span className="text-btn-primary">
                                            *
                                        </span>
                                    </label>

                                    <div className="relative">
                                        <select
                                            id="availabilityStart"
                                            name="availabilityStart"
                                            defaultValue=""
                                            className={selectClassName}
                                        >
                                            <option value="" disabled>
                                                Select
                                            </option>
                                            {availabilityOptions.map(
                                                (option) => {
                                                    return (
                                                        <option
                                                            key={option}
                                                            value={option}
                                                        >
                                                            {option}
                                                        </option>
                                                    );
                                                }
                                            )}
                                        </select>

                                        <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[#72808a]">
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
                                    <p className={labelClassName}>
                                        Preferred Work Mode
                                        <span className="text-btn-primary">
                                            *
                                        </span>
                                    </p>
                                    <div className="flex flex-wrap gap-2.5">
                                        {workModes.map((mode) => {
                                            const isDefault = mode === "Remote";

                                            return (
                                                <label
                                                    key={mode}
                                                    className={`font-funnel inline-flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-[13px] transition-colors ${
                                                        isDefault
                                                            ? "border-btn-primary bg-[#ffffff] text-[#0c7e9a]"
                                                            : "border-[#efefef] bg-[#efefef] text-[#a3a3a3]"
                                                    }`}
                                                >
                                                    <span>{mode}</span>
                                                    <span
                                                        className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#aab7c2] bg-[#f1f5f7] p-[2px]`}
                                                    >
                                                        <span
                                                            className={`h-full w-full rounded-full transition-colors ${
                                                                isDefault
                                                                    ? "bg-[#0c7e9a]"
                                                                    : "bg-transparent"
                                                            }`}
                                                        />
                                                    </span>
                                                    <input
                                                        type="radio"
                                                        name="workMode"
                                                        value={mode}
                                                        defaultChecked={
                                                            isDefault
                                                        }
                                                        className="sr-only"
                                                    />
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="yearsOfExperience"
                                        className={labelClassName}
                                    >
                                        Years of Experience
                                        <span className="text-btn-primary">
                                            *
                                        </span>
                                    </label>

                                    <div className="relative">
                                        <select
                                            id="yearsOfExperience"
                                            name="yearsOfExperience"
                                            defaultValue={job.experience}
                                            className={selectClassName}
                                        >
                                            {experienceOptions.map((option) => {
                                                return (
                                                    <option
                                                        key={option}
                                                        value={option}
                                                    >
                                                        {option}
                                                    </option>
                                                );
                                            })}
                                        </select>

                                        <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[#72808a]">
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
                                        htmlFor="expectedSalary"
                                        className={labelClassName}
                                    >
                                        Expected Salary (BDT/month)
                                        <span className="text-btn-primary">
                                            *
                                        </span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            id="expectedSalary"
                                            name="expectedSalary"
                                            type="text"
                                            placeholder="35,000"
                                            className={`${inputClassName} flex-1`}
                                        />
                                        <span className="font-funnel inline-flex h-11 w-20 items-center justify-center rounded-lg bg-[#f1f5f7] text-[13px] text-[#7c8a95]">
                                            BDT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <h3 className="font-clash mb-4 flex items-center gap-2 text-[20px] leading-tight font-medium text-[#15202a]">
                                <span className="text-[#0c7e9a]">
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M7.5 2.5h5l3.333 3.333V15A2.5 2.5 0 0113.333 17.5H6.667A2.5 2.5 0 014.167 15V5A2.5 2.5 0 016.667 2.5h.833z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            d="M10 8.333v5M7.917 11.25L10 13.333L12.083 11.25"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                Upload Documents
                            </h3>

                            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                                <div>
                                    <p className={labelClassName}>
                                        Curriculum Vitae
                                        <span className="text-btn-primary">
                                            *
                                        </span>
                                    </p>
                                    <label className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-[#97c2d0] bg-[#f1f8fb] text-center">
                                        <span className="mb-2 text-[#0c7e9a]">
                                            <svg
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M10 13.333V6.667M7.5 9.167L10 6.667L12.5 9.167"
                                                    stroke="currentColor"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M4.167 13.333V15A1.667 1.667 0 005.833 16.667h8.334A1.667 1.667 0 0015.833 15v-1.667"
                                                    stroke="currentColor"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <span className="font-funnel text-[14px] font-medium text-[#4d5964]">
                                            Drop your PDF here or click to
                                            browse
                                        </span>
                                        <span className="font-funnel mt-1 text-[12px] text-[#9aa7b1]">
                                            Max file size: 6MB
                                        </span>
                                        <input
                                            type="file"
                                            className="sr-only"
                                            accept=".pdf,.doc,.docx"
                                        />
                                    </label>
                                </div>

                                <div>
                                    <p className={labelClassName}>
                                        Supporting Document
                                    </p>
                                    <label className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-[#97c2d0] bg-[#f1f8fb] text-center">
                                        <span className="mb-2 text-[#0c7e9a]">
                                            <svg
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M10 13.333V6.667M7.5 9.167L10 6.667L12.5 9.167"
                                                    stroke="currentColor"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M4.167 13.333V15A1.667 1.667 0 005.833 16.667h8.334A1.667 1.667 0 0015.833 15v-1.667"
                                                    stroke="currentColor"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <span className="font-funnel text-[14px] font-medium text-[#4d5964]">
                                            Portfolio or Cover Letter
                                        </span>
                                        <span className="font-funnel mt-1 text-[12px] text-[#9aa7b1]">
                                            Optional: PDF,DOC,ZIP
                                        </span>
                                        <input
                                            type="file"
                                            className="sr-only"
                                            accept=".pdf,.doc,.docx,.zip"
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className={labelClassName}>
                                    How did you hear about this role?
                                </p>
                                <div className="flex flex-wrap gap-2.5">
                                    {[
                                        "LinkedIn",
                                        "Website",
                                        "Job-Board",
                                        "Other",
                                    ].map((source, index) => {
                                        return (
                                            <label
                                                key={source}
                                                className="font-funnel inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[#d7e3e8] bg-[#ffffff] px-3 py-2 text-[16px] text-[#777777]"
                                            >
                                                <span>{source}</span>
                                                <span
                                                    className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#aab7c2] bg-[#f1f5f7] p-[2px]`}
                                                >
                                                    <span
                                                        className={`h-full w-full rounded-full transition-colors ${
                                                            index === 0
                                                                ? "bg-[#0c7e9a]"
                                                                : "bg-transparent"
                                                        }`}
                                                    />
                                                </span>
                                                <input
                                                    type="radio"
                                                    name="referralSource"
                                                    value={source}
                                                    defaultChecked={index === 0}
                                                    className="sr-only"
                                                />
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <p className="font-funnel max-w-md text-[12px] text-[#5ea8bb]">
                            By submitting, you agree to our Privacy Policy. Your
                            data is used only for recruitment purposes and
                            stored securely.
                        </p>

                        <div className="flex flex-row justify-end gap-2.5">
                            <Link
                                href={`/careers/${job.id}`}
                                className="font-funnel inline-flex items-center rounded-full border border-[#0c7e9a] px-5 py-2 text-[14px] font-medium text-[#252525]"
                            >
                                <span className="mr-2">
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M15 10H5"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10 5L5 10L10 15"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                Back to Job Description
                            </Link>

                            <CommonButton
                                href="#"
                                text="Submit Application"
                                icon="/icons/Button_arrow/arrow-right.png"
                                className="!bg-[#0c7e9a] py-1.5 shadow-none"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ApplyForm;
