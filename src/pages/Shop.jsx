import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ShopHero from "../components/ShopHero";
import FilterBar from "../components/FilterBar";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 8;

  useEffect(() => {
    fetch(`http://localhost:5000/api/products?page=${page}&limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setTotal(data.total);
      })
      .catch(err => console.error("Error fetching products:", err));
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="bg-white">
      <ShopHero />
      <FilterBar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 space-x-2">
          <button
            onClick={() => setPage(p => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-5 py-3 bg-[#F9F1E7] text-gray-700 rounded-md font-medium disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-5 py-3 rounded-md font-medium ${
                page === i + 1
                  ? "bg-[#B88E2F] text-white"
                  : "bg-[#F9F1E7] text-gray-700 hover:bg-[#B88E2F] hover:text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage(p => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-5 py-3 bg-[#F9F1E7] text-gray-700 rounded-md font-medium disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default ShopPage;
