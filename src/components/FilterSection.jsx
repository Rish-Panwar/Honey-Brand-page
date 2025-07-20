import React from 'react'
import { getData } from '../Context/DataContext'

const FilterSection = ({ filters, updateFilter }) => {
  const { categoryData } = getData() || {}
  const { search, category, priceRange } = filters;
  console.log("Categories:", categoryData);

  return (
    <div className='bg-amber-100 mt-10 p-4  rounded-md h-max'>
      {/* Serach section */}
      <input type="text" placeholder='Search..' value={search} onChange={(e) => updateFilter('search', e.target.value)} className='bg-white rounded-md p-2 border-gray-400 border-2' />

      {/* category section */}
      <h1 className="mt-5 font-semibold text-xl">Category</h1>
      <div className="flex flex-col gap-2 mt-3">
        {categoryData?.map((item, index) => {
          return <div key={index} className='flex gap-2'>
            <input type="checkbox" name={item} checked={category === item} value={item} onChange={(e) => updateFilter('category', e.target.value)} />
            <button className="cursor pointer uppercase">{item}</button>
          </div>
        })
        }
      </div>

      {/* Price Range */}
      <h1 className="mt-5 mb-3 font-semibold text-xl">Price Range</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="">Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</label>
        <input type="range" min={0} max={5000} step={100} value={priceRange[1]} onChange={(e) => updateFilter('priceRange', [priceRange[0], parseInt(e.target.value)])} />
      </div>
      <button onClick={() =>
        updateFilter("reset", {
          search: "",
          category: "All",
          priceRange: [0, 5000],
        })
      } className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400 text-white rounded-full px-3 py-1 mt-5 cursor-pointer">Reset Filters</button>
    </div>
  )
}

export default FilterSection
