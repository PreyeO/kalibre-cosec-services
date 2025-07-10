import React from "react";
import ServiceHeading from "../ui/typography/service-heading";
import { outsourceSolutions } from "@/data";
import { Coins } from "lucide-react";
import ColoredTitle from "../ui/typography/colored-title";
import BodyContent from "../ui/typography/BodyContent";

const OutsourceSupportSection = () => {
  return (
    <section className=" py-[35px] md:py-[50px] px-5 bg-[#001529] md:px-[50px]">
      <div className="flex flex-col justify-center items-center gap-[25px] max-w-[621px] mx-auto">
        <div className="p-[1px] rounded-full bg-gradient-to-b from-[#F67D30] to-[#1E3A8A]">
          <div className="md:w-[116px] w-[85px] h-5 md:h-[42px] flex items-center justify-center rounded-full bg-[#392e28]">
            <span className="bg-gradient-to-b from-[#F67D30] to-[#1E3A8A] bg-clip-text text-transparent font-semibold text-sm">
              SOLUTIONS
            </span>
          </div>
        </div>

        <ServiceHeading
          heading="SUPPORT YOU"
          span=" HOW WE CAN "
          className="text-white"
        />
      </div>
      <div className=" mt-[30px] md:mt-[50px] lg:border lg:border-[#BCC4DC]/40 rounded-[20px] w-full flex-wrap lg:flex-nowrap flex lg:py-[35px] lg:px-[35px] gap-[30px]">
        {outsourceSolutions.map((solution, index) => (
          <div key={index} className="">
            <div className="w-[50px] h-[50px] rounded-md  mb-[25px] bg-[#173b5b] flex justify-center items-center mx-auto lg:mx-0 ">
              <Coins color="white" />
            </div>
            <div className="flex flex-col gap-[10px] justify-center lg:justify-start items-center lg:text-left text-center lg:items-start">
              <ColoredTitle title={solution.title} />
              <BodyContent
                content={solution.description}
                className="text-[#A8A9AD] md:text-base md:leading-6 text-sm leading-[22px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OutsourceSupportSection;
