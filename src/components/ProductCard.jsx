import React from 'react';

// --- Helper Icon Components for Hover State ---

const ShareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
  </svg>
);

const CompareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.213.723A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.723-1.213z" clipRule="evenodd" />
  </svg>
);

const LikeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);


// --- Main ProductCard Component ---

const ProductCard = ({ product }) => {
  const { imageUrl, name, category, price, oldPrice, tag = {} } = product;

  const getTagStyles = () => {
    if (tag?.type === "discount") {
      return {
        label: `${tag.value}`,
        className: "bg-red-400 text-white",
      };
    }
    if (tag?.type === "new") {
      return {
        label: "New",
        className: "bg-sky-400 text-white",
      };
    }
    return { label: "", className: "" };
  };

  const { label, className: tagClassName } = getTagStyles();

  return (
    <div className="group relative bg-gray-100">
      {/* Product Image */}
      <div className="aspect-w-4 aspect-h-5 w-full bg-gray-200 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-70 object-cover object-center"
        />
        {label && (
          <div
            className={`absolute top-4 right-4 h-12 w-12 rounded-full flex items-center justify-center ${tagClassName} text-sm font-semibold`}
          >
            {label}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-500 mt-1">{category}</p>
        <div className="flex items-baseline mt-2">
          <p className="text-lg font-bold text-gray-900">Rp {price}</p>
          {oldPrice && (
            <p className="ml-3 text-sm text-gray-400 line-through">Rp {oldPrice}</p>
          )}
        </div>
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
        <button className="bg-white text-[#B88E2F] font-semibold py-3 px-12 rounded">
          Add to cart
        </button>
        <div className="flex space-x-6 mt-6 text-white font-semibold text-sm">
          <a href="#" className="flex items-center space-x-2 hover:underline">
            <ShareIcon />
            <span>Share</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:underline">
            <CompareIcon />
            <span>Compare</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:underline">
            <LikeIcon />
            <span>Like</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
