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
        bg-white border border-[#BCC4DC] rounded-[16px] 
        lg:px-[30px] px-3 flex flex-col py-[20px] 
        transition-colors duration-300 hover:border-[#F67D30]`}
    >
      {/* Icon wrapper */}
      <div
        className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] 
        rounded-[16px] border border-[#BCC4DC] 
        flex flex-col justify-center items-center 
        transition-colors duration-300
        group-hover:border-[#F67D30] group-hover:bg-[#F67D30]/20"
      >
        {/* Icon itself */}
        <div
          className="transition-colors duration-300 
          text-black/60 group-hover:text-white 
          fill-black/60 group-hover:fill-[#F67D30]"
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
