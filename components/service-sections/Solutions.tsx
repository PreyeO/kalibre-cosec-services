// components/ui/solutions/solutions-section.tsx

import React from "react";
import ServiceHeading from "@/components/ui/typography/service-heading";
import { LucideIcon } from "lucide-react";

interface Solution {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface SolutionsSectionProps {
  solutions: Solution[];
}

const SolutionsSection: React.FC<SolutionsSectionProps> = ({ solutions }) => {
  return (
    <section className="md:pt-8 pt-[70px] pb-[45px] px-5">
      <div className="flex flex-col justify-center items-center gap-[25px] max-w-[621px] mx-auto ">
        <div className="p-[1px] rounded-full bg-gradient-to-b from-[#F67D30] to-[#1E3A8A]">
          <div className="md:w-[116px] w-[85px] h-5 md:h-[42px] flex items-center justify-center rounded-full bg-[#f1d0bc]">
            <span className="bg-gradient-to-b from-[#F67D30] to-[#1E3A8A] bg-clip-text text-transparent font-semibold text-sm">
              SOLUTIONS
            </span>
          </div>
        </div>

        <ServiceHeading heading="SUPPORT YOU" span=" HOW WE CAN " />
      </div>

      <div className="font-primary gap-[25px] flex flex-wrap justify-center items-center mt-[50px]">
        {solutions.map((solution, index) => {
          const Icon = solution.icon || (() => null);
          return (
            <div
              key={index}
              className="w-[350px] lg:w-[430px] h-auto md:h-[500px] lg:h-[430px] rounded-[20px] border border-[#BCC4DC] md:pt-[25px] py-4 md:pb-[51px] px-4"
            >
              <div className="max-w-[386px] flex flex-col justify-center items-center text-center mx-auto md:gap-[25px] gap-[10.22px]">
                <div className="w-[50px] h-[50px] rounded-md border border-[#BCC4DC] flex items-center justify-center">
                  <Icon color="black" size={26} />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="md:text-lg text-base font-semibold bg-[linear-gradient(180.01deg,#F67D30_26.49%,#1E3A8A_117.49%)] bg-clip-text text-transparent">
                    {solution.title}
                  </h3>
                  <p className="font-normal text-[#737373] text-sm md:text-base md:leading-6 leading-[22px] pt-[10px]">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SolutionsSection;
