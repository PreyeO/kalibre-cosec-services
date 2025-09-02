"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousels/carousel";
import { slides } from "@/data";
import { Button } from "../buttons/button";
import Link from "next/link";

export default function HeroImage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect(); // sync immediately

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="w-screen overflow-hidden relative">
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
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative">
              {/* Desktop image */}
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1440}
                height={500}
                className="hidden md:block w-full h-auto object-cover"
                priority={index === 0}
              />
              {/* Mobile image */}
              <Image
                src={slide.mobile}
                alt={slide.alt}
                width={390}
                height={135}
                className="md:hidden block w-full h-auto object-cover"
                priority={index === 0}
              />

              {/* Special case: second slide has button overlay */}
              {index === 1 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link
                    href="http://www.bbinsights.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className=" cursor-pointer bg-[#F67D30] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#d96120] transition">
                      Read More
                    </Button>
                  </Link>
                </div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Dots (hidden in your code, but keeping the structure) */}
        <div className="gap-2 z-10 justify-center items-center md:-translate-y-12 hidden">
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
