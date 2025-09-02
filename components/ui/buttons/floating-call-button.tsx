"use client";

import { PhoneCall } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"; // adjust path

export default function FloatingCallButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href="https://forms.gle/WCN4tKnrT39WTQY27"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#F67D30] cursor-pointer
          md:w-15 md:h-15 w-12 h-12 rounded-full shadow-lg flex items-center
          justify-center"
        >
          <PhoneCall className="md:w-6 md:h-6 w-5 h-5 text-white" />
        </a>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        sideOffset={6}
        align="end"
        alignOffset={20}
        className="bg-[#122847] text-white px-3 py-4 rounded-md shadow-md animate-in fade-in zoom-in-95 slide-in-from-right-2"
      >
        Book a discovery call
      </TooltipContent>
    </Tooltip>
  );
}
