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
} from "./carousel";
import Link from "next/link";

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
        <div className="md:flex gap-5 absolute -top-10 left-2/2 -translate-x-12 hidden">
          <CarouselPrevious className="cursor-pointer" />
          <CarouselNext className="cursor-pointer" />
        </div>
        <CarouselPrevious className="flex items-center justify-center cursor-pointer md:hidden absolute translate-x-9 z-10 bg-[#F67D30] text-white rounded-full w-8 h-8" />
        <CarouselNext className="cursor-pointer md:hidden flex items-center justify-center absolute -translate-y-1/2 -translate-x-9 z-10 rounded-full bg-[#F67D30] text-white w-8 h-8" />

        <CarouselContent className="md:gap-[25px]">
          {serviceSlides.map((service, index) => (
            <CarouselItem
              key={index}
              className="md:basis-[430px] flex-shrink-0 flex flex-col gap-[10px]"
            >
              {/* Image with hover overlay */}
              <div className="relative group rounded-[15px] overflow-hidden">
                <Image
                  src={service.src}
                  alt={service.alt}
                  width={430}
                  height={330}
                  className="rounded-[15px] object-cover md:h-[330px] h-[262px] w-auto transition-all duration-300 group-hover:blur-sm group-hover:scale-105"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center   p-4">
                  <p className="text-white text-sm mb-3">{service.summary}</p>
                  <Link
                    href={service.href}
                    className="text-[#FF7A2A] font-medium underline hover:text-white transition"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>

              {/* Title */}
              <Link href={service.href}>
                <p className="text-[#FF7A2A] hover:underline font-primary font-medium lg:text-base text-[15px] leading-6">
                  {service.span}
                  <span className="text-white no-underline">
                    {service.title}
                  </span>
                </p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ServiceCarousel;
