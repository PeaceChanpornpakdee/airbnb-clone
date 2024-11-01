import React from "react";

const Overflow: React.FC = () => {
  return (
    <div className="w-full bg-black h-10 overflow-x-auto">
      <div className="bg-red-500 w-[1000px] h-6"></div>
    </div>
  );
};

export default Overflow;
