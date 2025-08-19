"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";

export default function FloatingCallButton() {
  return (
    <Link href="tel:+2348028890404 " className="fixed bottom-6 right-6 z-50">
      <Button className="bg-[#F67D30] cursor-pointer w-15 h-15 text-white rounded-full shadow-lg flex items-center justify-center">
        <Phone className="w-6 h-6" />
      </Button>
    </Link>
  );
}
