"use client";

import { Button } from "../button";
import { ArrowDown } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";

const HeroButton = () => {
  const controls = useAnimation();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleMouseEnter = () => {
    controls.start({
      y: [0, 6, -4, 0],
      transition: {
        duration: 0.9,
        ease: "easeInOut",
        delay: 0.1,
      },
    });
  };

  return (
    <Button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      className="md:mt-[6px] mt-0 bg-[#F67D30] hover:bg-[#F67D30] text-white py-6 px-6 cursor-pointer rounded-[30px] font-medium font-primary text-sm flex items-center gap-[10px] group"
    >
      Learn More
      <span className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center overflow-hidden">
        <motion.span animate={controls}>
          <ArrowDown size={20} color="#3A3A3A" />
        </motion.span>
      </span>
    </Button>
  );
};

export default HeroButton;
