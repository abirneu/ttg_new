import React from "react";
import Hero from "./includes/Hero";
import Partners from "./includes/Partners";
import Service from "./includes/Service";
import Why_ttg from "./includes/Why_ttg";
import How_we_work from "./includes/How_we_work";
import Trust_by_client from "./includes/Trust_by_client";
import Stories from "./includes/Stories";
import Proven_Trust from "./includes/Proven_Trust";

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Partners />
            <Service />
            <Why_ttg />
            <How_we_work />
            <Trust_by_client />
            <Stories />
            <Proven_Trust /> 
        </div>
    );
};

export default HomePage;
