import React from "react";

interface ServiceHeadingProps {
  span: string;
  heading: string;
  className?: string;
}

const ServiceHeading: React.FC<ServiceHeadingProps> = ({
  span,
  heading,
  className,
}) => {
  return (
    <h1 className="text-[#F67D30] font-primary md:text-[54px] text-[32px] leading-[38px] md:leading-[60px] font-medium  text-center">
      <span className={`${className} text-[#737373]`}>{span} </span>
      {heading}
    </h1>
  );
};

export default ServiceHeading;
