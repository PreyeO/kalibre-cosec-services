import Image from "next/image";
import React from "react";

interface ServiceImageProps {
  src: string;
  alt: string;
}

const ServiceImage: React.FC<ServiceImageProps> = ({ src, alt }) => {
  return (
    <div className="w-screen overflow-hidden md:-mt-10   ">
      <Image
        src={src}
        alt={alt}
        width={1440}
        height={500}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  );
};

export default ServiceImage;
