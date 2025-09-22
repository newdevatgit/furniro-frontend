import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ShopHero from "../components/ShopHero";
import FilterBar from "../components/FilterBar";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [filters, setFilters] = useState({ brand: "", category: "", minPrice: "", maxPrice: "", page: 1, limit: 8 });
  const [sort, setSort] = useState({ sortBy: "", sortOrder: "" });

  const fetchProducts = async () => {
    let query = `?page=${filters.page}&limit=${filters.limit}`;

    if (filters.brand) query += `&brand=${filters.brand}`;
    if (filters.category) query += `&category=${filters.category}`;
    if (filters.minPrice) query += `&minPrice=${filters.minPrice}`;
    if (filters.maxPrice) query += `&maxPrice=${filters.maxPrice}`;
    if (sort.sortBy) query += `&sortBy=${sort.sortBy}&sortOrder=${sort.sortOrder}`;

    const res = await fetch(`https://furniro-backend-sx92.onrender.com/api/products${query}`);
    const data = await res.json();
    setProducts(data.products);
    setTotal(data.total);
  };

  useEffect(() => {
    fetchProducts();
  }, [filters, sort, page]);

  const totalPages = Math.ceil(total / (filters.limit || 8));

  return (
    <div className="bg-white">
      <ShopHero />
      <FilterBar filters={{ ...filters, total }} setFilters={setFilters} sort={sort} setSort={setSort} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 space-x-2">
          <button
            onClick={() => {
              const newPage = Math.max(page - 1, 1);
              setPage(newPage);
              setFilters({ ...filters, page: newPage });
            }}
            disabled={page === 1}
            className="px-5 py-3 bg-[#F9F1E7] text-gray-700 rounded-md font-medium disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const newPage = i + 1;
                setPage(newPage);
                setFilters({ ...filters, page: newPage });
              }}
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
            onClick={() => {
              const newPage = Math.min(page + 1, totalPages);
              setPage(newPage);
              setFilters({ ...filters, page: newPage });
            }}
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
