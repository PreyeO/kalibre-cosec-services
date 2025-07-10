// components/ui/sections/how-it-works-steps.tsx

import React from "react";
import ColoredTitle from "@/components/ui/typography/colored-title";

interface Step {
  title: string;
  digit: string;
  description: string;
}

interface HowItWorksStepsProps {
  subheading: string;
  highlightedText?: string;
  steps: Step[];
}

const HowItWorksSection: React.FC<HowItWorksStepsProps> = ({
  subheading,
  highlightedText,
  steps,
}) => {
  return (
    <section className="bg-[#001529] md:py-[100px] py-[35px] px-5 md:px-[50px] xl:px-[50px] lg:px-[30px]">
      <div className="flex flex-col gap-[10px]">
        <ColoredTitle title="HOW IT WORKS" />

        <h3 className="max-w-[593px] text-base md:text-[31px] font-primary font-light text-[#A8A9AD] leading-[120%]">
          {highlightedText && (
            <span className="text-white">{highlightedText}</span>
          )}{" "}
          {subheading}
        </h3>
      </div>

      <div className="mt-[30px] lg:mt-[50px] flex flex-wrap lg:flex-nowrap gap-8 lg:gap-0 lg:items-start overflow-x-visible relative items-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`lg:bg-[#001529] md:h-[300px] md:w-[300px]  xl:h-[320px] xl:w-[320px]  w-[270px] h-[270px] rounded-full border flex-shrink-0 flex flex-col items-start lg:py-[64px] xl:px-[60px] px-[43px] py-[49px] justify-start z-[1] ${
              index !== 0
                ? "xl:ml-[-40px] lg:ml-[-80px] mt-[-80px] md:mt-0 lg:mt-0"
                : ""
            }`}
          >
            <div className="w-[180px]">
              <h2 className="md:text-[31.6px] text-[22px] font-light font-tetiary text-[#FF914D]">
                {step.digit}
              </h2>
              <h4 className="text-base font-primary font-medium leading-6 text-[#FF914D]">
                {step.title}
              </h4>
            </div>
            <p className="pt-[6px] w-[200px] font-primary font-normal leading-[22px] text-sm text-white">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
