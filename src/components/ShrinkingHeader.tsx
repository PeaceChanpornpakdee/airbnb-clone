import React, { useEffect, useState } from "react";

const ShrinkingHeader: React.FC = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-300 ${
        shrink ? "h-12 bg-gray-800 text-white" : "h-20 bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        <h1 className="text-2xl font-bold">My div</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:underline">Home</li>
            <li className="hover:underline">About</li>
            <li className="hover:underline">Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ShrinkingHeader;
