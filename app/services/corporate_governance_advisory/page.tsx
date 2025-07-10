import React from "react";
import Sectors from "@/components/ui/services/sectors";
import SolutionsSection from "@/components/service-sections/Solutions";
import { corporateServiceSteps, corporateSolutions } from "@/data";
import HowItWorksSection from "@/components/service-sections/HowItWorks";
import OurPhilosophySection from "@/components/service-sections/OurPhilosophy";
import ServiceHeroSection from "@/components/service-sections/Hero";
import CTASection from "@/components/service-sections/CTA";

const page = () => {
  return (
    <main className="">
      <ServiceHeroSection
        alt="CORPORATE GOVERNANCE ADVISORY & BOARD EFFECTIVENESS "
        src="/corporate-advisory.jpg"
        service="GOVERNANCE ADVISORY & BOARD EFFECTIVENESS"
        content="Helping organizations build high-performing boards, 
        codify governance frameworks and embed transparency, accountability and 
        strategic oversight at every level."
        span="CORPORATE  "
        label="Get Started"
        className=" max-w-[883px] "
      />
      <div className="service-bg-gradient relative z-10 opacity-0.3">
        <Sectors title="Our Clients Sectors" />
        <OurPhilosophySection
          philosophy="At Kalibre CoSec, we view corporate governance as a strategic enabler of 
          performance, not just a regulatory requirement. Good governance enables better 
          decision-making, enhances investor confidence and ensures organizational resilience. 
          Our governance advisory approach is designed to meet businesses where they are, whether 
          they are a scaling startup seeking investor readiness or a growing institution aligning to 
          global best practice."
        />
        <SolutionsSection solutions={corporateSolutions} />
      </div>
      <HowItWorksSection
        highlightedText="Our governance approach"
        subheading="is built for scale, to ensure your board and governance framework evolve with your business."
        steps={corporateServiceSteps}
      />
      <CTASection
        heading="Let’s Strengthen Your Governance Framework"
        subheading="Whether navigating investment, expansion or organisational change, Kalibre CoSec supports 
        the design of governance structures that drive performance and strategic clarity."
      />
    </main>
  );
};

export default page;
