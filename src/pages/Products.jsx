import React, { useEffect, useState } from "react";
import { getData } from "../Context/DataContext";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Lottie from "lottie-react";
import plantloader from "../assets/plantloader.json"
import MobileFilterDrawer from "../components/MobileFilterDrawer";
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
  const pageHandler = (selectedPage) => {
    setPage(selectedPage)
    window.scrollTo(0, 0)
  }
  const dynamicPage = Math.ceil(filteredData?.length / 8)
  useEffect(() => {
    fetchAllData();
    window.scrollTo(0,0)
  }, []);



  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
  <MobileFilterDrawer filters={filters} updateFilter={updateFilter} />
        {allProducts.length > 0 ? (
          <div className="flex gap-8">
            <FilterSection filters={filters} updateFilter={updateFilter} />
            <div className="flex flex-col items-center justify-between mt-10 w-full">
              {/* Product Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-7 bg-amber-100">
                {filteredData?.slice(page * 8 - 8, page * 8).map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>

              {/* Pagination */}
              <Pagination
                pageHandler={pageHandler}
                page={page}
                dynamicPage={dynamicPage}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center md:h-[600px] md:w-[900px] mt-10">
            <p className="text-gray-500 text-xl">Loading</p>
            <Lottie animationData={plantloader} classID=" flex justify-center items-center w-[300px] h-[300px] m-1" autoPlay loop muted playsInline />          
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
