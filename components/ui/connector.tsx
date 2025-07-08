import Image from "next/image";
import React from "react";

interface ConnectorProps {
  className: string;
  src: string;
}

const Connector: React.FC<ConnectorProps> = ({ className, src }) => {
  return (
    <Image
      src={src}
      alt="connector icon"
      width={24}
      height={60}
      priority
      className={` ${className} `}
    />
  );
};

export default Connector;
