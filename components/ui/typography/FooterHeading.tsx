import React from "react";

interface FooterHeadingProps {
  heading: string;
}
const FooterHeading: React.FC<FooterHeadingProps> = ({ heading }) => {
  return (
    <h3 className={`font-secondary font-semibold text-[22px] text-white`}>
      {heading}
    </h3>
  );
};

export default FooterHeading;
