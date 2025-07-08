import React from "react";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

const DiscoveryButton = () => {
  return (
    <Button className="text-sm font-medium flex items-center justify-center gap-[10px] bg-[#F67D30] px-[5px] h-10 py-4 cursor-pointer rounded-[30px]">
      <span className="pl-[15px]">Book a Discovery Call</span>
      <span className="w-[30px] h-[30px] bg-white rounded-full mx-auto flex items-center justify-center">
        <ArrowRight size={20} color="#3A3A3A" />
      </span>
    </Button>
  );
};

export default DiscoveryButton;
