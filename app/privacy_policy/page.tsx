import ServiceHeroSection from "@/components/service-sections/Hero";
import React from "react";

const page = () => {
  return (
    <main>
      <ServiceHeroSection
        alt="PRIVACY POLICY "
        src="/policy.jpg"
        service="POLICY"
        content="Last updated September 23, 2025"
        span="PRIVACY"
        label="Get Started"
        showButton={false}
        className=" max-w-[873px] "
      />
    </main>
  );
};

export default page;
