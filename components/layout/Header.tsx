import { Mail, Phone } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="mt-[46px] md:mt-0 w-full bg-[#122847] flex md:justify-start justify-center  h-[30px] md:h-[41px] backdrop-blur-[15px] text-white px-5 md:px-[50px]">
      <div className="flex items-center gap-5 font-secondary font-medium text-[12px]">
        <div className="flex items-center gap-[3px]">
          <Phone size={18} />
          <p className="">+2348028890404</p>
        </div>
        <div className="border h-[17px] w-[1px]"></div>
        <div className="flex items-center gap-[3px]">
          <Mail size={18} />
          <p className="">+2348028890404</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
