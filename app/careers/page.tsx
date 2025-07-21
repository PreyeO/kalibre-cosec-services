import ConnectWithUs from "@/components/career-sctions.tsx/ConnectWithUs";
import Hero from "@/components/career-sctions.tsx/Hero";
import Perks from "@/components/career-sctions.tsx/working-with-us/Perks";
import NewsLetter from "@/components/layout/NewsUpdates/NewsLetter";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Perks />
      <ConnectWithUs />
      <NewsLetter />
    </>
  );
};

export default page;
