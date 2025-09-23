import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-8 px-4 sm:px-6 lg:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Column 1: Brand and Address */}
          <div className="md:col-span-4">
            <h2 className="text-2xl text-left font-bold text-gray-800 mb-4">Furniro.</h2>
            <p className="text-gray-500 text-left">
              400 University Drive Suite 200 Coral 
              <br />
              Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="md:col-span-2">
            <h3 className="text-gray-400 text-left font-medium mb-6">Links</h3>
            <ul className="text-left space-y-4">
              <li><a href="#" className="text-gray-800 font-medium hover:underline">Home</a></li>
              <li><a href="#" className="text-gray-800 font-medium hover:underline">Shop</a></li>
              <li><a href="#" className="text-gray-800 font-medium hover:underline">About</a></li>
              <li><a href="#" className="text-gray-800 font-medium hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Help */}
          <div className="md:col-span-3">
            <h3 className="text-gray-400 text-left font-medium mb-6">Help</h3>
            <ul className="text-left space-y-4">
              <li><a href="#" className="text-gray-800 font-medium hover:underline">Payment Options</a></li>
              <li><a href="#" className="text-gray-800 font-medium hover:underline">Returns</a></li>
              <li><a href="#" className="text-gray-800 font-medium hover:underline">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="md:col-span-3">
            <h3 className="text-gray-400 text-left font-medium mb-6">Newsletter</h3>
            <form className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
              <input 
                type="email" 
                placeholder="Enter Your Email Address" 
                className="w-full sm:w-auto flex-grow bg-transparent border-b border-gray-800 py-1 focus:outline-none placeholder-gray-500"
              />
              <button 
                type="submit" 
                className="bg-transparent text-gray-800 font-medium border-b border-gray-800 py-1 uppercase tracking-wider hover:text-black"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-16 pt-8 border-t text-left border-gray-200">
          <p className="text-gray-800">2025 furniro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
