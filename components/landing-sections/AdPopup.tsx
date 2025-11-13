"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import Heading from "../ui/typography/Heading";
import BodyContent from "../ui/typography/BodyContent";

const AdPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check when it was last closed
    const lastClosed = localStorage.getItem("adPopupClosedAt");
    const now = Date.now();

    // 3 minutes = 180000 ms
    const shouldShow = !lastClosed || now - parseInt(lastClosed, 10) > 180000;

    if (shouldShow) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 20000); // 20 seconds after refresh

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem("adPopupClosedAt", Date.now().toString());
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999] px-4 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="relative bg-white rounded-2xl p-5 sm:p-6 w-full max-w-xs sm:max-w-sm md:max-w-md text-center shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F67D30] rounded-full"
              aria-label="Close"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Heading */}
            <Heading
              heading="Explore More Insights"
              className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900"
            />

            {/* Body */}
            <BodyContent className="mb-4 text-sm sm:text-base text-gray-600 leading-relaxed px-2">
              Discover expert articles, resources, and updates on governance and
              compliance on our blog.
            </BodyContent>

            {/* CTA */}
            <Link
              href="http://www.bbinsights.online/"
              target="_blank"
              className="inline-block bg-[#F67D30] hover:bg-[#F67D30]/90 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-[#F67D30]/50"
            >
              Visit the Blog
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdPopup;
