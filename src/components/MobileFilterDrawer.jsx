import React, { useState } from 'react';
import { getData } from '../Context/DataContext';
import { Funnel } from 'lucide-react';

const MobileFilterDrawer = ({ filters = {}, updateFilter }) => {
  const { categoryData, brandData } = getData() || {};
  const { category = '', priceRange = [0, 5000] } = filters || {};
  const [open, setOpen] = useState(false);

  const handleCategoryChange = (item) => {
    updateFilter('category', item);
  };

  return (
    <div className="block md:hidden">
      {/* Filter Trigger as Text */}
      <div
        className="flex items-center text-[#7B4019] font-semibold text-lg mb-3 cursor-pointer select-none w-full"
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
      >
        <span>Filter</span>
        <span className="flex-1" />
        <Funnel className="w-5 h-5 text-[#7B4019] ml-auto" />
      </div>
      {/* Drawer Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)} />
      )}
      {/* Drawer Panel */}
      <div
        className={`fixed top-2 right-0 h-[50%] w-64 rounded-xl bg-amber-100 z-50 shadow-2xl p-6 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ pointerEvents: open ? 'auto' : 'none', backdropFilter: 'none' }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-xl text-[#7B4019]">Filters</h2>
          <button onClick={() => setOpen(false)} className="text-2xl text-[#7B4019]">&times;</button>
        </div>
        {/* Category section */}
        <div className="mb-6">
          <h3 className="font-semibold text-base mb-2">Category</h3>
          <div className="flex flex-col gap-2">
            {categoryData?.map((item, index) => (
              <label key={index} className="flex gap-2 items-center cursor-pointer uppercase text-sm">
                <input
                  type="radio"
                  name="category"
                  checked={category === item}
                  value={item}
                  onChange={() => {
                    handleCategoryChange(item);
                    setOpen(false);
                  }}
                />
                {item}
              </label>
            ))}
          </div>
        </div>
        {/* Price Range section */}
        <div className="mb-6">
          <h3 className="font-semibold text-base mb-2">Price Range</h3>
          <label>Price Range: ₹0 - ₹{priceRange[1]}</label>
          <input
            type="range"
            min={0}
            max={5000}
            step={100}
            value={priceRange[1]}
            onChange={e => {
              updateFilter('priceRange', [0, Number(e.target.value)]);
            }}
            onMouseUp={() => setOpen(false)}
            onTouchEnd={() => setOpen(false)}
            className="w-full mt-2"
          />
        </div>
        <div className="flex justify-center mt-5">
          <button
            onClick={() => {
              // Directly reset all filters to default values
              if (typeof updateFilter === 'function') {
                updateFilter('category', 'All');
                updateFilter('priceRange', [0, 5000]);
              }
              setOpen(false);
            }}
            className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400 text-white rounded-full px-6 py-2 cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilterDrawer;
