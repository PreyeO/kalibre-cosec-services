import React from "react";
import Sectors from "@/components/ui/services/sectors";
import OurPhilosophySection from "@/components/service-sections/OurPhilosophy";
import ServiceHeroSection from "@/components/service-sections/Hero";
import CTASection from "@/components/service-sections/CTA";
import TrainingOfferingsSection from "@/components/service-sections/TrainingOfferings";

const page = () => {
  return (
    <main className="">
      <ServiceHeroSection
        alt="BOARD & C-SUITES TRAINING"
        src="/board-training.jpg"
        service="& C-SUITES TRAINING"
        content="Equipping directors, executives and senior leaders with the foresight, 
        regulatory fluency and boardroom acumen to lead effectively in high-growth, regulated and 
        investor-facing environments."
        span="BOARD "
        label="Get Started"
        className=" max-w-[873px] "
      />
      <div className="service-bg-gradient relative z-10 opacity-0.3">
        <Sectors title="Our Clients Sectors" />
        <OurPhilosophySection
          philosophy="An effective board or executive team not only possesses experience 
          but remains at the forefront of industry and regulatory developments. Kalibre CoSec 
          delivers training programs that equip boards, founders and senior leaders with the strategic 
          foresight to navigate complexity with confidence. Our tailored sessions ensure actionable 
          insights, whether preparing for investment, restructuring, IPO or global expansion. "
        />
      </div>
      <TrainingOfferingsSection />
      <CTASection
        heading="Shape Boardroom Excellence, Not Just Compliance"
        subheading="Equip your board and executives with 
        strategic governance, ESG foresight and cross-market leadership capabilities.."
      />
    </main>
  );
};

export default page;
