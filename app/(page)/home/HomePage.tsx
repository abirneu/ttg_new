import React from "react";
import Hero from "./includes/Hero";
import Partners from "./includes/Partners";
import Service from "./includes/Service";
import Stories from "./includes/Stories";
import TrustClient from "./includes/TrustClient";
import ProvenTrust from "./includes/ProvenTrust";
import HowWeWork from "./includes/HowWeWork";
import WhyTtg from "./includes/WhyTtg";
import SuccessStories from "./includes/SuccessStories";
import Faq from "./includes/Faq";
import CallWithTtg from "../contact/includes/CallWithTtg";

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Partners />
            <Service />
            <WhyTtg />
            <HowWeWork /> 
            <TrustClient />
            <Stories />
            <SuccessStories />
            <CallWithTtg />
            <Faq />
            <ProvenTrust />
        </div>
    );
};

export default HomePage;
