"use client";

import { PhoneCall } from "lucide-react";
import Link from "next/link";

export default function FloatingCallButton() {
  return (
    <Link
      href="tel:+2348028890404"
      className="fixed bottom-6 right-6 z-50 bg-[#F67D30] cursor-pointer w-15 h-15 rounded-full shadow-lg flex items-center justify-center"
    >
      <PhoneCall className="w-6 h-6 text-white " />
    </Link>
  );
}
