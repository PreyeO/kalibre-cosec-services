import React from "react";

interface HeroHeadingProps {
  span: string;
  service: string;
}

const HeroHeading: React.FC<HeroHeadingProps> = ({ span, service }) => {
  return (
    <h1 className=" font-primary md:text-[50px] text-[26px] leading-8 md:leading-[100%] font-medium text-[#122847] text-center">
      <span className="text-[#F67D30]">{span} </span>
      {service}
    </h1>
  );
};

export default HeroHeading;
