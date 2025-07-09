import React from "react";
import HeroHeading from "./HeroHeading";
import HeroSubHeading from "./HeroSubHeading";
import HeroButton from "./HeroButton";
import HeroImage from "./HeroImage";

const HeroContent = () => {
  return (
    <div className="max-w-[680px]  flex flex-col gap-[10px] justify-center items-center mx-auto ">
      <HeroHeading span="Governance." service="Strategy. Compliance." />
      <HeroSubHeading
        content="    Kalibre CoSec partners with growth-stage companies, global investors and
      institutions to deliver expert-led governance, regulatory alignment and
      corporate infrastructure across Africa and beyond."
      />
      <HeroButton label="  Learn More" />
      <HeroImage />
    </div>
  );
};

export default HeroContent;
