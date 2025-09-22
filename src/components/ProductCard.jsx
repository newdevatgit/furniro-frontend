import React from "react";
const ProductCard = ({ product }) => {
  const { imageUrl, name, category, price, oldPrice, tag = {} } = product;

  const getTagStyles = () => {
    if (tag?.type === "discount") {
      return {
        label: `-${tag.value}%`,
        className: "bg-red-500 text-white",
      };
    }
    if (tag?.type === "new") {
      return {
        label: "New",
        className: "bg-green-500 text-white",
      };
    }
    return { label: "", className: "" };
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

      {/* Product Tag */}
      {label && (
        <div
          className={`absolute top-4 right-4 h-12 w-12 rounded-full flex items-center justify-center ${tagClassName} text-sm font-semibold`}
        >
          {label}
        </div>
      )}

      {/* Product Info */}
      <div className="p-4 bg-gray-100">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-500 mt-1">{category}</p>
        <div className="flex items-baseline mt-2">
          <p className="text-lg font-bold text-gray-900">Rp {price}</p>
          {oldPrice && (
            <p className="ml-3 text-sm text-gray-400 line-through">Rp {oldPrice}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;