import React from "react";
import ColoredTitle from "../ui/typography/colored-title";
import Heading from "../ui/typography/Heading";
import MetricsInfo from "../ui/metrics-info";

const Metrics = () => {
  return (
    <section className="bg-[linear-gradient(180deg,_#E9E9E9_0%,_#BCC4DC_100%)] md:px-[50px] px-5 md:pt-[50px] pt-[35px] pb-[35px] md:pb-[52px]">
      <div className="md:flex justify-between flex-row ]">
        <div className="w-[256px] lg:w-[536px] flex flex-col gap-[10px] mb-[30px] lg:mb-0 ">
          <ColoredTitle title="CLIENT METRICS" />
          <Heading
            className="text-[30px] md:text-[64px] leading-[34px] md:leading-[78px] text-[rgba(18,40,71,1)]"
            heading="Empowering industry success"
          />
        </div>
        <div className="flex flex-col font-primary font-medium ">
          <div className="p-[1.51px] lg:w-[400px] w-[210px] bg-[linear-gradient(90.01deg,_#F67D30_0.01%,_#1E3A8A_55.63%,_rgba(225,227,231,0)_112.64%)] "></div>
          <div className="max-w-[308px] flex flex-col lg:gap-[10px] gap-[6px] pt-4   ">
            <h2 className="lg:text-[100px] text-[40px] lg:leading-[100px] leading-[48px]">
              $10M+
            </h2>
            <p className="text-[#F67D30] lg:text-lg text-base">
              In Transactions Supported
            </p>
          </div>
          <div className=" lg:flex lg:gap-[100px] ">
            <MetricsInfo
              content="Professionals Reached"
              metric="1000+"
              className="lg:text-[64px]  text-[40px] lg:leading-[64px] leading-[48px]"
            />
            <MetricsInfo
              content="Governance Solutions"
              metric="20+"
              className="lg:text-[64px]  text-[40px] lg:leading-[64px] leading-[48px]"
            />
          </div>
          <div className="lg:flex lg:gap-[100px]">
            <MetricsInfo
              content="Clients Served"
              metric="50+"
              className="lg:text-[64px]  text-[40px] lg:leading-[64px] leading-[48px]"
            />
            <MetricsInfo
              content="Markets"
              metric="10+"
              className="lg:text-[64px]  text-[40px] lg:leading-[64px] leading-[48px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
