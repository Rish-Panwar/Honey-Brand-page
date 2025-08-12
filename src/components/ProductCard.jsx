import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { BaggageClaim } from "lucide-react";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-100 relative rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-4 h-max">
      <img
        src={product.image}
        alt={product.title}
        className="bg-gray-100 aspect-square"
        onClick={() => navigate(`/products/${product.id}`)}
      />
      <h1 className="line-clamp-2 font-semibold p-1">{product.title}</h1>
      <p className="my-1 text-lg text-gray-800 font-bold">₹{product.price}</p>
      <AnimatedSubscribeButton  onClick={() => addToCart(product)} className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400 text-white text-center w-38 font-semibold px-3 py-2 rounded-full cursor-pointer mt-3 flex gap-2">
        <span className="flex items-center gap-2"><IoCartOutline className="w-6 h-6" />Add to cart</span>
        <span className="flex items-center gap-2"><BaggageClaim />Added</span>
      </AnimatedSubscribeButton>
    </div>
  );
};

export default ProductCard;
//  <button
//        
//        
//       >
//         <IoCartOutline className="w-6 h-6" /> Add To Cart  
//       </button>
