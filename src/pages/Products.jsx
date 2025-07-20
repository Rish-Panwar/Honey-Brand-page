import React, { useEffect, useState } from "react";
import { getData } from "../Context/DataContext";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

const Products = () => {
  const { data, fetchAllData } = getData() || {};

  // Combine all product arrays into one
  const allProducts = [
    ...(data?.honeyProducts ?? []),
    ...(data?.foodProducts ?? []),
    ...(data?.shopProducts ?? []),
  ];

  // Filter functions
  const [filters, setFilters] = useState({
    search: "",
    category: "All",
    priceRange: [0, 5000]
  });
  const { search, category, priceRange } = filters;
  const updateFilter = (key, value) => {
      console.log("Updated:", key, value); // DEBUG
    setFilters(prev => ({ ...prev, [key]: value }));
  };
  const filteredData = allProducts?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    (filters.category === "All" || item.category?.toLowerCase() === category.toLowerCase()) &&
    item.price >= priceRange[0] && item.price <= priceRange[1]
  )
  // Pagination 
  const [page, setPage] = useState(1)
  const pageHandler = (selectedPage)=>{
    setPage(selectedPage)
  }
  useEffect(() => {
    fetchAllData();
  }, []);



  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {allProducts.length > 0 ? (
          <div className="flex gap-8">
            <FilterSection filters={filters} updateFilter={updateFilter} />
            <div className="grid grid-cols-4 gap-7 mt-10 bg-amber-100">
              {filteredData?.slice(page*8-8, page*8).map((product, index) => {
                return <ProductCard key={index} product={product} />
              })}
            </div>
            <Pagination pageHandler={pageHandler} page={page}/>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <video muted autoPlay loop>
              <source src="/assets/loading.webm" type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
