import { sectors } from "@/data";
import Image from "next/image";
import React from "react";

interface SectorsProps {
  title: string;
}

const Sectors: React.FC<SectorsProps> = ({ title }) => {
  return (
    <div className=" flex flex-col justify-center items-center gap-[50px] relative  mt-[-74px] pt-10 overflow-hidden">
      <h3 className="font-semibo ld font-primary text-[32px] text-[#F67D30]">
        {title}
      </h3>
      <div className="flex gap-[54px] ">
        {sectors.map((sector, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={sector.src}
              alt={sector.name}
              width={50}
              height={50}
              className="object-cover"
              priority
            />
            <h5>{sector.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sectors;
