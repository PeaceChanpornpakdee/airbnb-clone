import React from "react";

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, onToggle }) => {
  return (
    <div
      className={`w-12 h-8 flex items-center rounded-full p-1 cursor-pointer ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
      onClick={onToggle}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
          isOn ? "translate-x-4" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
