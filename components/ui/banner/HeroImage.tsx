"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { slides } from "@/data";
import { Button } from "../button";

export default function HeroImage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect(); // sync immediately

    return () => {
      api.off("select", onSelect); // now properly returning void
    };
  }, [api]);

  return (
    <div className="w-screen overflow-hidden relative md:mt-[52px] z-10 ">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
        opts={{ loop: true }}
        setApi={setApi}
      >
        <CarouselContent className="">
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1440}
                height={500}
                className="w-full h-auto object-cover"
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Dots */}
        <div className=" gap-2 z-10 justify-center items-center md:-translate-y-12 hidden">
          {slides.map((_, index) => (
            <Button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`md:w-2 md:h-2 h-1 w-1 rounded-full transition-all duration-300 ${
                selectedIndex === index ? "bg-[#F67D30]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
