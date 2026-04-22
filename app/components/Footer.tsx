import Link from "next/link";
import React from "react";
import CommonButton from "./CommonButton";
import Container from "./Container";
import InfoBadge from "./InfoBadge";

const servicesLinks = [
    { label: "BPO & CX", href: "/services" },
    { label: "Web Development", href: "/services" },
    { label: "Software Solutions", href: "/services" },
    { label: "IT Staffing", href: "/services" },
    { label: "Security", href: "/services" },
];

const companyLinks = [
    { label: "About TTG", href: "/about" },
    { label: "Why TTG", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Careers", href: "/careers" },
    { label: "Insights", href: "/insights" },
];

const contactLinks = [
    { label: "Dhaka, Bangladesh", href: "#" },
    { label: "Boras, Sweden", href: "#" },
    { label: "Book Consultation", href: "/consultation" },
    { label: "Start a Project", href: "/contact" },
];

const socialLinks: Array<{
    name: string;
    href: string;
    icon: React.ReactNode;
}> = [
    {
        name: "Facebook",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                <path d="M14.5 8H16V5h-2c-2.2 0-3.5 1.4-3.5 3.6V11H8v3h2.5v5H14v-5h2.4l.6-3H14v-2c0-.7.3-1 1-1Z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M8.5 10.5v6" />
                <path d="M8.5 8.1h.01" />
                <path d="M12 16.5v-3.2c0-1.2.8-2 1.8-2s1.7.8 1.7 2v3.2" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                <rect x="4" y="4" width="16" height="16" rx="5" />
                <circle cx="12" cy="12" r="3.3" />
                <circle cx="16.8" cy="7.4" r="0.7" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
];

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-[#f4f7f8] pb-12 pt-20">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(247,249,250,0.98)_48%,rgba(242,246,248,1)_100%)]" />
                <div
                    className="absolute inset-0 opacity-100 mix-blend-multiply"
                    style={{
                        backgroundImage: "url('/images/Footer/Footer-bg.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        backgroundRepeat: "no-repeat",
                        filter: "invert(1)",
                    }}
                />
            </div>

            <Container className="relative z-10">
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    <InfoBadge
                        icon="/icons/Badges/mage_light-bulb.png"
                        text="Smart Tech Solution"
                        className=""
                    />

                    <h2 className="mt-5 max-w-3xl font-clash text-[34px] font-medium leading-[1.18] text-[#0f1721] md:text-[40px]">
                        Empowering Businesses With
                        <span className="block">Smart Tech Solution.</span>
                    </h2>

                    <p className="mt-5 max-w-xl text-[16px] leading-8 text-[#a3a3a3] md:text-[16px] md:leading-7">
                        We unify technology, talent, and infrastructure to help your business
                        scale smoothly and efficiently without friction.
                    </p>

                    <CommonButton
                        href="/contact"
                        text="Contact Us"
                        icon="/icons/Button_arrow/arrow-up-right.png"
                        className="mt-8 "
                    />
                </div>

                <div className="mt-24 grid gap-10 pt-3 md:grid-cols-12">
                    <div className="lg:col-span-2">
                        <h3 className="text-[22px] font-medium text-[#1f2937] md:text-[15.6px]">Services</h3>
                        <ul className="mt-6 space-y-3">
                            {servicesLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-[13.6px] text-[#686868] transition-colors hover:text-[#0c7e9a]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-[22px] font-medium text-[#1f2937] md:text-[15.6px]">Company</h3>
                        <ul className="mt-6 space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-[13.6px] text-[#686868] transition-colors hover:text-[#0c7e9a]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="text-[22px] font-medium text-[#1f2937] md:text-[15.6px]">Contact</h3>
                        <ul className="mt-6 space-y-3">
                            {contactLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-[13.6px] text-[#686868] transition-colors hover:text-[#0c7e9a]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2 lg:col-span-5">
                        <h3 className="text-[22px] font-medium text-[#1f2937] md:text-[15.6px]">Stay Updated With Us</h3>

                        <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
                            <label htmlFor="footer-email" className="sr-only">
                                Email
                            </label>
                            <input
                                id="footer-email"
                                type="email"
                                placeholder="Email*"
                                className="h-13 w-full rounded-full border border-[#cdcdcd] bg-[#fbfbfa] px-6 text-[16px] text-[#686868] placeholder:text-[#686868] outline-none transition-all focus:border-[#0c7e9a]"
                            />
                            <CommonButton
                                href="/insights"
                                text="Subscribe"
                                className="h-13 min-w-37.5 justify-center px-8 py-0 shadow-none [&>span:first-child]:pl-0"
                            />
                        </div>

                        <div className="mt-8 flex items-center gap-3">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    aria-label={link.name}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#9eb3bf] text-[#0c7e9a] transition-colors hover:border-[#0c7e9a] hover:bg-[#0c7e9a] hover:text-white"
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;