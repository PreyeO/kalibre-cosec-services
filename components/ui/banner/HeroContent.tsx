import React from "react";
import HeroHeading from "./HeroHeading";
import HeroSubHeading from "./HeroSubHeading";
import HeroButton from "./HeroButton";
import HeroImage from "./HeroImage";

const HeroContent = () => {
  return (
    <div className="max-w-[680px]  flex flex-col gap-[10px] justify-center items-center mx-auto ">
      <HeroHeading />
      <HeroSubHeading />
      <HeroButton />
      <HeroImage />
    </div>
  );
};

export default HeroContent;
