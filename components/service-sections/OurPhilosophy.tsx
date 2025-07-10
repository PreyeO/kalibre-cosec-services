import ServiceHeading from "@/components/ui/typography/service-heading";
import ServicePhilosophy from "@/components/ui/typography/service-philosophy";
import React from "react";

interface PhilosophyProps {
  philosophy: string;
}

const OurPhilosophySection: React.FC<PhilosophyProps> = ({ philosophy }) => {
  return (
    <section id="philosophy" className="py-[35px] md:py-[150px] relative ">
      <div className="absolute inset-0 philosophy-bg opacity-20 z-0"></div>
      <div className="relative z-10 flex flex-col gap-[25px] justify-center items-center  px-5 ">
        <ServiceHeading heading="PHILOSOPHY" span="OUR" />
        <ServicePhilosophy philosophy={philosophy} />
      </div>
    </section>
  );
};

export default OurPhilosophySection;
