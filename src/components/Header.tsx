import React from "react";
import { ReactComponent as AirbnbLogoIcon } from "../assets/images/logos/AirbnbLogoIcon.svg";
import { ReactComponent as AirbnbLogoIconWithText } from "../assets/images/logos/AirbnbLogoIconWithText.svg";
import "../index.css";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="/">
          {/* Show the first logo on small screens */}
          <div className="block lg:hidden">
            <AirbnbLogoIcon className="airbnb-logo" />
          </div>
          {/* Show the second logo on larger screens */}
          <div className="hidden lg:block">
            <AirbnbLogoIconWithText className="airbnb-logo" />
          </div>
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li className="text-gray-700">Become a Host</li>
            <li className="text-gray-700">Help</li>
            <li className="text-gray-700">Sign In</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
