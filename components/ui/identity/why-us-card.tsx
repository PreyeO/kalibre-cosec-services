import React from "react";

interface WhyUsCardProps {
  title: string;
  content: string;
  className: string;
  icon: React.ReactNode;
}

const WhyUsCard: React.FC<WhyUsCardProps> = ({
  title,
  content,
  icon,
  className,
}) => {
  return (
    <div
      className={` ${className} xl:max-w-[400px] max-w-[350px] h-[233px] bg-white border border-[#BCC4DC] rounded-[16px] lg:px-[30px] px-3 flex flex-col lg:items-center  py-[20px]  ms-[border-image-source:linear-gradient(180.01deg,_#F67D30_26.49%,_#1E3A8A_117.49%)] [border-image-slice:1]   [border-image-repeat:round]`}
    >
      {/* Icon */}
      <div className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]  bg-[#A8A9AD]/10 flex flex-col justify-center items-center rounded-[16px]">
        {icon}
      </div>

      {/* Title and Content */}
      <div className=" max-w-[309px] flex flex-col gap-[10px] justify-center  font-primary">
        <h3 className="lg:text-[22px] text-lg font-semibold text-[#3A3A3A]">
          {title}
        </h3>
        <p className="text-base font-normal text-[#737373] leading-6">
          {content}
        </p>
      </div>
    </div>
  );
};

export default WhyUsCard;
