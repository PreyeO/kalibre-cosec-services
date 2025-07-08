import React from "react";

interface MetricsInfoProps {
  className: string;
  metric: string;
  content: string;
}
const MetricsInfo: React.FC<MetricsInfoProps> = ({
  className,
  metric,
  content,
}) => {
  return (
    <div>
      <div className="p-[1px] bg-[linear-gradient(90.01deg,_#F67D30_0.01%,_#1E3A8A_55.63%,_rgba(225,227,231,0)_112.64%)] w-[200px] mt-[24.6px] lg:mt-[29.9px]"></div>
      <div className="max-w-[308px] flex flex-col lg:gap-[10px] gap-[6px] lg:pt-[31.1px] pt-[15.4px] ">
        <h2 className={`${className}`}>{metric}</h2>
        <p className="text-[#F67D30] lg:text-lg text-base">{content}</p>
      </div>
    </div>
  );
};

export default MetricsInfo;
