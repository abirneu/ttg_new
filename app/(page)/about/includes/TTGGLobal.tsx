"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";
import CommonButton from "@/app/components/CommonButton";

const TTGGLobal = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [count30, setCount30] = useState(0);
    const [count92, setCount92] = useState(0);

    useEffect(() => {
        const target = sectionRef.current;

        if (!target) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;

                if (entry.isIntersecting) {
                    setShouldAnimate(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.3,
            }
        );

        observer.observe(target);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!shouldAnimate) {
            return;
        }

        let frameA = 0;
        let frameB = 0;

        const animateValue = (
            target: number,
            duration: number,
            setValue: React.Dispatch<React.SetStateAction<number>>,
            frameSetter: (id: number) => void
        ) => {
            const startedAt = performance.now();

            const tick = (now: number) => {
                const elapsed = now - startedAt;
                const progress = Math.min(elapsed / duration, 1);

                setValue(Math.round(progress * target));

                if (progress < 1) {
                    frameSetter(requestAnimationFrame(tick));
                }
            };

            frameSetter(requestAnimationFrame(tick));
        };

        animateValue(30, 1400, setCount30, (id) => {
            frameA = id;
        });

        animateValue(92, 1700, setCount92, (id) => {
            frameB = id;
        });

        return () => {
            cancelAnimationFrame(frameA);
            cancelAnimationFrame(frameB);
        };
    }, [shouldAnimate]);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#f5f7f8] py-16 md:py-14"
        >
            <Container>
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-4xl">
                        <div className="flex justify-center md:justify-start">
                            <InfoBadge
                                icon="/icons/Badges/cursor.png"
                                text="Why TTG Global"
                                className="mb-8"
                            />
                        </div>

                        <h2 className="font-clash flex justify-center text-[24px] leading-[1.05] font-medium text-[#0f141a] md:justify-start md:text-[40px]">
                            One Partner, All Capabilities
                        </h2>

                        <p className="font-funnel mt-4 max-w-3xl text-center md:text-left text-[14px] leading-[1.55] text-[#4f555c] md:text-[16px]">
                            Most companies work with 4-6 vendors for what TTG
                            delivers under one roof. We eliminate coordination
                            overhead and fragmented delivery through a unified
                            operational architecture.
                        </p>
                    </div>
                    <div className="flex items-center justify-center md:items-start">
                        <CommonButton
                        href="/contact"
                        text="Book a Consultaion"
                        icon="/icons/Button_arrow/double-right-arrow.png"
                        className="h-13 w-fit shrink-0"
                    />
                    </div>
                    
                </div>

                <div className="mt-10 overflow-hidden rounded-2xl border border-[#d2d6d8] md:mt-14">
                    <div className="grid grid-cols-1 md:grid-cols-4">
                        <article
                            className="flex min-h-70 md:min-h-86.25 flex-col border-b border-[#d8dbdd] p-6 md:min-h-107.5 md:border-r md:border-b-0 md:p-8"
                            style={{
                                backgroundColor: "#f7f8f9",
                                backgroundImage:
                                    "repeating-linear-gradient(-36deg, rgba(22, 27, 33, 0.022) 0px, rgba(22, 27, 33, 0.022) 2px, transparent 2px, transparent 9px)",
                            }}
                        >
                            <span className="font-clash text-[52px] leading-none font-medium text-[#090c12] md:text-[93px]">
                                #1
                            </span>

                            <div className="mt-auto">
                                <h3 className="font-clash text-btn-primary text-[16px] leading-none font-medium md:text-[30px]">
                                    Partner
                                </h3>
                                <p className="font-funnel mt-3 max-w-72 text-[14px] leading-[1.45] text-[#4e555d] md:text-[12px]">
                                    Complete end-to-end integration across every
                                    vertical
                                </p>
                            </div>
                        </article>

                        <article
                            className="flex min-h-70 md:min-h-86.25 flex-col border-b border-[#d8dbdd] p-6 md:min-h-107.5 md:border-r md:border-b-0 md:p-8"
                            style={{
                                backgroundColor: "#f7f8f9",
                                backgroundImage:
                                    "repeating-linear-gradient(-36deg, rgba(22, 27, 33, 0.022) 0px, rgba(22, 27, 33, 0.022) 2px, transparent 2px, transparent 9px)",
                            }}
                        >
                            <span className="font-clash text-[52px] leading-none font-medium text-[#090c12] md:text-[93px]">
                                AI+
                            </span>

                            <div className="mt-auto">
                                <h3 className="font-clash text-[16px] leading-none font-medium text-[#1083a4] md:text-[30px]">
                                    Architecture
                                </h3>
                                <p className="font-funnel mt-3 max-w-72 text-[14px] leading-[1.45] text-[#4e555d] md:text-[12px]">
                                    Algorithmic precision baked into every
                                    structural decision.
                                </p>
                            </div>
                        </article>

                        <article
                            className="flex min-h-70 md:min-h-86.25 flex-col border-b border-[#d8dbdd] p-6 md:min-h-107.5 md:border-r md:border-b-0 md:p-8"
                            style={{
                                backgroundColor: "#f7f8f9",
                                backgroundImage:
                                    "repeating-linear-gradient(-36deg, rgba(22, 27, 33, 0.022) 0px, rgba(22, 27, 33, 0.022) 2px, transparent 2px, transparent 9px)",
                            }}
                        >
                            <span className="font-clash text-[52px] leading-none font-medium text-[#090c12] md:text-[93px]">
                                {count30}+
                            </span>

                            <div className="mt-auto">
                                <h3 className="font-clash text-[16px] leading-none font-medium text-[#1083a4] md:text-[30px]">
                                    Faster Delivery
                                </h3>
                                <p className="font-funnel mt-3 max-w-72 text-[14px] leading-[1.45] text-[#4e555d] md:text-[12px]">
                                    Average acceleration on operational
                                    onboarding cycles
                                </p>
                            </div>
                        </article>

                        <article
                            className="flex min-h-70 md:min-h-86.25 flex-col p-6 md:min-h-107.5 md:p-8"
                            style={{
                                backgroundColor: "#f7f8f9",
                                backgroundImage:
                                    "repeating-linear-gradient(-36deg, rgba(22, 27, 33, 0.022) 0px, rgba(22, 27, 33, 0.022) 2px, transparent 2px, transparent 9px)",
                            }}
                        >
                            <span className="font-clash text-[52px] leading-none font-medium text-[#090c12] md:text-[93px]">
                                {count92}%
                            </span>

                            <div className="mt-auto">
                                <h3 className="font-clash text-[16px] leading-none font-medium text-[#1083a4] md:text-[30px]">
                                    Retention Rate
                                </h3>
                                <p className="font-funnel mt-3 max-w-72 text-[14px] leading-[1.45] text-[#4e555d] md:text-[12px]">
                                    Built on consistent high-performance
                                    results.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TTGGLobal;
