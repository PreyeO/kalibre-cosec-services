import React from "react";
import HeroHeading from "../typography/HeroHeading";
import HeroSubHeading from "../typography/HeroSubHeading";
import HeroButton from "../buttons/HeroButton";
import ServiceImage from "./ServiceImage";

interface ServiceHeroProps {
  alt: string;
  service: string;
  span: string;
  src: string;
  content: string;
  label: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  span,
  src,
  service,
  alt,
  content,
  label,
}) => {
  return (
    <div className="max-w-[563px]  flex flex-col gap-4 justify-center items-center mx-auto  ">
      <HeroHeading span={span} service={service} />
      <HeroSubHeading content={content} />
      <HeroButton label={label} />
      <ServiceImage src={src} alt={alt} />
    </div>
  );
};

export default ServiceHero;
