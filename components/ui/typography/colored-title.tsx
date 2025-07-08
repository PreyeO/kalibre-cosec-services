import React from "react";

interface coloredTitleProps {
  title: string;
}

const ColoredTitle: React.FC<coloredTitleProps> = ({ title }) => {
  return (
    <p className=" text-sm font-secondary font-semibold bg-[linear-gradient(180.01deg,_#F67D30_26.49%,_#1E3A8A_117.49%)] text-transparent bg-clip-text">
      {title}
    </p>
  );
};

export default ColoredTitle;
