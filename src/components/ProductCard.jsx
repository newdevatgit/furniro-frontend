import React from 'react';
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

export default ProductCard;