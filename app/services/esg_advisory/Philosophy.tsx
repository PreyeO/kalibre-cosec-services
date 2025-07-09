import ServiceHeading from "@/components/ui/services/service-heading";
import ServicePhilosophy from "@/components/ui/services/service-philosophy";
import React from "react";

const Philosophy = () => {
  return (
    <section className="py-[150px] relative ">
      <div className="absolute inset-0 philosophy-bg opacity-20 z-0"></div>
      <div className="relative z-10 flex flex-col gap-[25px] justify-center items-center">
        <ServiceHeading heading="PHILOSOPHY" span="OUR" />
        <ServicePhilosophy
          philosophy="At Kalibre CoSec, we see ESG not just as a reporting requirement but as a strategic asset. We help businesses embed sustainability into their governance and operations, align with global standards and build lasting trust with investors, regulators and stakeholders. Our approach supports startups, scale-ups and corporates in turning ESG from a checkbox into a driver of purpose, resilience and growth.
"
        />
      </div>
    </section>
  );
};

export default Philosophy;
