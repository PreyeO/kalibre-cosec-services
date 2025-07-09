import React from "react";

interface ServiceHeadingProps {
  span: string;
  heading: string;
}

const ServiceHeading: React.FC<ServiceHeadingProps> = ({ span, heading }) => {
  return (
    <h1 className="text-[#F67D30]  w-[379px] font-primary md:text-[54px] text-[26px] leading-8 md:leading-[60px] font-medium  text-center">
      <span className="text-[#737373]">{span} </span>
      {heading}
    </h1>
  );
};

export default ServiceHeading;
