"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Container from "@/app/components/Container";
import CommonButton from "@/app/components/CommonButton";
import InfoBadge from "@/app/components/InfoBadge";

type FAQItem = {
    question: string;
    answer: string;
};

type Category = {
    id: string;
    label: string;
    faqs: FAQItem[];
};

const categories: Category[] = [
    {
        id: "company",
        label: "Company Overview & Reach",
        faqs: [
            {
                question:
                    "Where is TTG based and do you serve international clients?",
                answer: "TTG has offices in Dhaka, Bangladesh and Boras, Sweden. We primarily serve clients in the US, UK, and Europe, operating across time zones with 24/7 support coverage.",
            },
            {
                question: "How long has TTG been in business?",
                answer: "TTG has been delivering outsourcing solutions for over 10 years, with a growing team of 200+ professionals across multiple continents.",
            },
            {
                question:
                    "What makes TTG different from other outsourcing companies?",
                answer: "Our dual-office model in Asia and Europe gives us a unique ability to deliver round-the-clock support while maintaining close cultural alignment with Western clients.",
            },
        ],
    },
    {
        id: "engagement",
        label: "Engagement & Requirements",
        faqs: [
            {
                question: "What is your minimum engagement size?",
                answer: "We work with teams as small as one dedicated resource. There is no strict minimum, we tailor every engagement to match the client's actual needs.",
            },
            {
                question: "Do you sign NDAs before discussions?",
                answer: "Yes. We are happy to sign a mutual NDA before any project discussions begin to ensure full confidentiality from day one.",
            },
            {
                question: "Can I start with a trial period?",
                answer: "Absolutely. We offer a two-week paid trial so you can evaluate our team's capabilities before committing to a longer engagement.",
            },
        ],
    },
    {
        id: "onboarding",
        label: "Onboarding & Timeline",
        faqs: [
            {
                question: "How quickly can TTG onboard a new project?",
                answer: "Most projects can be kicked off within 3-5 business days once requirements are confirmed and contracts are signed.",
            },
            {
                question: "What does the onboarding process look like?",
                answer: "We follow a structured four-step onboarding: discovery call, requirements sign-off, team assignment, and a kickoff sprint with daily check-ins for the first week.",
            },
            {
                question: "Will I have a dedicated point of contact?",
                answer: "Yes. Every client is assigned a dedicated Account Manager and Project Lead who remain your primary contacts throughout the engagement.",
            },
        ],
    },
    {
        id: "pricing",
        label: "Pricing & Packages",
        faqs: [
            {
                question: "Do you offer custom pricing or fixed packages?",
                answer: "We offer both. Fixed packages are available for well-defined scopes, while custom pricing is available for complex or evolving projects.",
            },
            {
                question: "How are invoices handled?",
                answer: "Invoices are issued monthly or bi-weekly depending on the engagement type. We accept bank transfer, Wise, and major online payment methods.",
            },
            {
                question: "Are there any hidden costs?",
                answer: "No. All pricing is fully transparent. Any additional costs, such as software licenses or third-party tools, are discussed and agreed upon upfront.",
            },
        ],
    },
    {
        id: "industry",
        label: "Industry Focus & Expertise",
        faqs: [
            {
                question: "What industries do you specialize in?",
                answer: "We have deep expertise in e-commerce, SaaS, fintech, healthcare IT, and digital marketing, though our team has delivered solutions across many other sectors as well.",
            },
            {
                question: "Do you have case studies I can review?",
                answer: "Yes. We have detailed case studies available upon request covering projects in each of our core industry verticals.",
            },
            {
                question:
                    "Can you handle regulated industries like healthcare or finance?",
                answer: "Yes. We are experienced with HIPAA, GDPR, and PCI-DSS compliance requirements and can adapt our processes to meet your regulatory obligations.",
            },
        ],
    },
];

