// useBounceAnimation.ts
"use client";

import { useAnimation } from "framer-motion";

export function useBounceAnimation() {
  const controls = useAnimation();

  const triggerBounce = () => {
    controls.start({
      y: [0, 6, -4, 0],
      transition: {
        duration: 0.9,
        ease: "easeInOut",
        delay: 0.1,
      },
    });
  };

  return { controls, triggerBounce };
}

export function useHorizontalBounceAnimation() {
  const controls = useAnimation();

  const triggerBounce = () => {
    controls.start({
      x: [0, 6, -4, 0], // moves horizontally
      transition: {
        duration: 0.9,
        ease: "easeInOut",
        delay: 0.1,
      },
    });
  };

  return { controls, triggerBounce };
}
