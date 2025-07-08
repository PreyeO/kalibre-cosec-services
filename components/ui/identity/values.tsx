import React from "react";

interface ValuesProps {
  digit: string;
  details: string;
  value: string;
}

const Values: React.FC<ValuesProps> = ({ digit, details, value }) => {
  return (
    <div className="flex flex-col gap-6 pt-6">
      <div className="flex items-start gap-4">
        <div className="flex items-center justify-center min-w-[40px] min-h-[40px] rounded-full border border-[#1E3A8A] text-sm font-medium shrink-0">
          {digit}
        </div>

        <div className="flex flex-col gap-2 text-[#3A3A3A] font-primary">
          <h4 className="font-medium md:text-2xl text-base">{value}</h4>
          <p className="font-normal text-sm leading-[22px]">{details}</p>
        </div>
      </div>

      <div className="w-full border-b border-[#D9D9D9] mb-6"></div>
    </div>
  );
};

export default Values;
