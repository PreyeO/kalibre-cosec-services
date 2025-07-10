import React from "react";
import Sectors from "@/components/ui/services/sectors";
import SolutionsSection from "@/components/service-sections/Solutions";
import { secreterailSolutions, secreterialServiceSteps } from "@/data";
import HowItWorksSection from "@/components/service-sections/HowItWorks";
import OurPhilosophySection from "@/components/service-sections/OurPhilosophy";
import ServiceHeroSection from "@/components/service-sections/Hero";
import CTASection from "@/components/service-sections/CTA";

const page = () => {
  return (
    <main className="">
      <ServiceHeroSection
        alt="COMPANY SECRETARIAL & ENTITY MANAGEMENT "
        src="/company-secretary.jpg"
        service="SECRETARIAL & ENTITY MANAGEMENT "
        content="Specialist support across company secretarial, regulatory and entity 
        anagement functions to maintain corporate integrity and enable seamless board and 
        operational execution."
        span="COMPANY  "
        label="Get Started"
        className=" max-w-[873px] "
      />
      <div className="service-bg-gradient relative z-10 opacity-0.3">
        <Sectors title="Our Clients Sectors" />
        <OurPhilosophySection
          philosophy="At Kalibre CoSec, we offer practical, high-trust corporate secretarial 
          and corporate administration services that keep your organization compliant, structured and 
          investor-ready. We support founders, executives and governance teams by handling the complex 
          administrative, statutory and legal responsibilities that ensure a company operates within 
          the boundaries of corporate law, while enabling leaders to focus on strategic priorities."
        />
        <SolutionsSection solutions={secreterailSolutions} />
      </div>
      <HowItWorksSection
        highlightedText="Our governance approach"
        subheading="is built for scale, to ensure your board and governance 
        framework evolve with your business."
        steps={secreterialServiceSteps}
      />
      <CTASection
        heading="Let’s Simplify Your Governance Operations"
        subheading="Partner with us to remove corporate administration burdens and focus 
        fully on accelerating your business growth."
      />
    </main>
  );
};

export default page;
