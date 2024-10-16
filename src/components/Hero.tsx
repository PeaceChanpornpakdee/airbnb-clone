import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-[500px] bg-[url('https://dummyimage.com/1500x500')]">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center h-full text-white">
      <h1 className="text-4xl lg:text-6xl font-bold mb-4">Find Your Perfect Stay</h1>
        <div className="bg-white rounded-full shadow-md p-4 flex items-center w-full max-w-md">
          <input 
            type="text" 
            placeholder="Where are you going?" 
            className="flex-grow px-4 py-2 text-gray-700 rounded-l-full outline-none"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded-full">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;