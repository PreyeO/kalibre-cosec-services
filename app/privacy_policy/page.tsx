import NewsLetter from "@/components/layout/NewsUpdates/NewsLetter";
import PrivacySection from "@/components/legal-sections/Privacy";
import ServiceHeroSection from "@/components/service-sections/Hero";
import React from "react";

const page = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main>
      <ServiceHeroSection
        alt="PRIVACY POLICY"
        src="/policy.jpg"
        service="POLICY"
        content={`Last updated ${formattedDate}`}
        span="PRIVACY"
        label="Get Started"
        showButton={false}
        className="max-w-[873px]"
      />
      <PrivacySection />
      <NewsLetter />
    </main>
  );
};

export default page;
