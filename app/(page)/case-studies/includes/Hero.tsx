import React from "react";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative h-[820px] w-full overflow-hidden md:h-[760px]">
            <div
                className="pointer-events-none  absolute inset-0 flex flex-col md:flex-row"
                
            >
                <div
                    className="h-full w-full bg-cover bg-white bg-center bg-no-repeat md:w-[50%]"
                    style={{
                        backgroundImage:
                            "url('/images/CaseStudies/case-studies-left-part.png')",
                    }}
                />
                <div 
                    className="h-full w-full bg-cover bg-white bg-center bg-no-repeat md:w-[50%]"
                    style={{
                        backgroundImage:
                            "url('/images/CaseStudies/case-studies-right-part.png')",
                    }}
                    
                />
                <div className="relative flex min-h-[450px] items-center justify-center md:min-h-[600px]">
                        
                         {/* Hero Card 5  */}
                        <div
                            className="absolute -top-10 right-10 z-50 w-[240px] md:top-70 md:right-25 md:w-[421px] md:h-[209px] "
                            data-aos="fade-down-left"
                            data-aos-delay="1100"
                        >
                            <Image
                                src="/images/CaseStudies/img-5.png"
                                alt="Strategy Card 1"
                                width={450}
                                height={550}
                                className="h-auto w-full rotate-[-0deg] ] transition-transform duration-500 "
                            />
                        </div>
                        {/* Hero Card 4  */}
                        <div
                            className="absolute -top-10 right-10 z-40 w-[240px] md:top-55 md:right-15 md:w-[340px] md:h-[156px] "
                            data-aos="fade-down-left"
                            data-aos-delay="800"
                        >
                            <Image
                                src="/images/CaseStudies/img-4.png"
                                alt="Strategy Card 1"
                                width={450}
                                height={550}
                                className="h-auto w-full rotate-[-0deg]  transition-transform duration-500 hover:rotate-[-8deg]"
                            />
                        </div>
                        {/* Hero Card 2  */}
                        <div
                            className="absolute -top-10 right-10 z-40 w-[240px] md:top-66 md:right-56 md:w-[378px] md:h-[180px] "
                            data-aos="fade-down-left"
                            data-aos-delay="800"
                        >
                            <Image
                                src="/images/CaseStudies/img-2.png"
                                alt="Strategy Card 1"
                                width={450}
                                height={550}
                                className="h-auto w-full rotate-[-0deg]  transition-transform duration-500 hover:rotate-[-8deg]"
                            />
                        </div>

                        {/* Hero Card 3 */}
                        <div
                            className="absolute top-10 right-5 z-30 w-[240px] md:top-85 md:right-0 md:w-[339px] md:h-[156px] "
                            data-aos="fade-up-left"
                            data-aos-delay="600"
                        >
                            <Image
                                src="/images/CaseStudies/img-3.png"
                                alt="Strategy Card 2"
                                width={450}
                                height={550}
                                className="h-auto w-full rotate-[-0deg]  transition-transform duration-500 hover:rotate-[-2deg]"
                            />
                        </div>

                        {/* Hero Card 1 - */}
                        <div
                            className="absolute right-0 bottom-0 z-30 w-[240px] md:right-38 md:bottom-50 md:w-[380px] md:h-[180px] "
                            data-aos="fade-up-left"
                            data-aos-delay="600"
                        >
                            <Image
                                src="/images/CaseStudies/img-1.png"
                                alt="Strategy Card 3"
                                width={450}
                                height={550}
                                className="h-auto w-full rotate-[0deg]  transition-transform duration-500 "
                            />
                        </div>
                    </div>
            </div>
            <Container className="sticky z-10 py-24 pt-32 md:py-28 md:pt-80 ">
                <div className="grid items-center gap-10  md:grid-cols-2 md:gap-0">
                    <div className="  mt-10 md:-mt-20">
                        <div className="flex items-center justify-center md:justify-start ">
                            <InfoBadge
                            icon="/icons/Badges/earth.png"
                            text="World-Class Opportunities"
                            className=""
                        />
                        </div>
                        

                        <h1 className="font-clash text-center whitespace-nowrap md:text-left text-[28px] leading-tight font-medium text-[#04070D] md:text-[48px]">
                            Where Results Speak Louder
                        </h1>

                        <p className="font-funnel text-center md:text-left   mt-3 max-w-xl text-[16px] md:text-[20px] leading-relaxed text-[#525353]">
                            Explore how we turn complex challenges into scalable, high-impact solutions.{" "}
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
