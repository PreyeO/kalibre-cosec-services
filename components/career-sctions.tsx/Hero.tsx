import Image from "next/image";
import React from "react";
import ColoredTitle from "../ui/typography/colored-title";
import BodyContent from "../ui/typography/BodyContent";
import HeroButton from "../ui/buttons/HeroButton";
import Heading from "../ui/typography/Heading";

const Hero = () => {
  return (
    <section className="pt-[50px] md:px-[50px] px-[20px]">
      <div className="flex lg:flex-nowrap flex-wrap items-center gap-[30px] lg:gap-10 justify-center lg:justify-between">
        {/* Left Content */}
        <div className="flex flex-col gap-[16px] justify-center text-center md:text-left max-w-[636px]">
          <div className="flex flex-col gap-[10px]">
            <ColoredTitle title="Careers at Kalibre CoSec" />
            <div className="text-[26px] leading-8 md:text-[66px] md:leading-[80px] flex flex-col gap-[6px]">
              <Heading heading="Join Us" className="text-[#F67D30]" />
              <Heading
                heading="And make an impact"
                className="text-[#122847]"
              />
            </div>
          </div>
          <BodyContent className="max-w-[457px] mx-auto md:mx-0">
            At Kalibre CoSec, we empower ambitious professionals to thrive in a
            dynamic, fast-growing company. We foster a culture of innovation,
            continuous learning and meaningful impact, offering opportunities to
            work with top-tier clients across Africa and globally.
          </BodyContent>
          <div className="w-[160px] justify-center mx-auto md:mx-0">
            <HeroButton label="Work with us" />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 w-full lg:w-[400px] xl:w-[632px]">
          <Image
            src="/career-image.jpg"
            alt="image of staff"
            width={632}
            height={400}
            className="w-full h-auto max-h-[400px] object-cover rounded-[30px]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
