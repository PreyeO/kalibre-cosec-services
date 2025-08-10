import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="Logo Image"
        width={101.13}
        height={32}
        className="w-full object-cover "
        priority
      />
    </Link>
  );
};

export default Logo;
