import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../Context/CartContext";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { BaggageClaim } from "lucide-react";



const QuantitySelector = ({ product}) => {
    const { addToCart } = useCart();
  
  const isHoney = product.category === "Honey Products";
  const isOther =
    product.category === "Food Products" || product.category === "Accessory";

  const [selectedWeight, setSelectedWeight] = useState("250g");
  const [units, setUnits] = useState(1);

  const weightOptions = [
    { label: "250g", multiplier: 0.25 },
    { label: "500g", multiplier: 0.5 },
    { label: "1kg", multiplier: 1 },
  ];

  const handleWeightChange = (e) => {
    setSelectedWeight(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnits(parseInt(e.target.value));
  };

  const selectedWeightMultiplier =
    weightOptions.find((option) => option.label === selectedWeight)
      ?.multiplier || 1;

  const totalPrice = isHoney
    ? Math.round(product.price * selectedWeightMultiplier * units)
    : product.price * units;

  return (
    <div className="">
      {isHoney && (
        <div className="flex items-center gap-4 mb-4">
          <div>
            <label
              htmlFor="weight"
              className="block mb-1 text-sm font-medium text-[#DC3C22]"
            >
              Select Weight
            </label>
            <select
              id="weight"
              className="border-0 rounded px-4 py-2 text-gray-500 bg-amber-200"
              value={selectedWeight}
              onChange={handleWeightChange}
            >
              {weightOptions.map((option) => (
                <option key={option.label} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="units"
              className="block mb-1 text-sm font-medium text-[#DC3C22]"
            >
              Units
            </label>
            <select
              id="units"
              className="border-0 rounded px-4 py-2 text-gray-500 bg-amber-200"
              value={units}
              onChange={handleUnitChange}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {isOther && (
        <div className="mb-4">
          <label
            htmlFor="units"
            className="block mb-1 text-sm font-medium text-[#DC3C22]"
          >
            Select Quantity
          </label>
          <select
            id="units"
            className="border-0 rounded px-4 py-2 text-gray-500 bg-amber-200"
            value={units}
            onChange={handleUnitChange}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} unit{num > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="mt-2 text-lg font-semibold text-[#DC3C22]">
        Price: ₹{totalPrice}
      </div>
      <AnimatedSubscribeButton onClick={() => addToCart(product)} className="text-white text-center w-38 font-semibold px-3 py-2 rounded-full cursor-pointer mt-3 flex gap-2" style={{ backgroundImage: "url(/assets/button-bee-2.jpg)" }}>
        <span className="flex items-center gap-2"><IoCartOutline className="w-6 h-6" />Add to cart</span>
        <span className="flex items-center gap-2"><BaggageClaim className="w-6 h-6" />Added</span>
      </AnimatedSubscribeButton>      
    </div>
  );
};

export default QuantitySelector;
