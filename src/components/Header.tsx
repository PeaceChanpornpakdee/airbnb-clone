import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-red-500 text-2xl font-bold">Airbnb Clone</div>
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