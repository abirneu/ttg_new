"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";
import CommonButton from "@/app/components/CommonButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ─── */
const services = [
    {
        id: 1,
        icon: "/images/Home/service-icon-1.png",
        title: "Customer Experience & Back Office ",
        number: "01",
        description:
            "Deliver seamless customer interactions while optimizing backend operations—so your business runs efficiently, responds faster, and scales without increasing overhead.",
        image: "/images/Home/core-service-1.png",
    },
    {
        id: 2,
        icon: "/images/Home/service-icon-2.png",
        title: "Technology & Automation",
        number: "02",
        description:
            "Leverage cutting-edge AI, RPA, and cloud solutions to automate workflows, reduce manual effort, and accelerate digital transformation across your organization.",
        image: "/images/Home/core-service-2.png",
    },
    {
        id: 3,
        icon: "/images/Home/service-icon-3.png",
        title: "Talent & Workforce Solutions",
        number: "03",
        description:
            "Build, manage, and scale your workforce with end-to-end talent solutions—from recruitment and onboarding to training and performance management.",
        image: "/images/Home/core-service-3.png",
    },
    {
        id: 4,
        icon: "/images/Home/service-icon-4.png",
        title: "Enterprise & Infrastructure Solutions",
        number: "04",
        description:
            "Strengthen your enterprise foundation with robust infrastructure, security, and compliance solutions designed for resilience and growth.",
        image: "/images/Home/core-service-4.png",
    },
];

