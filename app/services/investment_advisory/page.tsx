import React from "react";
import Sectors from "@/components/ui/services/sectors";
import SolutionsSection from "@/components/service-sections/Solutions";
import { investmentServiceSteps, investmentSolutions } from "@/data";
import HowItWorksSection from "@/components/service-sections/HowItWorks";
import OurPhilosophySection from "@/components/service-sections/OurPhilosophy";
import ServiceHeroSection from "@/components/service-sections/Hero";
import CTASection from "@/components/service-sections/CTA";

const page = () => {
  return (
    <main className="">
      <ServiceHeroSection
        alt="INVESTMENT READINESS & CAPITAL ADVISORY "
        src="/investment-advisory.jpg"
        service="READINESS & CAPITAL ADVISORY  "
        content="Positioning ambitious startups to become investment-ready and connect 
        with capital by aligning strategy, structure, operations and execution."
        span="INVESTMENT  "
        label="Get Started"
        className=" max-w-[873px] "
      />
      <div className="service-bg-gradient relative z-10 opacity-0.3">
        <Sectors title="Our Clients Sectors" />
        <OurPhilosophySection
          philosophy="In today’s funding environment, investors are scrutinizing boards, 
          compliance frameworks and company structure as rigorously as they evaluate financials. 
          alibre CoSec supports startups and growth-stage businesses in preparing for capital raises, 
          investor negotiations and strategic transactions by strengthening their governance 
          infrastructure and aligning their corporate structures with investor demands."
        />
        <SolutionsSection solutions={investmentSolutions} />
      </div>
      <HowItWorksSection
        highlightedText="Our approach"
        subheading="blends legal, strategic and capital advisory insight to position 
        businesses for successful fundraising."
        steps={investmentServiceSteps}
      />
      <CTASection
        heading="Let’s Get You Investment-Ready"
        subheading="
     From cap table clarity to boardroom credibility, we help you show up prepared 
     in every investor conversation."
      />
    </main>
  );
};

export default page;
