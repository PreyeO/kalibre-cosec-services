import React from "react";
import ColoredTitle from "../ui/typography/colored-title";
import Heading from "../ui/typography/Heading";
import { clientTestimonials } from "@/data";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  return (
    <section className="bg-white md:px-[50px] px-5 md:pt-[50px] pt-[35px] pb-[35px] md:pb-[52px]">
      <div className="w-[256px] lg:w-[536px] flex flex-col gap-[10px] mb-[30px] lg:mb-0 ">
        <ColoredTitle title="REAL STORIES, REAL RESULTS" />
        <Heading
          className="text-[30px] md:text-[64px] leading-[34px] md:leading-[78px] text-[rgba(18,40,71,1)]"
          heading="What clients & partners say"
        />
      </div>
      <Marquee
        className="flex mt-[55px]"
        pauseOnClick={true}
        pauseOnHover={true}
        gradientColor="#FFFFFF"
        gradient
      >
        {clientTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className=" mr-[25px]  flex flex-col gap-[16px] font-primary max-w-[452px] h-[280px] border border-[#A8A9AD]/30 rounded-[15px] px-[25px] pt-5"
          >
            <div className="flex w-[291px] gap-[10px] items-center ">
              <Avatar className="w-[52px] h-[52px]">
                <AvatarImage src={testimonial.src} />
                <AvatarFallback>{testimonial.alt}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-[6px]">
                <h3 className="text-base font-bold">{testimonial.name}</h3>
                <p className="text-sm italic font-medium font-secondary text-[#737373]">
                  {testimonial.position}
                </p>
              </div>
            </div>
            <p className="font-normal leading-6 text-base tet-[#3A3A3A]">
              {testimonial.review}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonials;
