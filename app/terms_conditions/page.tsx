import NewsLetter from "@/components/layout/NewsUpdates/NewsLetter";
import TermsSection from "@/components/legal-sections/Terms";
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
        alt=" TERMS & CONDITIONS "
        src="/terms.jpg"
        service="& CONDITIONS "
        content={`Last updated ${formattedDate}`}
        span="TERMS"
        label="Get Started"
        showButton={false}
        className=" max-w-[873px] "
      />
      <TermsSection />
      <NewsLetter />
    </main>
  );
};

export default page;
