import React from "react";
import Hero from "./Hero";
import Philosophy from "./Philosophy";
import Sectors from "@/components/ui/services/sectors";
import Support from "./Support";
import HowItWorks from "./HowItWorks";

const page = () => {
  return (
    <main className="">
      <Hero />
      <div className="service-bg-gradient relative z-10 opacity-0.3">
        <Sectors title="Our Clients Sectors" />
        <Philosophy />
        <Support />
      </div>
      <HowItWorks />
    </main>
  );
};

export default page;