const Service = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const leftItemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const rightCardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [activeMobileId, setActiveMobileId] = useState(services[0]?.id);

    useEffect(() => {
        let prevProgress = 0;
        let currentActiveIndex = 0; 

        const ctx = gsap.context(() => {
            const totalItems = services.length;
            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                ScrollTrigger.create({
                    trigger: triggerRef.current,
                    start: "top 80px",
                    end: `+=${totalItems * 100}%`,
                    pin: true,
                    pinSpacing: true,
                    scrub: 0.5,
                });

                ScrollTrigger.create({
                    trigger: triggerRef.current,
                    start: "top 80px",
                    end: `+=${totalItems * 100}%`,
                    scrub: 0.3,
                    onUpdate: (self) => {
                        const p = self.progress;
                        const scrollingDown = p > prevProgress;
                        prevProgress = p;

                        /* determine which item should be active */
                        let newActiveIndex = 0;
                        for (let j = 0; j < totalItems; j++) {
                            const itemStart = j / totalItems;
                            const itemEnd = (j + 1) / totalItems;
                            if (
                                p >= itemStart &&
                                (p < itemEnd || j === totalItems - 1)
                            ) {
                                newActiveIndex = j;
                            }
                        }

                        /* update left accordion for all items */
                        services.forEach((__, j) => {
                            const leftItem = leftItemsRef.current[j];
                            if (!leftItem) return;

                            const descEl = leftItem.querySelector(
                                ".service-desc"
                            ) as HTMLElement;
                            const numberEl = leftItem.querySelector(
                                ".service-number"
                            ) as HTMLElement;
                            const titleEl = leftItem.querySelector(
                                ".service-title"
                            ) as HTMLElement;
                            const iconEl = leftItem.querySelector(
                                ".service-icon-wrap"
                            ) as HTMLElement;

                            if (j === newActiveIndex) {
                                gsap.to(descEl, {
                                    height: "auto",
                                    opacity: 1,
                                    duration: 0.4,
                                    ease: "power2.out",
                                    overwrite: true,
                                });
                                gsap.to(titleEl, {
                                    fontWeight: 600,
                                    color: "#1a1a2e",
                                    duration: 0.3,
                                    overwrite: true,
                                });
                                gsap.to(numberEl, {
                                    color: "#525353",
                                    duration: 0.3,
                                    overwrite: true,
                                });
                                gsap.to(iconEl, {
                                    scale: 1,
                                    opacity: 1,
                                    duration: 0.3,
                                    overwrite: true,
                                });
                            } else {
                                gsap.to(descEl, {
                                    height: 0,
                                    opacity: 0,
                                    duration: 0.3,
                                    ease: "power2.in",
                                    overwrite: true,
                                });
                                gsap.to(titleEl, {
                                    fontWeight: 500,
                                    color: "#64748b",
                                    duration: 0.3,
                                    overwrite: true,
                                });
                                gsap.to(numberEl, {
                                    color: "#a3a5a5",
                                    duration: 0.3,
                                    overwrite: true,
                                });
                                gsap.to(iconEl, {
                                    scale: 0.85,
                                    opacity: 0.45,
                                    duration: 0.3,
                                    overwrite: true,
                                });
                            }
                        });

                        /* only animate right images when active index changes */
                        if (newActiveIndex !== currentActiveIndex) {
                            const oldCard =
                                rightCardsRef.current[currentActiveIndex];
                            const newCard =
                                rightCardsRef.current[newActiveIndex];

                            /* hide old image */
                            if (oldCard) {
                                gsap.to(oldCard, {
                                    opacity: 0,
                                    y: scrollingDown ? -50 : 50,
                                    duration: 0.4,
                                    ease: "power2.in",
                                    overwrite: true,
                                    onComplete: () => {
                                        oldCard.style.display = "none";
                                    },
                                });
                            }

                            /* show new image */
                            if (newCard) {
                                gsap.fromTo(
                                    newCard,
                                    {
                                        opacity: 0,
                                        y: scrollingDown ? 60 : -60,
                                    },
                                    {
                                        opacity: 1,
                                        y: 0,
                                        duration: 0.5,
                                        ease: "power2.out",
                                        overwrite: true,
                                        display: "block",
                                    }
                                );
                            }

                            currentActiveIndex = newActiveIndex;
                        }
                    },
                });
            });

            return () => mm.revert();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#f5f7f8]">
            <Container className="py-1 md:py-20">
                

                {/* Scroll-animated content */}
                <div ref={triggerRef} className="mt-14 md:mt-10">

                    <div className="flex flex-col md:py-10 gap-6 md:flex-row md:items-center md:justify-between md:gap-12">
                    <div>
                        <div className="mb-5 flex items-center justify-center md:justify-start">
                            <InfoBadge
                                icon="/icons/Badges/service.png"
                                text="Core Service"
                            />
                        </div>
                        <h2 className="font-clash max-w-[680px] text-center md:text-left text-[28px] leading-[1.15] font-medium text-[#1a1a2e] md:text-[36px]">
                            Everything you need to scale—four core capabilities
                            in one integrated partner.
                        </h2>
                    </div>
                    <div className="shrink-0 flex items-center justify-center">
                        <CommonButton
                            href="/services"
                            text="Explore All Our Services"
                            icon="/icons/Button_arrow/double-right-arrow.png"
                            className="w-fit"
                        />
                    </div>
                </div> 

                    <div className="hidden items-start gap-8 md:flex md:flex-row md:gap-16">
                        {/*  Left*/}
                        <div className="flex w-full flex-col md:w-[50%]">
                            {services.map((service, i) => (
                                <div
                                    key={service.id}
                                    ref={(el) => {
                                        leftItemsRef.current[i] = el;
                                    }}
                                    className="group relative"
                                >
                                    <div className="flex items-start gap-5 py-6">
                                        <div
                                            className="service-icon-wrap relative mt-1 flex h-[40px] w-[40px] shrink-0 items-center justify-center"
                                            style={{
                                                transform:
                                                    i === 0
                                                        ? "scale(1)"
                                                        : "scale(0.85)",
                                                opacity: i === 0 ? 1 : 0.45,
                                            }}
                                        >
                                            <Image
                                                src={service.icon}
                                                alt={service.title}
                                                width={32}
                                                height={32}
                                                className="object-contain"
                                                unoptimized
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center justify-between gap-4">
                                                <h3
                                                    className="service-title font-clash text-[18px] leading-[1.3] transition-colors md:text-[22px]"
                                                    style={{
                                                        fontWeight:
                                                            i === 0 ? 600 : 500,
                                                        color:
                                                            i === 0
                                                                ? "#1a1a2e"
                                                                : "#64748b",
                                                    }}
                                                >
                                                    {service.title}
                                                </h3>
                                                <span
                                                    className="service-number font-clash shrink-0 text-[20px] font-semibold tabular-nums md:text-[24px]"
                                                    style={{
                                                        color:
                                                            i === 0
                                                                ? "#525353"
                                                                : "#a3a5a5",
                                                    }}
                                                >
                                                    {service.number}
                                                </span>
                                            </div>

                                            {/* Expandable description */}
                                            <div
                                                className="service-desc overflow-hidden"
                                                style={{
                                                    height:
                                                        i === 0 ? "auto" : 0,
                                                    opacity: i === 0 ? 1 : 0,
                                                }}
                                            >
                                                <p className="font-funnel mt-3 max-w-[480px] text-[14px] leading-[1.7] text-[#64748b] md:text-[15px]">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {i < services.length - 1 && (
                                        <div className="h-[1px] bg-[#e2e8f0]" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/*  Right: Service images */}
                        <div className="relative w-full md:w-[50%]">
                            <div className="sticky top-[100px]">
                                <div
                                    className="relative"
                                    style={{ minHeight: 500 }}
                                >
                                    {services.map((service, i) => (
                                        <div
                                            key={service.id}
                                            ref={(el) => {
                                                rightCardsRef.current[i] = el;
                                            }}
                                            className="absolute top-0 left-0 w-full"
                                            style={{
                                                opacity: i === 0 ? 1 : 0,
                                                transform:
                                                    i === 0
                                                        ? "translateY(0)"
                                                        : "translateY(60px)",
                                                display:
                                                    i === 0 ? "block" : "none",
                                            }}
                                        >
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                width={600}
                                                height={400}
                                                className="h-auto w-full object-contain"
                                                unoptimized
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Mobile */}
                <div className="mt-10 flex flex-col gap-6 md:hidden">
                    {services.map((service) => {
                        const isActive = activeMobileId === service.id;

                        return (
                            <div
                                key={`mobile-${service.id}`}
                                className="border-b border-[#e2e8f0] pb-6"
                            >
                                <button
                                    type="button"
                                    onClick={() => setActiveMobileId(service.id)}
                                    className="flex w-full items-start gap-4 text-left"
                                >
                                    <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            width={22}
                                            height={22}
                                            className="object-contain"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-start justify-between gap-3">
                                            <h3 className="font-clash text-[20px] leading-[1.25] text-[#0B0B0B]">
                                                {service.title}
                                            </h3>
                                            <span className="font-clash shrink-0 text-[20px] font-medium text-[#0B0B0BB2]">
                                                {service.number}
                                            </span>
                                        </div>
                                        
                                    </div>
                                </button>

                                <div
                                    className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                                        isActive
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="font-funnel mt-4 text-[14px] leading-[1.7] text-[#64748b]">
                                            {service.description}
                                        </p>
                                        <div className="mt-5 overflow-hidden">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                width={700}
                                                height={500}
                                                className="h-auto w-full object-contain"
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default Service;
