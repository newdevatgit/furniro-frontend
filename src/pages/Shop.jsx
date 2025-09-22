import React, { useState } from 'react';

// --- Helper Components ---

// ProductCard Component: Renders a single product item
const ProductCard = ({ product }) => {
    const { imageUrl, name, category, price, oldPrice, tag } = product;

    const getTagStyles = () => {
        if (tag.type === 'discount') {
            return {
                label: `-${tag.value}%`,
                className: 'bg-red-500 text-white',
            };
        }
        if (tag.type === 'new') {
            return {
                label: 'New',
                className: 'bg-green-500 text-white',
            };
        }
        return { label: '', className: '' };
    };

    const { label, className: tagClassName } = getTagStyles();

    return (
        <div className="group relative bg-gray-100 rounded-lg overflow-hidden">
            {/* Product Image */}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                 <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Product Tag (New/Discount) */}
            {label && (
                <div className={`absolute top-4 right-4 h-12 w-12 rounded-full flex items-center justify-center ${tagClassName} text-sm font-semibold`}>
                    {label}
                </div>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-orange-600 font-semibold py-3 px-8 rounded-md mb-4 hover:bg-orange-600 hover:text-white transition-colors">
                    Add to cart
                </button>
                <div className="flex space-x-4 text-white font-medium">
                    <a href="#" className="flex items-center space-x-1 hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                        <span>Share</span>
                    </a>
                    <a href="#" className="flex items-center space-x-1 hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 110 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg>
                        <span>Compare</span>
                    </a>
                    <a href="#" className="flex items-center space-x-1 hover:underline">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span>Like</span>
                    </a>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-4 bg-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                <p className="text-gray-500 mt-1">{category}</p>
                <div className="flex items-baseline mt-2">
                    <p className="text-lg font-bold text-gray-900">Rp {price}</p>
                    {oldPrice && <p className="ml-3 text-sm text-gray-400 line-through">Rp {oldPrice}</p>}
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
