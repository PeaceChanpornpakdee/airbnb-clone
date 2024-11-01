import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { ReactComponent as FilterIcon } from "../assets/images/icons/FilterIcon.svg";

const Overflow: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="h-24 w-full bg-black flex items-center lg:px-10 xl:px-20">
      {/* Menu */}
      <div className="bg-white w-full h-6 shrink overflow-x-auto">
        <div className="bg-red-500 w-[1000px] h-4"></div>
      </div>
      {/* Filter */}
      <div className="border border-neutral-300 rounded-xl flex shrink-0 items-center px-4 py-4 gap-x-2 ml-4 h-min">
        <FilterIcon className="w-4 h-4" />
        <span className="text-xs text-zinc-500 text-center font-medium">
          Filters
        </span>
      </div>
      {/* Toggle */}
      <div className="border border-neutral-300 rounded-xl flex shrink-0 items-center px-4 py-2.5 gap-x-2 ml-4 h-min">
        <span className="text-xs text-zinc-500 text-center font-medium">
          Display total before taxes
        </span>
        <ToggleSwitch isOn={isOn} onToggle={handleToggle} />
      </div>
    </div>
  );
};

export default Overflow;
