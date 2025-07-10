import React from "react";
import ServiceHeading from "../typography/service-heading";

const Support = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[25px]">
      <div className="p-[1px] rounded-full bg-gradient-to-b from-[#F67D30] to-[#1E3A8A]">
        <div className="md:w-[116px] w-[85px] h-5 md:h-[42px] flex items-center justify-center rounded-full bg-white/55">
          <span className="bg-gradient-to-b from-[#F67D30] to-[#1E3A8A] bg-clip-text text-transparent font-semibold text-sm">
            SOLUTIONS
          </span>
        </div>
      </div>
      <ServiceHeading heading="SUPPORT YOU" span=" HOW WE CAN " />
    </div>
  );
};

export default Support;
