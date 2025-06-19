import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src="/logo.svg"
        alt="Logo Image"
        width={101.13}
        height={32}
        className="w-full object-cover "
        priority
      />
    </div>
  );
};

export default Logo;
