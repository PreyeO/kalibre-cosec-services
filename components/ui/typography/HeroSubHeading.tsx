import React from "react";

interface HeroSubHeadingProps {
  content: string;
}

const HeroSubHeading: React.FC<HeroSubHeadingProps> = ({ content }) => {
  return (
    <p className="z-10 text-center mx-auto text-[#737373] font-primary md:leading-[26px] leading-[22px] md:text-lg text-sm max-w-[680px] font-normal ">
      {content}
    </p>
  );
};

export default HeroSubHeading;
