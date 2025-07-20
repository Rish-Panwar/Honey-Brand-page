import React from "react";
import { IoCartOutline } from "react-icons/io5";

const ProductCard = ({product}) => {
  return (
    <div className="border border-gray-100 relative rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-4 h-max">
        <img src={product.image} alt={product.title} className="bg-gray-100 aspect-square" />
        <h1 className="line-clamp-2 font-semibold p-1">{product.title}</h1>
        <p className="my-1 text-lg text-gray-800 font-bold">{product.price}</p>
        <button className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400 px-3 py-2 text-lg rounded-full text-white w-full cursor-pointer flex gap-2 items-center justify-center  font-semibold">
            <IoCartOutline className="w-6 h-6"/> Add to Cart
        </button>
    </div>
  );
};

export default ProductCard;
