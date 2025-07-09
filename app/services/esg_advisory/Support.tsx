import ServiceHeading from "@/components/ui/services/service-heading";
import { solutions } from "@/data";
import { Search } from "lucide-react";
import React from "react";

const Support = () => {
  return (
    <section className="mt-8 pb-[45px]">
      <div className="flex flex-col justify-center items-center gap-[25px]">
        <div className="p-[1px] rounded-full bg-gradient-to-b from-[#F67D30] to-[#1E3A8A]">
          <div className="w-[116px] h-[42px] flex items-center justify-center rounded-full bg-white/55">
            <span className="bg-gradient-to-b from-[#F67D30] to-[#1E3A8A] bg-clip-text text-transparent font-semibold text-sm">
              SOLUTIONS
            </span>
          </div>
        </div>

        <ServiceHeading heading="SUPPORT YOU" span=" HOW WE CAN " />
      </div>
      <div className="font-primary  gap-[25px] flex flex-wrap justify-center items-center ">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="w-[430px] h-[403px] rounded-[20px] border border-[#BCC4DC]  pt-[25px] pb-[51px]"
          >
            <div className="w-[386px] flex flex-col justify-center items-center text-center mx-auto ">
              <div className="w-[50px] h-[50px] rounded-md bg-gray-300 flex items-center justify-center">
                <Search color="black" size={26} />
              </div>
              <h3 className="text-lg font-semiboldbg-[linear-gradient(180.01deg,#F67D30_26.49%,#1E3A8A_117.49%)] bg-clip-text text-transparent">
                {solution.title}
              </h3>
              <p className="font-normal text-[#737373] text-base leading-6">
                {solution.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Support;
