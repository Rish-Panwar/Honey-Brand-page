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
      <h1 className="text-[#D96F32] md:line-clamp-2 line-clamp-1 font-semibold p-1">{product.title}</h1>
      <p className="my-1 text-lg text-[#EA2F14] font-bold">₹{product.price}</p>
      <AnimatedSubscribeButton onClick={() => addToCart(product)} className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400 text-white text-center font-semibold px-3 py-2 rounded-full cursor-pointer mt-3 flex flex-row gap-x-2 items-center flex-nowrap min-w-0">
        <span className="flex flex-row items-center gap-x-2 flex-nowrap whitespace-nowrap min-w-0"><IoCartOutline className="w-6 h-6" />Add to cart</span>
        <span className="flex flex-row items-center gap-x-2 px-3 flex-nowrap whitespace-nowrap min-w-0"><BaggageClaim className="w-6 h-6" />Added</span>
      </AnimatedSubscribeButton>
    </div>
  );
};

export default ProductCard;

