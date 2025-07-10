import { sectors } from "@/data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

interface SectorsProps {
  title: string;
}

const Sectors: React.FC<SectorsProps> = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[50px] relative -mt-4 md:mt-[-34px] lg:mt-[-74px] pt-10 overflow-hidden">
      <h3 className="font-semibold font-primary text-lg md:text-[32px] text-[#F67D30]">
        {title}
      </h3>

      {/* Desktop View */}
      <div className="hidden md:block w-full">
        <Marquee pauseOnClick pauseOnHover speed={50}>
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="flex flex-col gap-[10px] items-center text-[#3A3A3A] font-primary font-medium mx-[27px]"
            >
              <Image
                src={sector.src}
                alt={sector.name}
                width={50}
                height={50}
                className="object-cover"
                priority
              />
              <h5 className="text-sm md:text-base">{sector.name}</h5>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Mobile View */}
      <div className="md:hidden block w-full -mt-6">
        <Marquee pauseOnClick pauseOnHover speed={40}>
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="flex gap-[6px] items-center text-[#3A3A3A] font-primary font-medium mx-2"
            >
              <Image
                src={sector.src}
                alt={sector.name}
                width={30}
                height={30}
                className="object-cover"
                priority
              />
              <h5 className="text-sm">{sector.name}</h5>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Sectors;
