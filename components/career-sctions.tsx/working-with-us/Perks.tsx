import React from "react";
import ColoredTitle from "../../ui/typography/colored-title";
import Heading from "../../ui/typography/Heading";
import Values from "../../landing-sections/our-values/values";
import { perks } from "@/data";

// bg-[linear-gradient(180deg,_#BFC6DD_0%,_#FFFFFF_69.09%)]
const Perks = () => {
  return (
    <section className="pt-[30px] md:pt-[100px] md:pb-[50px] ">
      <div className=" md:mx-[50px] mx-[20px]">
        <div className=" bg-white/30 flex md:justify-evenly justify-start md:px-[50px]  md:py-[50px] rounded-[40px] md:flex-nowrap flex-wrap ">
          <div className=" flex-col gap-[10px] md:max-w-[580px] max-w-[236px] ">
            <ColoredTitle title="perks" />

            <Heading
              heading="Why  work at kalibre cosec?"
              className="md:leading-[68px] text-[#122847] text-[32px] leading-[38px] md:text-[72px]"
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
