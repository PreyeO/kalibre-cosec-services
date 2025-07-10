import React from "react";
import HeroHeading from "../typography/HeroHeading";
import HeroSubHeading from "../typography/HeroSubHeading";
import HeroButton from "../buttons/HeroButton";
import HeroImage from "../images/HeroImage";
import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="max-w-[680px]  flex flex-col gap-[10px] justify-center items-center mx-auto ">
      <HeroHeading span="Governance." service="Strategy. Compliance." />
      <HeroSubHeading
        content="    Kalibre CoSec partners with growth-stage companies, global investors and
      institutions to deliver expert-led governance, regulatory alignment and
      corporate infrastructure across Africa and beyond."
      />
      <Link href="#about_us">
        <HeroButton label="  Learn More" />
      </Link>
      <HeroImage />
    </div>
  );
};

export default HeroContent;
