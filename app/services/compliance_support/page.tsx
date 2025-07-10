import React from "react";
import Sectors from "@/components/ui/services/sectors";
import SolutionsSection from "@/components/service-sections/Solutions";
import { complianceServiceSteps, complianceSolutions } from "@/data";
import HowItWorksSection from "@/components/service-sections/HowItWorks";
import OurPhilosophySection from "@/components/service-sections/OurPhilosophy";
import ServiceHeroSection from "@/components/service-sections/Hero";
import CTASection from "@/components/service-sections/CTA";

const page = () => {
  return (
    <main className="">
      <ServiceHeroSection
        alt="COMPLIANCE & REGULATORY SOLUTIONS"
        src="/compliance-support.jpg"
        service="& REGULATORY SOLUTIONS"
        content="Helping companies meet regulatory obligations, manage compliance risks and build 
        trusted operating environments, locally and globally."
        span="COMPLIANCE "
        label="Get Started"
        className=" max-w-[873px] "
      />
      <div className="service-bg-gradient relative z-10 opacity-0.3">
        <Sectors title="Our Clients Sectors" />
        <OurPhilosophySection
          philosophy="Regulatory compliance is not just about avoiding penalties, it is about 
          building trust. Whether you are operating in fintech, data services, investment or a 
          traditional sector, you are accountable to a fast-evolving regulatory ecosystem. 
          At Kalibre CoSec, we help businesses understand and meet their regulatory obligations, 
          design internal compliance programs and ensure they are audit-ready, investor-ready and 
          regulator-respected. "
        />
        <SolutionsSection solutions={complianceSolutions} />
      </div>
      <HowItWorksSection
        highlightedText="Our regulatory approach"
        subheading="is strategic, risk-aware and built to keep your operations compliant across 
        evolving legal environments."
        steps={complianceServiceSteps}
      />
      <CTASection
        heading="Let’s Build a Resilient Compliance Culture"
        subheading="Partner with us to simplify regulatory complexity, embed strategic 
        compliance and protect your growth across markets."
      />
    </main>
  );
};

export default page;
