import React from "react";

interface ServicePhilosophyProps {
  philosophy: string;
}

const ServicePhilosophy: React.FC<ServicePhilosophyProps> = ({
  philosophy,
}) => {
  return (
    <p className="text-[#3A3A3A] max-w-[708px] font-primary text-base leading-[26px] font-medium  text-center">
      {philosophy}
    </p>
  );
};

export default ServicePhilosophy;
