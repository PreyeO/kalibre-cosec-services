import React from "react";
import CareerForm from "./working-with-us/CareerForm";
import BodyContent from "../ui/typography/BodyContent";
import Heading from "../ui/typography/Heading";

const ConnectWithUs = () => {
  return (
    <section className=" contact-bg relative z-0 md:pb-[105px]  ">
      <div className=" mx-[21px]  flex justify-center md:gap-[38px] items-center pt-[50px] lg:flex-nowrap flex-wrap ">
        <CareerForm />
        <div className="max-w-[573px] md:pr-[91px] md:h-[266px] flex flex-col justify-center md:gap-6 gap-[10px] lg:backdrop-blur-[10px] lg:border lg:border-white/60 lg:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[20px] md:py-[50px] py-4 md:pl-[50px] ">
          <Heading
            heading="Stay Connected for Future Opportunities"
            className="text-base md:text-[26px] leading-6 md:leading-8 text-[#122847] max-w-[373px]"
          />
          <BodyContent className=" md:text-lg text-sm md:leading-[26px] leading-[22px] font-normal">
            While there are no open roles at the moment, we welcome you to
            submit your information and resume. We will review your details and
            contact you when a relevant opportunity becomes available.
          </BodyContent>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
