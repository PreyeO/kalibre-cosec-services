import HeroButton from "@/components/ui/buttons/HeroButton";
import HeroHeading from "@/components/ui/typography/HeroHeading";
import HeroSubHeading from "@/components/ui/typography/HeroSubHeading";
import ServiceImage from "@/components/ui/services/ServiceImage";
import React from "react";
import Link from "next/link";

interface ServiceHeroProps {
  alt: string;
  service: string;
  span: string;
  src: string;
  content: string;
  label: string;
  className: string;
}

const ServiceHeroSection: React.FC<ServiceHeroProps> = ({
  span,
  src,
  service,
  alt,
  content,
  label,
  className,
}) => {
  return (
    <section className="md:mt-[100px] pt-[70px]">
      <div
        className={`${className} flex flex-col gap-4 justify-center items-center mx-auto  `}
      >
        <HeroHeading span={span} service={service} />
        <HeroSubHeading content={content} />
        <Link href="#philosophy" className="z-10 ">
          <HeroButton label={label} />
        </Link>
        <ServiceImage src={src} alt={alt} />
      </div>
    </section>
  );
};

export default ServiceHeroSection;
