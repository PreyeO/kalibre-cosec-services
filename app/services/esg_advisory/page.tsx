import React from "react";
import Sectors from "@/components/ui/services/sectors";
import SolutionsSection from "@/components/service-sections/Solutions";
import { esgServiceSteps, esgSolutions } from "@/data";
import HowItWorksSection from "@/components/service-sections/HowItWorks";
import OurPhilosophySection from "@/components/service-sections/OurPhilosophy";
import ServiceHeroSection from "@/components/service-sections/Hero";
import CTASection from "@/components/service-sections/CTA";

const page = () => {
  return (
    <main className="">
      <ServiceHeroSection
        alt="ESG & SUSTAINABILITY ADVISORY"
        src="/esg-advisory.jpg"
        service="& SUSTAINABILITY ADVISORY"
        content=" End-to-end ESG advisory, from maturity assessments and strategy design to policy development, reporting and in-house sustainability enablement."
        span="ESG "
        label="Get Started"
        className=" max-w-[563px] "
      />
      <div className="service-bg-gradient relative z-10 opacity-0.3">
        <Sectors title="Our Clients Sectors" />
        <OurPhilosophySection
          philosophy="At Kalibre CoSec, we see ESG not just as a reporting requirement 
        but as a strategic asset. We help businesses embed sustainability into their governance and 
        perations, align with global standards and build lasting trust with investors, regulators 
        and stakeholders. Our approach supports startups, scale-ups and corporates in turning ESG 
        from a checkbox into a driver of purpose, resilience and growth"
        />
        <SolutionsSection solutions={esgSolutions} />
      </div>
      <HowItWorksSection
        highlightedText="Our ESG advisory approach"
        subheading="is practical, collaborative and tailored to your growth journey."
        steps={esgServiceSteps}
      />
      <CTASection
        heading="Ready to embed ESG into your growth strategy?"
        subheading="Partner with us to accelerate your ESG goals, drive meaningful 
      impact and build a resilient, future-ready business."
      />
    </main>
  );
};

export default page;
