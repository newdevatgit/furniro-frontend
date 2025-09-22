import React from "react";

const ShopHero = () => {
  return (
    <div className="relative h-48 sm:h-64 md:h-72 bg-gray-200">
      {/* Background Image */}
      <img
        src="https://github.com/newdevatgit/furniro-frontend/blob/master/src/assets/1461f3d6ff74c027a1888544144abe4be6e02cbf.jpg?raw=true"
        alt="Modern living room with furniture"
        className="absolute inset-0 w-full h-full object-cover filter blur-ssm brightness-75"
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold">Shop</h1>
        <div className="flex items-center mt-2 text-sm md:text-base">
          <a href="#" className="font-semibold hover:underline">Home</a>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <span>Shop</span>
        </div>
      </div>
    </div>
  );
};

export default ShopHero;