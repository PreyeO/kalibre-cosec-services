"use client";

import { Button } from "./button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useBounceAnimation } from "@/hooks/useBounceAnimation";

interface HeroButtonProps {
  label: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({ label }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { controls, triggerBounce } = useBounceAnimation();

  return (
    <Button
      ref={buttonRef}
      onMouseEnter={triggerBounce}
      className="z-10 md:mt-[6px] mt-0 bg-[#F67D30] hover:bg-[#F67D30]/90 text-white py-6 px-6 cursor-pointer rounded-[30px] font-medium font-primary text-sm flex items-center gap-[10px] group"
    >
      {label}
      <span className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center overflow-hidden">
        <motion.span animate={controls}>
          <ArrowDown size={20} color="#3A3A3A" />
        </motion.span>
      </span>
    </Button>
  );
};

export default HeroButton;
