import React from "react";
import Heading from "../../ui/typography/Heading";
import Image from "next/image";
import WhyUsDesktopContainer from "./WhyUsDesktopContainer";
import WhyUsMobileContainer from "./WhyUsMobileContainer";
import ColoredTitle from "@/components/ui/typography/colored-title";
import DiscoveryButton from "@/components/ui/buttons/discovery-button";

const WhyUs = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#E6E6E6] lg:px-[50px] px-5 md:pt-[50px] pt-[35px] pb-[35px] md:pb-0 ">
      <div className=" lg:flex lg:justify-evenly">
        <div className="lg:w-[536px] w-[201px]">
          <ColoredTitle title="KALIBRE COSEC LIMITED " />
          <div className="flex relative">
            <Heading
              className="text-[32px] lg:text-[64px] leading-[38px] lg:leading-[78px] text-[rgba(18,40,71,1)]"
              heading="Why Kalibre CoSec"
            />
            <Image
              src="/arrow.png"
              alt="Arrow Icon"
              width={224}
              height={256}
              priority
              className=" absolute right-1/2 translate-x-[80%] -top-5 hidden lg:block "
            />
          </div>
          <div className="mt-[25px] hidden lg:block">
            <DiscoveryButton />
          </div>
        </div>
        <div className="hidden md:flex md:mt-[30px] lg:mt-0">
          <WhyUsDesktopContainer />
        </div>
        <div className="block md:hidden mt-[30px]">
          <WhyUsMobileContainer />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
