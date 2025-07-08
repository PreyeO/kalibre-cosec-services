import React from "react";

interface HeadingProps {
  heading: string;
  className: string;
}

const Heading: React.FC<HeadingProps> = ({ heading, className }) => {
  return <h2 className={`${className} font-primary font-medium`}>{heading}</h2>;
};

export default Heading;
