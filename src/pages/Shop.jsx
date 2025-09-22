import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

// --- Helper Components ---


const ShopHero = () => {
  return (
    <div className="relative h-48 sm:h-64 md:h-72 bg-gray-200">
      {/* Background Image */}
      <img
        src="src/assets/1461f3d6ff74c027a1888544144abe4be6e02cbf.jpg"
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

// FilterBar Component: Controls for filtering and sorting products
const FilterBar = () => {
    return (
        <div className="bg-[#F9F1E7] py-6 px-4 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m0-10v2m0 6v2m-6-10h2m10 0h2M6 12H4m16 0h-2m-2 6h2m-14 0h2m-2-6h2m10 0h2" />
                        </svg>
                        <span className="font-medium">Filter</span>
                    </div>
                    <div className="flex items-center space-x-2">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                           <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                         </svg>
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                    </div>
                     <div className="hidden md:block border-l border-gray-400 h-6 mx-4"></div>
                    <p className="text-gray-600">Showing 1–16 of 32 results</p>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="show" className="font-medium">Show</label>
                        <input type="text" id="show" defaultValue="16" className="w-12 p-2 text-center bg-white rounded-md shadow-sm" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="sort" className="font-medium">Short by</label>
                        <select id="sort" className="p-2 bg-white rounded-md shadow-sm appearance-none pr-8">
                            <option>Default</option>
                            <option>Price</option>
                            <option>Name</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Pagination Component
const Pagination = () => {
    return (
        <div className="flex justify-center items-center mt-12 space-x-2">
            <button className="px-5 py-3 bg-[#B88E2F] text-white rounded-md font-medium">1</button>
            <button className="px-5 py-3 bg-[#F9F1E7] text-gray-700 rounded-md font-medium hover:bg-[#B88E2F] hover:text-white transition-colors">2</button>
            <button className="px-5 py-3 bg-[#F9F1E7] text-gray-700 rounded-md font-medium hover:bg-[#B88E2F] hover:text-white transition-colors">3</button>
            <button className="px-5 py-3 bg-[#F9F1E7] text-gray-700 rounded-md font-medium hover:bg-[#B88E2F] hover:text-white transition-colors">Next</button>
        </div>
    );
};


// --- Main ShopPage Component ---
const ShopPage = () => {
    // Mock product data - replace with your actual data
    const products = [
        {
            id: 1,
            name: 'Syltherine',
            category: 'Stylish cafe chair',
            price: '2.500.000',
            oldPrice: '3.500.000',
            imageUrl: 'https://placehold.co/400x400/f5f5f5/333333?text=Chair',
            tag: { type: 'discount', value: 30 },
        },
        {
            id: 2,
            name: 'Leviosa',
            category: 'Stylish cafe chair',
            price: '2.500.000',
            imageUrl: 'https://placehold.co/400x400/ffffff/333333?text=Chair',
            tag: {},
        },
        {
            id: 3,
            name: 'Lolito',
            category: 'Luxury big sofa',
            price: '7.000.000',
            oldPrice: '14.000.000',
            imageUrl: 'https://placehold.co/400x400/f5f5f5/333333?text=Sofa',
            tag: { type: 'discount', value: 50 },
        },
        {
            id: 4,
            name: 'Respira',
            category: 'Outdoor bar table and stool',
            price: '500.000',
            imageUrl: 'https://placehold.co/400x400/f5f5f5/333333?text=Stool',
            tag: { type: 'new', value: null },
        },
         {
            id: 5,
            name: 'Syltherine',
            category: 'Stylish cafe chair',
            price: '2.500.000',
            oldPrice: '3.500.000',
            imageUrl: 'https://placehold.co/400x400/f5f5f5/333333?text=Chair',
            tag: { type: 'discount', value: 30 },
        },
        {
            id: 6,
            name: 'Leviosa',
            category: 'Stylish cafe chair',
            price: '2.500.000',
            imageUrl: 'https://placehold.co/400x400/ffffff/333333?text=Chair',
            tag: {},
        },
        {
            id: 7,
            name: 'Lolito',
            category: 'Luxury big sofa',
            price: '7.000.000',
            oldPrice: '14.000.000',
            imageUrl: 'https://placehold.co/400x400/f5f5f5/333333?text=Sofa',
            tag: { type: 'discount', value: 50 },
        },
        {
            id: 8,
            name: 'Respira',
            category: 'Outdoor bar table and stool',
            price: '500.000',
            imageUrl: 'https://placehold.co/400x400/f5f5f5/333333?text=Stool',
            tag: { type: 'new', value: null },
        },
    ];

    return (
        <div className="bg-white">
            <ShopHero />
            <FilterBar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <Pagination />
            </main>
        </div>
    );
};

export default ShopPage;
