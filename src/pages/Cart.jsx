import React from 'react'
import { useCart } from '../Context/CartContext'
import { FaRegTrashAlt } from 'react-icons/fa'
import { BaggageClaim, HandHelping, LucideNotebook } from 'lucide-react'
import { MdDeliveryDining } from 'react-icons/md'
import { GiShoppingBag } from 'react-icons/gi'
import { useUser } from '@clerk/clerk-react'
import { DetailedPrice } from '../components/DetailedPrice'
import { ShippingDetail } from '../components/ShippingDetail'


const Cart = ({ location, getLocation }) => {
  const { cartItem, updateQuantity, deleteItem } = useCart()

  // User Information
  const { user } = useUser()

  // Calculate total price, handling charge, and grand total
  const totalPrice = cartItem.reduce((total, item) => total + (item.price * item.quantity), 0)
  const handlingCharge = Math.round(totalPrice * 0.02)
  const grandTotal = totalPrice + handlingCharge

  return (
    <div className='mt-10 max-w-6xl mx-auto mb-5'>
      {cartItem.length > 0 ? <div>
        <h1 className="font-bold text-2xl text-[#D96F32]">Cart Item</h1>
        <div className="">
          <div className="mt-10">
            {cartItem.map((item, index) => {
              return <div key={index} className='bg-amber-100 border-gray-100 shadow-xl p-5 rounded-md flex items-center justify-between mt-3 w-full'>
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.title} className='w-20 h-20 rounded-md' />
                  <div>
                    <h1 className="w-[300px] line-clamp-2 text-amber-500">{item.title}</h1>
                    <p className="text-[#EA2F14] font-semibold">₹{item.price}</p>
                    {item.category === "Honey Products" && (
                      <div className="text-sm text-amber-700">
                        {item.selectedWeight && <>Weight: {item.selectedWeight}</>}
                        {item.units && <span className="ml-2">Units: {item.units}</span>}
                      </div>
                    )}
                    {item.category === "Honey Products" && item.selectedWeight && (
                      <div className="text-sm text-amber-700">Weight: {item.selectedWeight}</div>
                    )}
                  </div>
                </div>
                <div className="bg-amber-300 text-white flex gap-4 p-2 rounded-md font-bold text-xl">
                  <button onClick={() => updateQuantity(item.id, 'decrement')} className='cursor-pointer hover:text-amber-800'>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 'increment')} className='cursor-pointer hover:text-amber-800'>+</button>
                </div>
                <span onClick={() => deleteItem(item.id)} className='hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl'>
                  <FaRegTrashAlt className="text-orange-500 cursor-pointer text-2xl" />
                </span>
              </div>
            })}
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="bg-amber-100 border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2">
              <h1 className="text-[#D96F32] font-bold text-xl">Delivery Details</h1>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className='text-[#F8B259] font-bold'>Full Name</label>
                <input type="text" placeholder='Enter your Name' className='border border-gray-300 p-2 rounded-md' value={user?.fullName || ''} />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className='text-[#F8B259] font-bold'>Address</label>
                <input type="text" placeholder='Enter your Address' className='border border-gray-300 p-2 rounded-md' value={location?.county || ''} />
              </div>
              <div className="flex w-full gap-5">
                <div className="flex flex-col space-y-1">
                  <label htmlFor="" className='text-[#F8B259] font-bold'>State</label>
                  <input type="text" placeholder='Enter your State' className='border border-gray-300 p-2 rounded-md w-full' value={location?.state || ''} />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="" className='text-[#F8B259] font-bold'>Pin Code</label>
                  <input type="text" placeholder='Enter your Pin Code' className='border border-gray-300 p-2 rounded-md w-full' value={location?.postcode || ''} />
                </div>
              </div>
              <div className="flex w-full gap-5">
                <div className="flex flex-col space-y-1">
                  <label htmlFor="" className='text-[#F8B259] font-bold'>Country</label>
                  <input type="text" placeholder='Enter your Country' className='border border-gray-300 p-2 rounded-md w-full' value={location?.country || ''} />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="" className='text-[#F8B259] font-bold'>Phone No.</label>
                  <input type="text" placeholder='Enter your Phone No.' className='border border-gray-300 p-2 rounded-md w-full' value={user?.phone || ''} />
                </div>
              </div>
              <button className="bg-[#EA2F14] text-white px-3 py-1 rounded-full mt-3 cursor-pointer">Submit</button>
            </div>
            <div className="bg-amber-100 border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max">
              <h1 className="text-[#D96F32] font-bold text-xl">Bill Details</h1>
              <div className="flex items-center justify-between">
                <h1 className="flex items-center gap-1 text-[#F8B259] font-bold"><span><LucideNotebook /></span>Total Items</h1>
                <p className="text-[#EA2F14] font-semibold">₹{totalPrice}</p>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="flex items-center gap-1 text-[#F8B259] font-bold"><span><MdDeliveryDining className='text-2xl' /></span>Delivery Charge</h1>
                <p className="text-[#EA2F14] font-semibold">Free</p>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="flex items-center gap-1 text-[#F8B259] font-bold"><span><GiShoppingBag className='text-2xl' /></span>Handling Charge</h1>
                <p className="text-[#EA2F14] font-semibold">₹{handlingCharge}</p>
              </div>
              <hr className="text-[#FCB454] mt-2" />
              <div className="flex justify-between items-center">
                <h1 className="flex items-center gap-1 text-[#FF9B00] font-bold text-xl"><span><BaggageClaim /></span>Grand Total</h1>
                <p className="text-[#EA2F14] font-bold text-xl">₹{grandTotal}</p>
              </div>
              <hr className="text-[#A75D5D] mt-2" />
              <div>
                <p className="text-[#DE8F5F] font-semibold text-xl"><DetailedPrice /></p>
                <hr className="text-[#A75D5D]" />
                <p className="text-[#EF9595] font-semibold text-xl"><ShippingDetail /></p>
              </div>
              <div>
                <h1 className="flex justify-center gap- text-[#C7253E] font-bold"><span className="text-2xl"><HandHelping /></span>Apply Promo Code</h1>
                <div className="flex gap-3 m-2">
                  <input type="text" className="p-2 rounded-full border border-gray-700 w-full px-4 py-1" placeholder='Enter Promo Code' />
                  <button className="bg-[#EA2F14] text-white px-3 py-1 rounded-full  cursor-pointer">Apply</button>
                </div>
              </div>
              <button className="bg-[#C7253E] text-white px-3 py-2 rounded-md w-full mt-3 cursor-pointer">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div> : <div>Cart is Empty</div>}
    </div>
  )
}

export default Cart
