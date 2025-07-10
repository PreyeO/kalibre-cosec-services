import React from "react";
import Heading from "../ui/typography/Heading";
import DiscoveryButton from "../ui/buttons/discovery-button";

interface CTAProps {
  heading: string;
  subheading: string;
}

const CTASection: React.FC<CTAProps> = ({ heading, subheading }) => {
  return (
    <section className="cta-bg md:py-[87px] py-[35px] flex flex-col justify-center px-5">
      <div className="max-w-[516px] flex flex-col gap-[10px] justify-center items-center text-center mx-auto ">
        <Heading
          heading={heading}
          className="text-[#122847] text-[26px] leading-[32px] md:text-[40px] md:leading-[48px]"
        />
        <p className="md:leading-[26px] leading-[22px] font-medium font-primary text-sm md:text-lg text-[#3A3A3A]">
          {subheading}
        </p>

        <DiscoveryButton />
      </div>
    </section>
  );
};

export default CTASection;
