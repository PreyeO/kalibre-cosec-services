import React from "react";
import Heading from "../typography/Heading";
import BodyContent from "../typography/BodyContent";

interface ListingGroupProps {
  heading: string;
  content: React.ReactNode;
  list: string[];
}

const ListingGroup: React.FC<ListingGroupProps> = ({
  content,
  heading,
  list,
}) => {
  return (
    <div className="flex flex-col gap-[25px]">
      <Heading
        className="text-[#122847] md:text-[54px] text-[32px] md:leading-[60px] leading-[38px] "
        heading={heading}
      />

      <BodyContent className="md:text-lg md:leading-[26px] text-[#3A3A3A] text-sm leading-[22px]">
        {content}
        <ul className="flex flex-col gap-2 list-disc pl-8">
          {list.map((item, index) => (
            <li
              key={index}
              className="md:text-lg md:leading-[26px] text-[#3A3A3A] text-sm leading-[22px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </BodyContent>
    </div>
  );
};

export default ListingGroup;
