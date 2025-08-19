import Image from "next/image";
import React from "react";
import ColoredTitle from "../ui/typography/colored-title";
import BodyContent from "../ui/typography/BodyContent";
import HeroButton from "../ui/buttons/HeroButton";
import Heading from "../ui/typography/Heading";

const Hero = () => {
  return (
    <section className="md:mt-[133px] mt-[100px] md:px-[50px] px-[20px] ">
      <div className="flex lg:flex-nowrap flex-wrap items-center gap-[30px] lg:gap-0 justify-center lg:justify-between ">
        <div className="flex flex-col gap-[16px] justify-center text-center md:text-left">
          <div className="flex-col gap-[10px] w-[346px] md:w-[636px]">
            <ColoredTitle title="careers at Kalibre CoSec" />
            <div className="text-[26px] leading-8 md:text-[66px] md:leading-[80px] flex flex-col gap-[6px]">
              <Heading heading="Contribute" className="text-[#F67D30]" />
              <Heading
                heading="And make an impact"
                className=" text-[#122847]"
              />
            </div>
          </div>
          <BodyContent className="max-w-[457px]">
            Join the company that is leading the way forward in corporate
            governance and compliance advisory
          </BodyContent>
          <div className="w-[160px] justify-center mx-auto md:mx-0">
            <HeroButton label="Work with us" />
          </div>
        </div>

        <Image
          src="/career-image.jpg"
          alt="image of staff"
          width={632}
          height={400}
          className="w-full max-h-[400px] object-cover rounded-[30px]"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
