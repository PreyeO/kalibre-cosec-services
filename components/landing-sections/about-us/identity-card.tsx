import React from "react";
import Image from "next/image";
import Heading from "@/components/ui/typography/Heading";
import BodyContent from "@/components/ui/typography/BodyContent";

interface IdentityProps {
  title: string;
  text: string;
}

const IdentityCard: React.FC<IdentityProps> = ({ title, text }) => {
  return (
    <div className="w-full md:[381px] md:gap-[10px] flex flex-col">
      <div className="flex flex-col  md:gap-[10px] gap-[6px]">
        <Image
          src="/star.svg"
          alt="Star Icon"
          width={23}
          height={24}
          priority
          className=""
        />
        <Heading
          heading={title}
          className="text-base md:text-xl font-normal font-tetiary bg-[linear-gradient(180.01deg,_#F67D30_26.49%,_#1E3A8A_117.49%)] bg-clip-text text-transparent"
        />
      </div>
      <BodyContent
        content={text}
        className="font-normal text-base md:text-sm leading-[22px] text-[#3A3A3A]"
      />
    </div>
  );
};

export default IdentityCard;
