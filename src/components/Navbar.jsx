import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { MapPin, ShoppingCartIcon } from 'lucide-react'
import { useState } from 'react'
import { CgClose } from 'react-icons/cg';
import { FaCaretDown } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({ location, getLocation, openDropdown, setOpenDropdown }) => {
  // Function to handle location click
  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className="bg-cover bg-center py-2 shadow-md" style={{backgroundImage: "url('/assets/background.jpg')"}}>
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4">
        {/* logo section */}
        <div className="flex gap-7 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/public/assets/logos/honey-jar.png" alt="honey jar logo" className='h-10' />
            <h1 className="text-3xl font-bold text-white"><span className="text-amber-300 font-serif">G</span>olden <span className="text-amber-300 font-serif">D</span>rop</h1>
          </Link>
          {/* location dropdown */}
          <div className="flex cursor-pointer text-gray-700 items-center">
            <MapPin className="h-7 w-7 text-amber-500" />
            <span className='text-sm text-white'>{location ? <div className='flex flex-col'>
              <p>{location.county}, {location.state}</p>
            </div> : "Add Address"}</span>
            <FaCaretDown className="ml-1 text-white" onClick={toggleDropdown} />
          </div>
          {/* Dropdown for location */}
          {openDropdown ? <div className='w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md'>
            <h1 className='font-semibold text-xl mb-4 flex justify-between'>Select Location <span onClick={toggleDropdown}><CgClose /></span></h1>
            <button onClick={getLocation} className='bg-yellow-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-yellow-600'>Detect my Location</button>
          </div> : null}
        </div>
        {/* Menu section */}
        <nav className="flex items-center gap-7  text-white">
          <ul className="space-x-4 text-xl font-semibold">
            <NavLink to="/" className={({ isActive }) => `${isActive ? 'border-b-3 transition-all duration-300 ease-in-out border-white' : 'text-amber-300'} cursor-pointer`}>Home</NavLink>
            <NavLink to="/products" className={({ isActive }) => `${isActive ? 'border-b-3 transition-all duration-300 ease-in-out border-white' : 'text-amber-300'} cursor-pointer`}>Products</NavLink>
            <NavLink to="/about" className={({ isActive }) => `${isActive ? 'border-b-3 transition-all duration-300 ease-in-out border-white' : 'text-amber-300'} cursor-pointer`}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `${isActive ? 'border-b-3 transition-all duration-300 ease-in-out border-white' : 'text-amber-300'} cursor-pointer`}>Contact</NavLink>
          </ul>
          {/* Cart Icon */}
          <Link to={'/cart'} className="relative">
            <ShoppingCartIcon className="h-7 w-7" />
            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-400 text-white text-xs font-bold rounded-full px-1">0</span>
          </Link>
          <div>
            <SignedOut>
              <SignInButton className=" bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-full px-4 py-2 cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>

      </div>
    </div>
  )
}

export default Navbar
