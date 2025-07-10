"use client";
import React, { useState, useEffect } from "react";
import ColoredTitle from "../ui/typography/colored-title";
import Heading from "../ui/typography/Heading";
import { clientTestimonials } from "@/data";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Marquee from "react-fast-marquee";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousels/carousel"; // adjust path

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect(); // run initially

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="bg-white md:px-[50px] px-5 md:pt-[50px] pt-[35px] pb-[35px] md:pb-[52px]">
      <div className="w-[256px] lg:w-[536px] flex flex-col gap-[10px] mb-[30px] lg:mb-0">
        <ColoredTitle title="REAL STORIES, REAL RESULTS" />
        <Heading
          className="text-[30px] md:text-[64px] leading-[34px] md:leading-[78px] text-[rgba(18,40,71,1)]"
          heading="What clients & partners say"
        />
      </div>

      {/* Mobile Carousel */}
      <div className="mt-[30px] md:hidden">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {clientTestimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col gap-[16px] font-primary w-[314px] h-[280px] border border-[#A8A9AD]/30 rounded-[15px] px-[25px] pt-5">
                  <div className="flex gap-[10px] items-center">
                    <Avatar className="w-[52px] h-[52px]">
                      <AvatarImage src={testimonial.src} />
                      <AvatarFallback>{testimonial.alt}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-[6px]">
                      <h3 className="text-base font-bold">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm italic font-medium font-secondary text-[#737373]">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                  <p className="font-normal leading-[22px] text-sm text-[#3A3A3A]">
                    {testimonial.review}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Slide Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {clientTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index ? "bg-[#F67D30]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Marquee */}
      <div className="hidden md:block mt-[55px]">
        <Marquee pauseOnClick pauseOnHover gradientColor="#FFFFFF" gradient>
          {clientTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="mr-[25px] flex flex-col gap-[16px] font-primary w-[452px] h-[280px] border border-[#A8A9AD]/30 rounded-[15px] px-[25px] pt-5"
            >
              <div className="flex gap-[10px] items-center">
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
              <p className="font-normal leading-[22px] text-sm text-[#3A3A3A]">
                {testimonial.review}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
