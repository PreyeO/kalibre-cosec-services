import React from "react";
import ColoredTitle from "../../ui/typography/colored-title";
import Heading from "../../ui/typography/Heading";
import Values from "../../landing-sections/our-values/values";
import { perks } from "@/data";

// bg-[linear-gradient(180deg,_#BFC6DD_0%,_#FFFFFF_69.09%)]
const Perks = () => {
  return (
    <section className=" pt-[100px] pb-[50px]">
      <div className=" mx-[50px]">
        <div className=" bg-white/30 flex justify-evenly px-[50px] py-[50px] rounded-[40px] ">
          <div className=" flex-col gap-[10px] ">
            <ColoredTitle title="perks" />

            <Heading
              heading="Why  work at kalibre cosec?"
              className="leading-[68px] text-[#122847] text-[72px]"
            />
          </div>
          <div className="flex flex-col max-w-[621px]">
            {perks.map((item, index) => (
              <Values
                key={index}
                digit={item.digit}
                value={item.value}
                details={item.details}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perks;
