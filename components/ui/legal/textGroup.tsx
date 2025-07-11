import React from "react";
import Heading from "../typography/Heading";
import BodyContent from "../typography/BodyContent";

interface TextGroupProps {
  heading: string;
  content: React.ReactNode;
}

const TextGroup: React.FC<TextGroupProps> = ({ content, heading }) => {
  return (
    <div className="flex flex-col gap-[25px]">
      <Heading
        className="text-[#122847] md:text-[54px] text-[32px] md:leading-[60px] leading-[38px] "
        heading={heading}
      />
      <BodyContent className="md:text-lg md:leading-[26px] text-[#3A3A3A] text-sm leading-[22px]">
        {content}
      </BodyContent>
    </div>
  );
};

export default TextGroup;
