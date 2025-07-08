"use client";

import { serviceSlides } from "@/data";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel";

const ServiceCarousel = () => {
  return (
    <div className="md:py-[50px] py-[30px]">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          dragFree: true,
          loop: false,
        }}
      >
        <div className="lg:flex gap-5 absolute -top-10 left-2/2 -translate-x-12 hidden ">
          <CarouselPrevious className="" />
          <CarouselNext />
        </div>
        <CarouselPrevious className="lg:hidden block absolute translate-x-8 z-10 bg-[#F67D30] text-white" />
        <CarouselNext className="lg:hidden block absolute -translate-x-8 z-10 bg-[#F67D30] text-white" />
        <CarouselContent className="lg:gap-[25px] ">
          {serviceSlides.map((service, index) => (
            <CarouselItem
              key={index}
              className="lg:basis-[280px] flex-shrink-0 flex flex-col gap-[10px]"
            >
              <Image
                src={service.src}
                alt={service.alt}
                width={430}
                height={330}
                className="rounded-[15px] object-cover"
                priority
              />
              <p className="text-[#FF7A2A] w-[250px] font-primary font-medium lg:text-base text-[15px] leading-6">
                {service.span}
                <span className="text-white">{service.title}</span>
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ServiceCarousel;
