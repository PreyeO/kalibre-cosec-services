import { deliveries, trainings } from "@/data";
import React from "react";
import ColoredTitle from "../ui/typography/colored-title";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const TrainingOfferingsSection = () => {
  return (
    <section className="bg-[#001529] text-[#A8A9AD] md:pt-[100px] pt-[35px] pb-[35px] md:pb-[61px] px-5 md:px-[50px]">
      <div className=" font-primary max-w-[773px] flex flex-col justify-center gap-[10px] md:gap-[25px] mx-auto text-center items-center ">
        <h3 className="md:text-[64px] text-[32px] leading-[38px] md:leading-[78px] font-medium max-w-[409px] text-white">
          Our Training <span className="text-[#F67D30]">Offerings</span>
        </h3>
        <p className=" leading-[22px] md:leading-[26px] md:text-lg  text-sm font-normal">
          Our training programs are built around a discovery-led approach, where
          we assess your governance maturity, leadership needs and regulatory
          environment to design sessions that are both relevant and high-impact.
          Below are some examples of frequently delivered topics:
        </p>
      </div>

      <div className="relative flex md:gap-[30px] flex-wrap lg:flex-nowrap">
        {/* Left Card */}
        <div className="mt-[30px] md:mt-[25px] w-full border border-[#BCC4DC]/40 rounded-[20px] py-6 pl-6">
          <ColoredTitle title="Training offering" />
          {trainings.map((training, index) => (
            <div key={index} className="max-w-[455px] pt-[25px] ">
              <div className="flex gap-[10px]  items-center ">
                <span className="flex justify-center items-center w-[34px] h-[34px] border border-[#BCC4DC] rounded-full text-[13px] font-tetiary font-normal">
                  {training.digit}
                </span>
                <p className="leading-6 font-primary font-medium md:text-base text-sm">
                  {training.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <Image
            src="/arrow.svg"
            alt="Arrow Icon"
            width={117.34}
            height={91.74}
            priority
          />
        </div>

        {/* Right Card */}
        <div className="mt-[30px] md:mt-[25px]  w-full border border-[#BCC4DC]/40 rounded-[20px] py-6 pl-6">
          <ColoredTitle title="Delivery Formats" />
          {deliveries.map((delivery, index) => (
            <div key={index} className="max-w-[455px] pt-[25px]">
              <div className="flex gap-[10px] items-center ">
                <Sparkles color="#fef9c2" className="" size={24} />
                <p className="leading-6 font-primary font-medium md:text-base text-sm">
                  {delivery.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingOfferingsSection;
