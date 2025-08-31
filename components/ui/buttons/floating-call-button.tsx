"use client";

import { PhoneCall } from "lucide-react";
import Link from "next/link";

export default function FloatingCallButton() {
  return (
    <Link
      href="tel:+2348028890404"
      className="fixed bottom-6 right-6 z-50 bg-[#F67D30] cursor-pointer md:w-15 md:h-15 w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
    >
      <PhoneCall className="w-6 h-6 text-white " />
    </Link>
  );
}
