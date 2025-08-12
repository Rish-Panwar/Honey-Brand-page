import { useCart } from "../Context/CartContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export function DetailedPrice() {
  const { cartItem } = useCart();
  const [open, setOpen] = useState(""); // closed by default

  const subtotal = cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
  const handlingCharge = Math.round(subtotal * 0.02);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      value={open}
      onValueChange={setOpen}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Price Details</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <div className="flex flex-col gap-2">
            {cartItem.map((item, idx) => (
              <div key={idx} className="flex justify-between">
                <span>
                  {item.title} {item.selectedWeight ? `(${item.selectedWeight})` : ""} x {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between">
            <span>Handling Charge (2%)</span>
            <span>₹{handlingCharge}</span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