const Faq = () => {
    const [activeCategory, setActiveCategory] = useState<string>(
        categories[0].id
    );
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    const currentCategory = useMemo(
        () =>
            categories.find((item) => item.id === activeCategory) ??
            categories[0],
        [activeCategory]
    );

    const handleCategoryChange = (id: string) => {
        setActiveCategory(id);
        setOpenFAQ(0);
    };

    return (
        <section className="bg-[#f5f7f8]">
            <Container className="py-14 md:py-20">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,1.45fr)] md:gap-12">
                    <div>
                        <div className="flex items-center justify-center md:justify-start">
                            <InfoBadge
                            icon="/icons/Badges/faq.png"
                            text="FAQ"
                            className="mb-7"
                        />
                        </div>
                        

                        <h2 className="font-clash text-center md:text-left text-[28px] md:text-[32px] font-medium text-[#222a33] md:text-[40px]">
                            Got questions?
                        </h2>
                        <h3 className="font-clash text-center md:text-left text-btn-primary text-[32px] font-medium md:text-[40px]">
                            We&apos;ve got answers.
                        </h3>

                        <p className="font-funnel text-center md:text-left mt-5 max-w-100 text-[14px] leading-[1.45] text-[#5e666f] md:text-[16px]">
                            We know outsourcing feels like a big decision.
                            Here&apos;s everything you&apos;re probably
                            wondering.
                        </p>

                        <nav
                            className="mt-10 flex flex-row gap-3.5  overflow-x-auto pb-2 md:flex-col md:overflow-visible"
                            aria-label="FAQ categories"
                        >
                            {categories.map((category) => {
                                const isActive = activeCategory === category.id;

                                return (
                                    <button
                                        key={category.id}
                                        type="button"
                                        onClick={() =>
                                            handleCategoryChange(category.id)
                                        }
                                        className={`font-funnel shrink-0 rounded-full px-4 md:px-0 md:py-0 py-3 bg-[#fafbfc] md:bg-[#f5f7f8] md:w-fit text-left text-[14px]  md:text-[24px] leading-tight transition-colors duration-200 ${
                                            isActive
                                                ? "font-semibold text-[#0c7e9a]"
                                                : "font-medium text-[#3f444a] hover:text-[#0c7e9a]"
                                        }`}
                                    >
                                        {category.label}
                                    </button>
                                );
                            })}
                        </nav>
                            <div className="hidden md:block">
                                <CommonButton
                            href="/about"
                            text="Still have questions? Let's talk"
                            icon="/icons/Button_arrow/double-right-arrow.png"
                            className="mt-14 w-fit"
                        />      
                            </div>
                        
                    </div>

                    <div className="hidden bg-[#cfd5da] md:block" />

                    <div key={activeCategory} className="space-y-4 pt-1">
                        {currentCategory.faqs.map((faq, index) => {
                            const isOpen = openFAQ === index;
                            const delay =
                                (currentCategory.faqs.length - index - 1) * 80;

                            return (
                                <article
                                    key={faq.question}
                                    className="rounded-2xl"
                                    style={{
                                        animation:
                                            "faqLiftIn 520ms ease-out both",
                                        animationDelay: `${delay}ms`,
                                    }}
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenFAQ(isOpen ? null : index)
                                        }
                                        className="flex w-full items-center gap-4 rounded-xl bg-[#fafbfc] px-3 py-3 text-left"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#e0ecef] bg-white">
                                            <Image
                                                src="/images/Home/world.png"
                                                alt=""
                                                width={18}
                                                height={18}
                                                className="h-4.5 w-4.5 object-contain"
                                                aria-hidden="true"
                                            />
                                        </span>

                                        <span className="font-funnel flex-1 text-[18px] leading-[1.35] font-medium text-[#1f252b] md:text-[20px]">
                                            {faq.question}
                                        </span>

                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#0c7e9a] text-[#0c7e9a]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                className="h-3.5 w-3.5"
                                                aria-hidden="true"
                                            >
                                                {isOpen ? (
                                                    <>
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M12 17V7"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M7 12l5-5 5 5"
                                                        />
                                                    </>
                                                ) : (
                                                    <>
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M12 7v10"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M7 12l5 5 5-5"
                                                        />
                                                    </>
                                                )}
                                            </svg>
                                        </span>
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300 ease-out ${
                                            isOpen
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="font-funnel mt-2 mr-0 ml-15 rounded-bl-xl rounded-tl-xl rounded-tr-xl border border-[#b6dde6] bg-[#ffffff] px-5 py-4 text-[15px] leading-[1.45] text-[#555555] md:ml-29 md:text-[20px]">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                     <div className="md:hidden block flex justify-center">
                                <CommonButton
                            href="/about"
                            text="Still have questions? Let's talk"
                            icon="/icons/Button_arrow/double-right-arrow.png"
                            className="mt-1 w-fit"
                        />      
                            </div>
                </div>
            </Container>
        </section>
    );
};

export default Faq;
