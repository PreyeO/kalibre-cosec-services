import ServiceHero from "@/components/ui/services/ServiceHero";
import React from "react";

const Hero = () => {
  return (
    <section className="md:mt-[100px] pt-[70px]">
      <ServiceHero
        alt="ESG & SUSTAINABILITY ADVISORY"
        src="/esg-advisory.jpg"
        service="& SUSTAINABILITY ADVISORY"
        content=" End-to-end ESG advisory, from maturity assessments and strategy design to policy development, reporting and in-house sustainability enablement."
        span="ESG "
        label="Get Started"
      />
    </section>
  );
};

export default Hero;
