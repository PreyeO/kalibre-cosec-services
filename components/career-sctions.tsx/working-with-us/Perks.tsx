import React from "react";
import ColoredTitle from "../../ui/typography/colored-title";
import Heading from "../../ui/typography/Heading";
import Values from "../../landing-sections/our-values/values";
import { perks } from "@/data";

// bg-[linear-gradient(180deg,_#BFC6DD_0%,_#FFFFFF_69.09%)]
const Perks = () => {
  return (
    <section className="pt-[30px] md:pt-[100px] lg:pb-[50px] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#E1E4EE_40%,_#BCC4DC_70%,_#FFFFFF_100%)]">
      <div className=" md:mx-[50px] mx-[20px]">
        <div className="lg:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] bg-white/60 backdrop-blur-[10px] border border-white/30  flex gap-6 lg:gap-[40px] justify-start md:px-[50px]  md:py-[50px] rounded-[40px] md:flex-nowrap flex-wrap ">
          <div className=" flex-col gap-[10px] max-w-[580px] ">
            <ColoredTitle title="perks" />

            <Heading
              heading="Why work at kalibre Cosec?"
              className="lg:leading-[68px] text-[#122847] text-[32px] leading-[38px] lg:text-[72px]"
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
