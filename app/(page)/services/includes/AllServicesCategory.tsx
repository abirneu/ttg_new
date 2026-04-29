"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type VerificationCard = {
    title: string;
    tags: string[];
    image: string;
};

const verificationCards: VerificationCard[] = [
    {
        title: "Customer Experience & Back Office Operations",
        tags: [
            "Live Chat Support",
            "Order Fulfillment",
            "Call Handling",
            "Escalation Control",
            "CRM Management",
            "Analytics Reports",
        ],
        image: "/images/Services/service-11.png",
    },
    {
        title: "Technology & Automation",
        tags: ["Software Development", "AI & Workflow Automation"],
        image: "/images/Services/service-12.png",
    },
    {
        title: "Talent & Workforce Solutions",
        tags: ["Development Programs", "Staffing Models", "Talent Matching"],
        image: "/images/Services/service-21.png",
    },
    {
        title: "Enterprise & Infrastructure Solutions",
        tags: [
            "Integrated Security",
            "Surveillance",
            "Cybersecurity",
            "Risk Management",
            "Infrastructure Setup",
            "Optimization",
        ],
        image: "/images/Services/service-22.png",
    },
    {
        title: "Software Development",
        tags: [
            "App Development",
            "API Integration",
            "Scalable Solutions",
            "System Architecture",
            "Ongoing Maintenance",
            "Support",
        ],
        image: "/images/Services/service-31.png",
    },
    {
        title: "Business Process Outsourcing (BPO)",
        tags: ["Customer Support", "Lead Generation", "Telemarketing"],
        image: "/images/Services/service-32.png",
    },
];

const CardPair = ({
    left,
    right,
    rowIndex,
}: {
    left: VerificationCard;
    right: VerificationCard;
    rowIndex: number;
}) => {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

    const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    const isOddRow = rowIndex % 2 === 0;
    const leftWidth = isOddRow ? "md:w-[65%]" : "md:w-[35%]";
    const rightWidth = isOddRow ? "md:w-[35%]" : "md:w-[75%]";

    return (
        <motion.div
            ref={ref}
            className="flex w-full flex-col items-center justify-center px-4 py-3 md:px-6 md:py-16"
        >
            <div className="relative flex h-auto w-full max-w-6xl flex-col gap-6 md:h-[450px] md:flex-row md:gap-4">
                {/* Left Card */}
                <motion.div
                    style={{
                        x: isMobile ? 0 : leftX,
                        backgroundImage: `url(${left.image})`,
                    }}
                    className={`relative w-full ${leftWidth} flex h-[450px] flex-col overflow-hidden rounded-2xl border-2 border-white bg-cover bg-center p-6 md:h-full`}
                    role="img"
                    aria-label={left.title}
                >
                    <div className="relative z-10 mt-auto">
                        <div className="mb-4 flex flex-wrap gap-2">
                            {left.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="rounded-full border border-[#e1edf0] bg-white px-3 py-1 text-[10px] text-zinc-600 md:text-[12px]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-xl font-bold text-zinc-800 md:text-[24px]">
                            {left.title}
                        </h3>
                    </div>
                </motion.div>
                <motion.div
                    style={{
                        x: isMobile ? 0 : rightX,
                        backgroundImage: `url(${right.image})`,
                    }}
                    className={`relative w-full ${rightWidth} flex h-[450px] flex-col overflow-hidden rounded-2xl border-2 border-white bg-cover bg-center p-3 md:h-full md:p-5`}
                    role="img"
                    aria-label={right.title}
                >
                    <div className="relative z-10 mt-auto">
                        <div className="mb-4 flex flex-wrap gap-2">
                            {right.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="rounded-full border border-[#e1edf0] bg-white px-3 py-1 text-[10px] text-zinc-600 md:text-[12px]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-xl font-bold text-zinc-800 md:text-[24px]">
                            {right.title}
                        </h3>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default function VerificationScroll() {
    const pairs = [
        [verificationCards[0], verificationCards[1]],
        [verificationCards[2], verificationCards[3]],
        [verificationCards[4], verificationCards[5]],
    ];

    return (
        <div className="relative bg-[#f5f7f8]" style={{ clipPath: "inset(0)" }}>
            <div className="relative z-20 md:pt-10">
                {pairs.map((pair, i) => (
                    <CardPair
                        key={i}
                        left={pair[0]}
                        right={pair[1]}
                        rowIndex={i}
                    />
                ))}
            </div>
        </div>
    );
}
