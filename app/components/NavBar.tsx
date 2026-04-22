"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import CommonButton from "./CommonButton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Careers", href: "/careers" },
    { name: "Insights", href: "/insights" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-6">
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
        <nav className="hidden items-center rounded-[40px] bg-white/10 p-[5px] pl-[6px] pr-[25px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] backdrop-blur-[6px] md:flex gap-[20px] border border-white/20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`rounded-full px-4 py-2 text-[16px] font-normal transition-colors ${
                link.name === "Home"
                  ? "bg-[#ecfbff] text-[#1A202C] font-semibold"
                  : "text-[#1A202C] opacity-70 hover:opacity-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Section */}
        <div className="flex items-center gap-4">
          <CommonButton
            href="/contact"
            text="Contact Us"
            className="hidden sm:flex"
            icon="/icons/arrow-up-right.png"
          />

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#1A202C] md:hidden"
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
          <div className="absolute top-full right-6 left-6 mt-4 flex flex-col items-center gap-4 rounded-3xl bg-white p-6 shadow-xl md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-[#4A5568]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <CommonButton
              href="/contact"
              text="Contact Us"
              className="mt-4 w-full flex justify-center py-4"
              onClick={() => setIsOpen(false)}
            />
          </div>
        )}
      </Container>
    </header>
  );
};


export default NavBar;
