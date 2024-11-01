import React from "react";
import { ReactComponent as Icon } from "../assets/images/icons/ChevronRightIcon.svg";

interface ChevronButtonProps {
  onClick: () => void;
}

const ChevronButton: React.FC<ChevronButtonProps> = ({ onClick }) => {
  return (
    <div className="flex items-center justify-end w-16 h-16 bg-gradient-to-r from-transparent to-black">
      <button
        onClick={onClick}
        className="px-2.5 py-2.5 text-white rounded-full border border-neutral-300 transition-shadow duration-200 hover:shadow-lg"
      >
        <Icon className="w-3 h-3" />
      </button>
    </div>
  );
};

export default ChevronButton;
