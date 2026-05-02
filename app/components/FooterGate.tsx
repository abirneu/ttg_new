"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const FooterGate = () => {
    const pathname = usePathname();

    if (pathname === "/consultation" || pathname.startsWith("/consultation/")) {
        return null;
    }

    return <Footer />;
};

export default FooterGate;
