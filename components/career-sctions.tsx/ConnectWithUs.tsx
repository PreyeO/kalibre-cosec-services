import React from "react";
import CareerForm from "./working-with-us/CareerForm";
import BodyContent from "../ui/typography/BodyContent";
import Heading from "../ui/typography/Heading";

const ConnectWithUs = () => {
  return (
    <section className=" contact-bg relative z-0 pb-[105px] ">
      <div className="flex justify-center gap-[38px] items-center pt-[50px] ">
        <CareerForm />
        <div className="max-w-[573px] pr-[91px] h-[266px] flex flex-col justify-center gap-6 backdrop-blur-[10px] border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[20px] py-[50px] pl-[50px] ">
          <Heading
            heading="Stay Connected for Future Opportunities"
            className="text-[26px] leading-8 text-[#122847] max-w-[373px]"
          />
          <BodyContent className=" text-lg leading-[26px] font-normal">
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
