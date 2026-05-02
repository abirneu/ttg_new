"use client";

import { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import {
    submitContactForm,
    ContactData,
} from "@/app/redux/features/contactSlice";

const MCQ_DATA = [
    {
        id: "q1",
        question: "Which industry fits what you do?. ",
        description:
            "Select the category that best represents your core business operations..",
        type: "single_select",
        options: [
            "AI ",
            "Edtech",
            "Fintech",
            "Proptech",
            "Hospitality",
            "Saas",
            "Other",
        ],
    },

    {
        id: "q2",
        question: "What's your primary focus?",
        type: "text_area",
    },
    {
        id: "q3",
        question: "What services should we focus on? Select what fits.",
        type: "multi_select",
        options: [
            "Branding",
            "Illustration",
            "Pitch Deck",
            "UX Research",
            "Design System",
            "App Design",
            "Web Design",
            "Web Development",
            "App Development",
            "Other",
        ],
    },
    {
        id: "q4",
        question:
            "What budget feels right for what you're trying to do? No wrong answers here.",
        type: "number_input",
    },
    {
        id: "q5",
        question: "Let's get in touch",
        description:
            "Mind sharing your details? We'd love to know who we're talking to.",
        type: "contact_input",
    },
] as const;

export function MCQSystem() {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error } = useSelector(
        (state: RootState) => state.contact
    );
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string | string[]>>(
        {}
    );
    const [submitted, setSubmitted] = useState(false);
    const [validationError, setValidationError] = useState<string | null>(null);

    const currentQuestion = MCQ_DATA[currentStep];
    const isLastQuestion = currentStep === MCQ_DATA.length - 1;

    const validateEmail = (email: string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const isAnswered =
        currentQuestion.type === "contact_input"
            ? !!(answers["fullName"] && answers["email"])
            : answers[currentQuestion.id] !== undefined &&
              answers[currentQuestion.id] !== "" &&
              answers[currentQuestion.id]?.length > 0;

    const handleSelectOption = (option: string) => {
        setAnswers({
            ...answers,
            [currentQuestion.id]: option,
        });
        setValidationError(null);
    };

    const handleMultiSelect = (option: string) => {
        const currentAnswers = (answers[currentQuestion.id] as string[]) || [];
        const isSelected = currentAnswers.includes(option);

        let newAnswers;
        if (isSelected) {
            newAnswers = currentAnswers.filter((a: string) => a !== option);
        } else {
            newAnswers = [...currentAnswers, option];
        }

        setAnswers({
            ...answers,
            [currentQuestion.id]: newAnswers,
        });
        setValidationError(null);
    };

    const handleTextInput = (value: string) => {
        setAnswers({
            ...answers,
            [currentQuestion.id]: value,
        });
        setValidationError(null);
    };

    const handleNext = (isSkip = false) => {
        if (!isSkip && currentQuestion.type === "contact_input") {
            const email = (answers["email"] as string) || "";
            if (!validateEmail(email)) {
                setValidationError("Please enter a valid email address.");
                return;
            }
        }

        if (!isLastQuestion) {
            setValidationError(null);
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setValidationError(null);
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSkip = () => {
        if (!isLastQuestion) {
            setValidationError(null);
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleSubmit = async () => {
        try {
            const contactData: ContactData = {
                industry: (answers["q1"] as string) || "",
                name: (answers["fullName"] as string) || "",
                email: (answers["email"] as string) || "",
                service: (answers["q55"] as string) || "",
                current_interested: (answers["q6"] as string) || "",
                interested: (answers["q7"] as string[]) || [],
                budget: (answers["q4"] as string) || "",
            };

            const resultAction = await dispatch(submitContactForm(contactData));
            if (submitContactForm.fulfilled.match(resultAction)) {
                setSubmitted(true);
            }
        } catch (err) {
            console.error("Form submission error:", err);
        }
    };

    if (submitted) {
        return (
            <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-24 pb-10 md:min-h-screen md:pt-20">
                {/* Background Image */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/images/Consultation/consultation.png"
                        alt="Consultation Background"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-100"
                        priority
                    />
                </div>
                <div className="mx-5 flex flex-col items-center rounded-[12px] border border-white bg-[#f3f7f9]/60 p-8 backdrop-blur-xl md:mx-0 md:w-[860px] md:p-16">
                    <div className="mb-5">
                        <Image
                            src="/images/Consultation/sent-message.png"
                            alt="Success"
                            width={180}
                            height={180}
                            className="h-14 w-auto"
                        />
                    </div>
                    <h2 className="font-clash mb-4 text-center text-3xl font-medium text-black md:text-[32px]">
                        Message Sent
                    </h2>
                    <p className="font-regular font-funnel mb-1 text-center text-sm text-[#515353] md:text-[20px]">
                        Thanks there! We&apos;ve received your details. <br />{" "}
                        Our team will analyze your requirements and reach out
                        within 24 hours.
                    </p>

                    <button
                        onClick={() => (window.location.href = "/")}
                        className="bg-btn-primary font-funnel mt-10 rounded-full px-10 py-4 text-[16px] font-medium text-white shadow-[0_10px_20px_rgba(171,180,185,0.5)] transition-all hover:bg-[#0a6a82]"
                    >
                        Back to Website
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden px-5 pt-24 md:min-h-screen md:px-0 md:pt-34">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/Consultation/consultation.png"
                    alt="Consultation Background"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-100"
                    priority
                />
            </div>

            {/* Step Counter */}
            <div className="pointer-events-auto relative z-[60] mb-4 flex w-full flex-row items-center justify-between px-4 md:px-78">
                <p className="text-orbit-orange text-sm font-medium md:text-base">
                    Step {currentStep + 1} of {MCQ_DATA.length}
                </p>
                {(currentQuestion.id === "q3" ||
                    currentQuestion.id === "q4") && (
                    <button
                        type="button"
                        onClick={handleSkip}
                        className="pointer-events-auto relative z-[60] cursor-pointer text-xl font-semibold text-btn-primary transition-opacity hover:opacity-80"
                    >
                        Skip
                    </button>
                )}
            </div>

            {/* Progress Bar - Full Screen Width */}
            <div className="w-full px-4 md:px-78">
                <div className="h-2 rounded-full bg-white md:h-3">
                    <div
                        className="h-full rounded-full transition-all duration-500 ease-out"
                        style={{
                            width: `${((currentStep + 1) / MCQ_DATA.length) * 100}%`,
                            backgroundColor: "#0c7e9a",
                        }}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 sm:p-8">
                <div className="mx-auto md:max-w-4xl">
                    {/* Question */}
                    <div className="mb-8">
                        {/* Single Select Options */}
                        {currentQuestion.type === "single_select" && (
                            <div className="bg-[#f1f6f8]-60 rounded-2xl border-2 border-white bg-clip-padding p-8 backdrop-blur-md backdrop-filter">
                                <h3 className="text-md pb-2 font-bold text-black md:text-2xl">
                                    {currentQuestion.question}
                                </h3>
                                {"description" in currentQuestion &&
                                    currentQuestion.description && (
                                        <p className="mb-6 text-sm text-black">
                                            {currentQuestion.description}
                                        </p>
                                    )}

                                <div className="grid grid-cols-2 gap-4">
                                    {(currentQuestion.options || []).map(
                                        (option, index) => {
                                            const isSelected =
                                                answers[currentQuestion.id] ===
                                                option;
                                            const totalOptions =
                                                currentQuestion.options
                                                    ?.length || 0;
                                            const isLastRowSingle =
                                                totalOptions % 2 === 1 &&
                                                index === totalOptions - 1;

                                            return (
                                                <button
                                                    key={option}
                                                    onClick={() =>
                                                        handleSelectOption(
                                                            option
                                                        )
                                                    }
                                                    className={`flex cursor-pointer items-center justify-between rounded-xl bg-clip-padding p-4 text-left backdrop-blur-sm backdrop-filter transition-all duration-300 ${isLastRowSingle ? "col-span-2" : ""} ${
                                                        isSelected
                                                            ? "border border-[#6cadbc] bg-[#e1eef2]"
                                                            : "bg-white hover:bg-white/90"
                                                    }`}
                                                >
                                                    <span
                                                        className={`text-sm font-medium transition-colors duration-300 ${isSelected ? "text-[#094553]" : "text-black/80"}`}
                                                    >
                                                        {option}
                                                    </span>
                                                    <div
                                                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                                                            isSelected
                                                                ? "border-[#094553]"
                                                                : "border-opacity-50 border-gray-300"
                                                        }`}
                                                    >
                                                        {isSelected && (
                                                            <div className="h-3 w-3 rounded-full bg-[#094553]" />
                                                        )}
                                                    </div>
                                                </button>
                                            );
                                        }
                                    )}
                                </div>

                                {currentQuestion.id === "q1" && (
                                    <div
                                        className={`mt-6 flex flex-col gap-2 transition-all duration-300 ${answers["q1"] === "Other" ? "placeholder-black/30 opacity-100" : "pointer-events-none placeholder-transparent opacity-40"}`}
                                    >
                                        <p className="text-sm font-medium text-black">
                                            Please specify your industry
                                        </p>
                                        <div className="relative w-full overflow-hidden rounded-xl p-[1px]">
                                            <div
                                                className={`absolute transition-opacity duration-300 ${answers["q1"] === "Other" ? "opacity-100" : "opacity-0"}`}
                                            />
                                            <input
                                                type="text"
                                                disabled={
                                                    answers["q1"] !== "Other"
                                                }
                                                value={String(
                                                    answers["q1_other"] || ""
                                                )}
                                                onChange={(e) =>
                                                    setAnswers({
                                                        ...answers,
                                                        q1_other:
                                                            e.target.value,
                                                    })
                                                }
                                                placeholder={
                                                    answers["q1"] === "Other"
                                                        ? "e.g. AI-powered CRM for startups or https://yourwebsite.com"
                                                        : ""
                                                }
                                                className="relative z-10 w-full rounded-xl bg-white p-4 text-base text-black shadow-sm focus:outline-none disabled:cursor-not-allowed"
                                            />
                                        </div>
                                        <p className="text-xs text-black/60">
                                            Tell us what your product or service
                                            does. Add your website if available.
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Multi Select Options */}
                        {currentQuestion.type === "multi_select" && (
                            <div className="bg-[#f1f6f8]-60 rounded-2xl border-2 border-white bg-clip-padding p-8 backdrop-blur-md backdrop-filter">
                                <h3 className="text-[20px] pb-6 font-bold text-black md:text-2xl">
                                    {currentQuestion.question}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {(currentQuestion.options || []).map(
                                        (option) => {
                                            const isSelected = (
                                                (answers[
                                                    currentQuestion.id
                                                ] as string[]) || []
                                            ).includes(option);
                                            return (
                                                <button
                                                    key={option}
                                                    onClick={() =>
                                                        handleMultiSelect(
                                                            option
                                                        )
                                                    }
                                                    className={`font-funnel cursor-pointer rounded-full border px-6 py-3 text-[14px] md:text-[18px] transition-all duration-300 ${
                                                        isSelected
                                                            ? "border-[#7ab5c2] bg-[#d9eaf0] text-black"
                                                            : "border-white/10 bg-white text-black/70 hover:bg-white/70"
                                                    }`}
                                                >
                                                    {option}
                                                </button>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Text Input */}
                        {currentQuestion.type === "text_input" && (
                            <div className="bg-[#f1f6f8]-60 rounded-2xl border-2 border-white bg-clip-padding p-8 backdrop-blur-md backdrop-filter">
                                <h3 className="text-[20px] pb-6 font-bold text-black md:text-[20px]">
                                    {currentQuestion.question}
                                </h3>
                                <div className="relative w-full overflow-hidden rounded-xl p-[1px]">
                                    <div className="absolute" />
                                    <input
                                        type="text"
                                        value={
                                            answers[currentQuestion.id] || ""
                                        }
                                        onChange={(e) =>
                                            handleTextInput(e.target.value)
                                        }
                                        placeholder="Type your answer here..."
                                        className={`relative z-10 w-full rounded-xl bg-white p-4 text-base text-black placeholder-black/50 focus:outline-none ${
                                            currentQuestion.id === "q4" &&
                                            validationError
                                                ? "ring-2 ring-red-500"
                                                : ""
                                        }`}
                                    />
                                </div>
                                {currentQuestion.id === "q4" &&
                                    validationError && (
                                        <p className="mt-2 text-sm text-red-500">
                                            {validationError}
                                        </p>
                                    )}
                            </div>
                        )}

                        {/* Number Input */}
                        {currentQuestion.type === "number_input" && (
                            <div className="bg-[#f1f6f8]-60 rounded-2xl border-2 border-white bg-clip-padding p-8 backdrop-blur-md backdrop-filter">
                                <h3 className="text-md pb-6 font-bold text-black md:text-[20px]">
                                    {currentQuestion.question}
                                </h3>
                                <div className="relative w-full overflow-hidden rounded-xl p-[1px]">
                                    <div className="absolute" />
                                    <input
                                        type="number"
                                        value={
                                            answers[currentQuestion.id] || ""
                                        }
                                        onChange={(e) =>
                                            handleTextInput(e.target.value)
                                        }
                                        placeholder="e.g, 10000"
                                        className="relative z-10 w-full rounded-xl bg-white p-4 text-base text-black placeholder-black/50 focus:outline-none"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Contact Input (Combined Name & Email) */}
                        {currentQuestion.type === "contact_input" && (
                            <div className="bg-[#f1f6f8]-60 rounded-2xl border-2 border-white bg-clip-padding p-8 backdrop-blur-md backdrop-filter">
                                <h3 className="text-md pb-2 font-bold text-black md:text-2xl">
                                    {currentQuestion.question}
                                </h3>
                                {currentQuestion.description && (
                                    <p className="mb-8 text-sm text-black/70">
                                        {currentQuestion.description}
                                    </p>
                                )}

                                <div className="flex flex-col gap-6">
                                    {/* Name Field */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-black">
                                            Full Name
                                        </label>
                                        <div className="relative w-full overflow-hidden rounded-xl p-[1px]">
                                            <input
                                                type="text"
                                                value={
                                                    answers["fullName"] || ""
                                                }
                                                onChange={(e) =>
                                                    setAnswers({
                                                        ...answers,
                                                        fullName:
                                                            e.target.value,
                                                    })
                                                }
                                                placeholder="Enter your full name"
                                                className="relative z-10 w-full rounded-xl bg-white p-4 text-base text-black placeholder-black/30 shadow-sm focus:outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Email Field */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-black">
                                            Email
                                        </label>
                                        <div className="relative w-full overflow-hidden rounded-xl p-[1px]">
                                            <input
                                                type="email"
                                                value={answers["email"] || ""}
                                                onChange={(e) =>
                                                    setAnswers({
                                                        ...answers,
                                                        email: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter your email address"
                                                className={`relative z-10 w-full rounded-xl bg-white p-4 text-base text-black placeholder-black/30 shadow-sm focus:outline-none ${validationError ? "ring-2 ring-red-500" : ""}`}
                                            />
                                        </div>
                                        {validationError && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {validationError}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Text Area */}
                        {currentQuestion.type === "text_area" && (
                            <div className="bg-[#f1f6f8]-60 rounded-2xl border-2 border-white bg-clip-padding p-8 backdrop-blur-md backdrop-filter">
                                <h3 className="text-md pb-2 font-bold text-black md:text-2xl">
                                    {currentQuestion.question}
                                </h3>
                                {"description" in currentQuestion &&
                                    currentQuestion.description && (
                                        <p className="mb-6 text-sm text-black">
                                            {currentQuestion.description}
                                        </p>
                                    )}
                                <div className="relative w-full overflow-hidden rounded-xl p-[1px]">
                                    <div className="absolute inset-[-500%] animate-[spin_6s_linear_infinite]" />
                                    <textarea
                                        value={
                                            answers[currentQuestion.id] || ""
                                        }
                                        onChange={(e) =>
                                            handleTextInput(e.target.value)
                                        }
                                        placeholder="Describe your goals...... "
                                        rows={3}
                                        className="relative z-10 block h-[200px] w-full resize-none rounded-xl bg-white p-4 text-base text-black placeholder-black/50 focus:outline-none"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation */}
                    <div className="mt-8 flex justify-between gap-3">
                        <div className="flex gap-3">
                            {currentStep > 0 && (
                                <button
                                    onClick={handlePrev}
                                    className="group flex cursor-pointer flex-row items-center justify-center gap-2 rounded-full bg-white p-1.5 px-2 py-2 text-sm font-semibold text-[#444444] shadow-xl shadow-[#abb4b9] transition-all hover:bg-gray-50 md:gap-4"
                                >
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform group-hover:-translate-x-1">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="15 18 9 12 15 6"></polyline>
                                        </svg>
                                    </span>
                                    <span className="flex items-center pr-4 leading-none">
                                        Back
                                    </span>
                                </button>
                            )}
                        </div>

                        <div className="flex gap-3">
                            {!isLastQuestion && (
                                <button
                                    onClick={() => handleNext()}
                                    disabled={!isAnswered}
                                    className="group flex cursor-pointer flex-row items-center justify-center gap-4 rounded-full bg-[#0c7e9a] p-1.5 px-2 py-2 text-sm font-semibold text-white shadow-xl shadow-[#abb4b9] transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <span className="flex items-center pl-4 leading-none font-medium">
                                        Next
                                    </span>
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#0c7e9a] transition-transform group-hover:rotate-45">
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line
                                                x1="7"
                                                y1="17"
                                                x2="17"
                                                y2="7"
                                            ></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </span>
                                </button>
                            )}

                            {isLastQuestion && (
                                <button
                                    onClick={handleSubmit}
                                    disabled={!isAnswered || loading}
                                    className="group flex cursor-pointer flex-row items-center justify-center gap-4 rounded-full bg-[#0c7e9a] p-1.5 px-2 py-2 text-sm font-semibold text-white shadow-xl shadow-[#abb4b9] transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <span className="flex items-center pl-4 leading-none font-medium">
                                        {loading ? "Submitting..." : "Submit"}
                                    </span>
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#0c7e9a] transition-transform group-hover:rotate-45">
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line
                                                x1="7"
                                                y1="17"
                                                x2="17"
                                                y2="7"
                                            ></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </span>
                                </button>
                            )}
                        </div>
                        {error && (
                            <p className="mt-2 text-center text-sm text-red-500">
                                {typeof error === "string"
                                    ? error
                                    : "Something went wrong"}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
