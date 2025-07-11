import React from "react";

interface BodyContentProps {
  children: React.ReactNode;
  className: string;
}

const BodyContent: React.FC<BodyContentProps> = ({ children, className }) => {
  return <p className={`${className} font-primary font-normal`}>{children}</p>;
};

export default BodyContent;
