"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import ContactButton from "./ContactButton";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Careers", href: "/careers" },
    { name: "Insights", href: "/insights" },
];

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const navRef = useRef<HTMLElement | null>(null);
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
    const [activePill, setActivePill] = useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        opacity: 0,
    });

    const isActiveLink = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname === href || pathname.startsWith(`${href}/`);
    };

    const activeHref = navLinks.find((link) => isActiveLink(link.href))?.href;

    const updateActivePill = useCallback(() => {
        if (!activeHref || !navRef.current) {
            setActivePill((current) => ({ ...current, opacity: 0 }));
            return;
        }

        const activeLinkElement = linkRefs.current[activeHref];
        if (!activeLinkElement) {
            return;
        }

        setActivePill({
            x: activeLinkElement.offsetLeft,
            y: activeLinkElement.offsetTop,
            width: activeLinkElement.offsetWidth,
            height: activeLinkElement.offsetHeight,
            opacity: 1,
        });
    }, [activeHref]);

    useEffect(() => {
        updateActivePill();
        window.addEventListener("resize", updateActivePill);

        return () => {
            window.removeEventListener("resize", updateActivePill);
        };
    }, [updateActivePill]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 8);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full py-4 transition-colors duration-300 ${
                isScrolled
                    ? "bg-white "
                    : "bg-transparent"
            }`}
        >
            <Container className="relative flex items-center justify-between">
                {/* Logo Section */}
                <Link href="/" className="relative h-10 w-36 shrink-0">
                    <Image
                        src="/icons/ttg_logo.png"
                        alt="TOTALTECH GLOBAL"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Navigation Links  */}
                <nav
                    ref={navRef}
                    className={`relative hidden items-center gap-4 rounded-[40px] border border-white/20 bg-white/10 p-1 pr-5 pl-1.5 backdrop-blur-[6px] md:flex ${
                        isScrolled
                            ? "shadow-none"
                            : "shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                    }`}
                >
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute top-0 left-0 rounded-full bg-[#ecfbff] transition-[transform,width,height,opacity] duration-300 ease-out"
                        style={{
                            width: `${activePill.width}px`,
                            height: `${activePill.height}px`,
                            opacity: activePill.opacity,
                            transform: `translate(${activePill.x}px, ${activePill.y}px)`,
                        }}
                    />
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            ref={(element) => {
                                linkRefs.current[link.href] = element;
                            }}
                            aria-current={
                                isActiveLink(link.href) ? "page" : undefined
                            }
                            className={`relative z-10 inline-flex items-center justify-center rounded-full px-3.5 py-2.5 text-[15px] leading-none font-normal transition-colors ${
                                isActiveLink(link.href)
                                    ? "font-semibold text-[#1A202C]"
                                    : "text-[#1A202C] opacity-70 hover:opacity-100"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Action Section */}
                <div className="flex items-center gap-4">
                    <ContactButton
                        href="/contact"
                        text="Contact Us"
                        className="hidden sm:flex"
                        icon="/icons/Button_arrow/arrow-up-right.png"
                    />

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`flex h-11 w-11 items-center justify-center p-2 transition-all duration-300 md:hidden ${
                            isOpen
                                ? "text-btn-primary rounded-full bg-white shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
                                : "text-[#1A202C]"
                        }`}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile menu content */}
                {isOpen && (
                    <div
                        className="fixed inset-0 z-70 md:hidden"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile navigation menu"
                    >
                        <div className="absolute inset-0 bg-[#eef2f4]/92 backdrop-blur-xl" />

                        <div className="relative flex h-[86dvh] flex-col px-5 pt-5 pb-10">
                            <div className="flex items-start justify-between">
                                <Link
                                    href="/"
                                    className="relative h-10 w-40 shrink-0"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Image
                                        src="/icons/ttg_logo.png"
                                        alt="TOTALTECH GLOBAL"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </Link>

                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="text-btn-primary flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_12px_26px_rgba(0,0,0,0.12)]"
                                    aria-label="Close menu"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className="relative mt-10 flex flex-1 flex-col items-center">
                                <div className="pointer-events-none absolute top-[36%] h-8 w-[88%] rounded-full bg-[#9ab1bc]/45 blur-2xl" />
                                <div className="pointer-events-none absolute bottom-34 h-12 w-[92%] rounded-full bg-[#35a8c8]/35 blur-2xl" />

                                <nav className="relative z-10 flex flex-col items-center gap-8">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={`font-funnel text-[17px] leading-none tracking-[0.01em] transition-colors ${
                                                isActiveLink(link.href)
                                                    ? "font-semibold text-[#1f252d]"
                                                    : "font-medium text-[#2d3138]"
                                            }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </nav>

                                <ContactButton
                                    href="/contact"
                                    text="Contact Us"
                                    icon="/icons/Button_arrow/arrow-up-right.png"
                                    className="relative z-10 mt-10"
                                    onClick={() => setIsOpen(false)}
                                />
                            </div>

                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-30 overflow-hidden">
                                <Image
                                    src="/images/Home/world.png"
                                    alt=""
                                    fill
                                    className="object-cover object-center opacity-45"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
};

export default NavBar;
