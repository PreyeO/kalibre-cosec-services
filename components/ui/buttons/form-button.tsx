"use client";

import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";

const FormButton = () => {
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
      className=" z-10 md:mt-[6px] mt-0 text-[#F67D30] bg-transparent border border-[#F67D30] py-6 px-6 cursor-pointer rounded-[30px] font-medium font-primary text-sm flex items-center gap-[10px] group"
    >
      Submit now
      <span className="w-[30px] h-[30px]  bg-[#F67D30] rounded-full flex items-center justify-center overflow-hidden">
        <motion.span animate={controls}>
          <ArrowRight size={20} color="white" />
        </motion.span>
      </span>
    </Button>
  );
};

export default FormButton;
