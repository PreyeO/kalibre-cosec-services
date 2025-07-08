import Image from "next/image";
import React from "react";
import Heading from "../ui/typography/Heading";
import Underline from "../ui/underline";
import BodyContent from "../ui/typography/BodyContent";
import IdentityCard from "../ui/identity/identity-card";
const AboutUs = () => {
  return (
    <section className="lg:-translate-y-14 xl:-translate-y-18 -translate-y-6 md:-translate-y-10 pb-[35px] md:pb-[52px] md:px-[50px] px-[21px] bg-[linear-gradient(180deg,_#E9E9E9_0%,_#BCC4DC_100%)]">
      <Image
        src="/button.gif"
        alt="Button GIF"
        width={70}
        height={70}
        className="mx-auto pt-4 hidden md:block"
      />
      <Image
        src="/button.gif"
        alt="Button GIF"
        width={40}
        height={40}
        className="mx-auto pt-4 md:hidden "
      />

      <p className="leading-[120%] font-primary font-light md:text-sm text-[12px] text-[#737373] w-[181px] md:w-[307px]  pt-[21px] md:pt-[50px]">
        Your Trusted Partner in{" "}
        <span className="text-[#F67D30]">
          Corporate Governance & ESG Excellence
        </span>
      </p>
      <div className=" items-stretch flex mt-[30px] lg:mt-[100px] md:mt-[50px] justify-start lg:gap-[62px] gap-6 flex-col xl:flex-row ">
        <div className=" flex-grow w-full  rounded-[30px] border border-[#A8A9AD]/30 p-5">
          <Image
            src="/about-us.jpg"
            alt="About us image"
            width={514}
            height={514}
            priority
            className="rounded-[15px] w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 md:gap-[50px] flex-grow">
          <div className="xl:w-[704px] w-full  ">
            <Heading
              heading="Who We Are"
              className="text-lg md:text-[27px] text-[#122847]"
            />
            <Underline />
            <BodyContent
              className="md:text-base text-sm leading-[22px] md:leading-[30px] text-[#3A3A3A] pt-4"
              content="A privately-owned, strategic corporate services company helping businesses, investors and founders build governance-aligned, investment-ready and globally compliant organizations. From ESG and risk frameworks to board structuring, compliance systems and investor documentation, we equip companies with the tools to grow, govern and scale with confidence. Our expertise spans emerging and global markets, ensuring clients operate with transparency, resilience and regulatory foresight. Whether preparing for investment, managing multi-jurisdictional growth or elevating governance maturity, Kalibre delivers more than advice, we deliver embedded solutions that support long-term success."
            />
          </div>

          <div className="flex justify-start gap-[16px] md:gap-[32px]  items-center flex-wrap md:flex-nowrap ">
            <IdentityCard
              text="To empower businesses with strategic governance, ESG and compliance solutions that strengthen accountability, reduce risk and drive sustainable corporate performance across markets."
              title="Our Mission"
            />
            <IdentityCard
              title="Our Vision"
              text="To become the leading corporate services partner for growth-stage companies, investors and institutions across Africa and beyond, known for building governance-led, investment-ready and resilient organizations.
"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
