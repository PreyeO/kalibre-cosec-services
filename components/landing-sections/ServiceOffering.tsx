import React from "react";
import Heading from "../ui/typography/Heading";
import BodyContent from "../ui/typography/BodyContent";
import ServiceCarousel from "../ui/carousels/service-carousel";

const ServiceOffering = () => {
  return (
    <section className="bg-[#001529] md:px-[50px] px-5 md:pt-[50px] pt-[35px] pb-[35px] md:pb-[52px] ">
      <div className="flex flex-col md:gap-[25px] gap-[10px]">
        <Heading
          className="text-[32px] md:text-[64px]  text-white leading-[38px] md:leading-[78px] md:w-[278px] w-[139px]"
          heading="Service Offerings"
        />
        <BodyContent className="text-[#A8A9AD] md:text-lg text-sm md:leading-[26px] leading-[22px] max-w-[773px]">
          {" "}
          Kalibre CoSec delivers integrated corporate services designed to help
          companies scale with credibility, operate with regulatory confidence
          and attract global investment.
        </BodyContent>
      </div>

      <ServiceCarousel />
    </section>
  );
};

export default ServiceOffering;
