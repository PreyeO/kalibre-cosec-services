import React from "react";

interface WhyUsCardProps {
  title: string;
  content: string;
  className?: string;
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
      className={`group ${className} xl:max-w-[400px] max-w-[350px] h-auto 
        bg-white border md:border-[#BCC4DC] rounded-[16px] border-[#F67D30]
        lg:px-[30px] px-3 flex flex-col py-[20px] 
        transition-colors duration-300 hover:border-[#F67D30]`}
    >
      {/* Icon wrapper */}
      <div
        className="
    w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] 
    rounded-[16px] border-[0.1px]  
    flex justify-center items-center 
    transition-all duration-300 ease-in-out
    group-hover:border-[#F67D30] 
    group-hover:bg-[#F67D30]/20
    group-hover:scale-110
    group-hover:shadow-lg
  "
      >
        {/* Icon itself */}
        <div
          className="
      text-black group-hover:text-[#F67D30]
      fill-black group-hover:fill-[#F67D30]
      transition-all duration-300 ease-in-out
      group-hover:translate-y-[-2px]
    "
        >
          {icon}
        </div>
      </div>

      {/* Title and Content */}
      <div className="max-w-[309px] flex flex-col gap-[10px] justify-center font-primary mt-3">
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
