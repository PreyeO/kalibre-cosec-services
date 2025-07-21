import Image from "next/image";
import React from "react";
import ColoredTitle from "../ui/typography/colored-title";
import BodyContent from "../ui/typography/BodyContent";
import HeroButton from "../ui/buttons/HeroButton";
import Heading from "../ui/typography/Heading";

const Hero = () => {
  return (
    <section className="mt-[133px] px-[50px] ">
      <div className="flex justify-evenly">
        <div className="flex flex-col gap-[16px]">
          <div className="flex-col gap-[10px]">
            <ColoredTitle title="careers at Kalibre CoSec" />
            <div className="text-[66px] leading-[80px] flex flex-col gap-[6px]">
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
          <div className="w-[160px]">
            <HeroButton label="Work with us" />
          </div>
        </div>

        <Image
          src="/career-image.jpg"
          alt="image of staff"
          width={632}
          height={400}
          className="max-w-[632px] max-h-[400px] object-cover rounded-[30px]"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
