import React from "react";
import { values } from "@/data";
import Image from "next/image";
import Heading from "@/components/ui/typography/Heading";
import Underline from "@/components/ui/underline";
import Values from "./values";

const AboutValues = () => {
  return (
    <section className="bg-white md:px-[50px] px-[21px] pt-[35px] md:pt-0 pb-[35px] md:pb-[52px]  ">
      <div className=" lg:flex-nowrap md:gap-[50px] gap-6  items-center flex-wrap flex">
        <div className="flex flex-col md:gap-[50px] pb-6">
          <div>
            <Heading
              heading="Our Values"
              className="text-lg md:text-[27px] text-[#122847]"
            />
            <Underline />
          </div>
          <div>
            {values.map((item, index) => (
              <Values
                key={index}
                digit={item.digit}
                value={item.value}
                details={item.details}
              />
            ))}
          </div>
        </div>
        <div className="">
          <Image
            src="/values-image.jpg"
            alt="About us image"
            width={700}
            height={515}
            priority
            className="rounded-[30px] w-[700px]  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
