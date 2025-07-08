import React from "react";

interface HeadingProps {
  content: string;
  className: string;
}
const BodyContent: React.FC<HeadingProps> = ({ content, className }) => {
  return <p className={`${className} font-primary font-normal`}>{content}</p>;
};

export default BodyContent;
