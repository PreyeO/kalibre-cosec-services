"use client";

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { motion } from "framer-motion";
import { useHorizontalBounceAnimation } from "@/hooks/useBounceAnimation";

const DiscoveryButton = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { controls, triggerBounce } = useHorizontalBounceAnimation();

  return (
    <a
      href="https://forms.gle/WCN4tKnrT39WTQY27"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        ref={buttonRef}
        onMouseEnter={triggerBounce}
        className="text-sm font-medium flex items-center justify-center gap-[10px] bg-[#F67D30]  hover:bg-[#F67D30]/90 px-[5px] h-10 py-4 cursor-pointer rounded-[30px]"
      >
        <span className="pl-[15px]">Book a Discovery Call</span>
        <span className="w-[30px] h-[30px] bg-white rounded-full mx-auto flex items-center justify-center overflow-hidden">
          <motion.span animate={controls}>
            <ArrowRight size={20} color="#3A3A3A" />
          </motion.span>
        </span>
      </Button>
    </a>
  );
};

export default DiscoveryButton;
