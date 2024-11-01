import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { ReactComponent as FilterIcon } from "../assets/images/icons/FilterIcon.svg";
import { ReactComponent as ChevronLeftIcon } from "../assets/images/icons/ChevronLeftIcon.svg";
import { ReactComponent as ChevronRightIcon } from "../assets/images/icons/ChevronRightIcon.svg";

const Menubar = () => {
  const [isOn, setIsOn] = useState(false);
  const [shift, setShift] = useState(0);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const handleLeftChevronClick = () => {
    if (shift > 0) {
      setShift((prev) => prev - 100); // Decrease shift to move items rightward
    }
  };

  const handleRightChevronClick = () => {
    if (shift < 400) {
      setShift((prev) => prev + 100); // Increase shift to move items leftward
    }
  };

  const menus = [
    {
      id: 1,
      image:
        "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
      title: "Rooms",
    },
    {
      id: 2,
      image:
        "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
      title: "Icons",
    },
    {
      id: 3,
      image:
        "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
      title: "Amazing Views",
    },
    {
      id: 4,
      image:
        "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
      title: "Beachfront",
    },
    {
      id: 5,
      image:
        "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
      title: "Lake",
    },
    {
      id: 6,
      image:
        "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
      title: "Countryside",
    },
    {
      id: 7,
      image:
        "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
      title: "Design",
    },
    {
      id: 8,
      image:
        "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
      title: "Castle",
    },
    {
      id: 9,
      image:
        "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
      title: "Rooms",
    },
    {
      id: 10,
      image:
        "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
      title: "Icons",
    },
    {
      id: 11,
      image:
        "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
      title: "Amazing Views",
    },
    {
      id: 12,
      image:
        "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
      title: "Beachfront",
    },
    {
      id: 13,
      image:
        "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
      title: "Lake",
    },
    {
      id: 14,
      image:
        "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
      title: "Countryside",
    },
    {
      id: 15,
      image:
        "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
      title: "Design",
    },
    {
      id: 16,
      image:
        "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
      title: "Castle",
    },
  ];

  return (
    <div className="h-24 w-full flex items-center px-6 lg:px-10 xl:px-20">
      {/* Menu */}
      <div className="relative w-full h-full flex shrink overflow-x-hidden">
        <div className="w-full h-full flex shrink overflow-x-auto">
          <div
            className="flex shrink-0 items-center"
            style={{
              marginLeft: `-${shift}px`,
              transition: "margin-left 0.3s ease",
            }}
          >
            {menus.map((menu) => (
              <div
                key={menu.id}
                className="flex flex-col shrink-0 items-center px-4 min-w-14"
              >
                <img
                  src={menu.image}
                  alt={menu.title}
                  className="w-6 h-6 mb-2"
                />
                <span className="text-xs text-zinc-500 text-center font-medium">
                  {menu.title}
                </span>
              </div>
            ))}
          </div>
          {/* Left Chevron Button */}
          {shift > 0 && (
            <div className="absolute left-0 flex items-center justify-start w-16 h-full bg-gradient-to-l from-transparent to-white">
              <button
                onClick={handleLeftChevronClick}
                className="px-2.5 py-2.5 text-white rounded-full border border-neutral-300 transition-shadow duration-200 hover:shadow-lg"
              >
                <ChevronLeftIcon className="w-3 h-3" />
              </button>
            </div>
          )}
          {/* Right Chevron Button */}
          {shift < 400 && (
            <div className="absolute right-0 flex items-center justify-end w-16 h-full bg-gradient-to-r from-transparent to-white">
              <button
                onClick={handleRightChevronClick}
                className="px-2.5 py-2.5 text-white rounded-full border border-neutral-300 transition-shadow duration-200 hover:shadow-lg"
              >
                <ChevronRightIcon className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Filter */}
      <div className="border border-neutral-300 rounded-xl flex shrink-0 items-center px-4 py-4 gap-x-2 ml-4">
        <FilterIcon className="w-4 h-4" />
        <span className="text-xs text-zinc-500 text-center font-medium">
          Filters
        </span>
      </div>

      {/* Toggle */}
      <div className="border border-neutral-300 rounded-xl flex shrink-0 items-center px-4 py-2.5 gap-x-2 ml-4">
        <span className="text-xs text-zinc-500 text-center font-medium">
          Display total before taxes
        </span>
        <ToggleSwitch isOn={isOn} onToggle={handleToggle} />
      </div>
    </div>
  );
};

export default Menubar;
