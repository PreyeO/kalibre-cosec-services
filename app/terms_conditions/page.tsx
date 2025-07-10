import ServiceHeroSection from "@/components/service-sections/Hero";
import React from "react";

const page = () => {
  return (
    <main>
      <ServiceHeroSection
        alt=" TERMS & CONDITIONS "
        src="/terms.jpg"
        service=" TERMS"
        content="Last updated September 23, 2025"
        span="& CONDITIONS"
        label="Get Started"
        showButton={false}
        className=" max-w-[873px] "
      />
    </main>
  );
};

export default page;
