import React from "react";

const Overflow: React.FC = () => {
  return (
    <div className="w-full bg-black h-10 flex">
      <div className="bg-green-500 w-full h-6 shrink overflow-x-auto">
        <div className="bg-red-500 w-[1000px] h-4"></div>
      </div>
      <div className="bg-blue-500 w-[100px] h-6 shrink-0"></div>
    </div>
  );
};

export default Overflow;
