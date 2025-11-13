"use client";

import Image from "next/image";
import { slides } from "@/data";

const HeroImage = () => {
  const slide = slides[0];

  return (
    <div className="w-screen overflow-hidden relative">
      <Image
        src={slide.src}
        alt={slide.alt}
        width={1440}
        height={500}
        className="hidden md:block w-full h-auto object-cover"
        priority
      />

      <Image
        src={slide.mobile}
        alt={slide.alt}
        width={390}
        height={135}
        className="md:hidden block w-full h-auto object-cover"
        priority
      />
    </div>
  );
};
export default HeroImage;
