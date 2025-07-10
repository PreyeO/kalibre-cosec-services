import React from "react";
import Sectors from "@/components/ui/services/sectors";
import OurPhilosophySection from "@/components/service-sections/OurPhilosophy";
import ServiceHeroSection from "@/components/service-sections/Hero";
import CTASection from "@/components/service-sections/CTA";
import OutsourceSupportSection from "@/components/service-sections/OutsourceSupport";

const page = () => {
  return (
    <main className="">
      <ServiceHeroSection
        alt="OUTSOURCING SERVICES"
        src="/outsourcing.jpg"
        service="SERVICES"
        content=" Scalable, compliant and efficient operational support for businesses building 
        lean structures across Africa and beyond."
        span="OUTSOURCING "
        label="Download EOR Sheet"
        className=" max-w-[695px] "
        downloadUrl="/downloads/hr-guide.pdf"
      />
      <div className="service-bg-gradient relative z-10 opacity-0.3">
        <Sectors title="Our Clients Sectors" />
        <OurPhilosophySection
          philosophy="Outsourcing is no longer just operational, it is strategic. Whether managing 
          employment risk, scaling across borders or ensuring HR and finance compliance, Kalibre CoSec
           enables businesses to delegate critical functions without compromising governance, 
           transparency or control. Through trusted delivery or partner models, we help growth-focused 
           companies maintain investor-grade standards while remaining agile. "
        />
      </div>
      <OutsourceSupportSection />

      <CTASection
        heading="Ready to Outsource Smarter?"
        subheading="Whether you are hiring in new markets or simply building lean, partner with us to 
        support you as you scale with clarity and compliance at the core."
      />
    </main>
  );
};

export default page;
