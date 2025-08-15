import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import axios from 'axios'
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct'
import { useCart } from './Context/CartContext'

const App = () => {
  const [location, setLocation] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const {cartItem, setCartItem} = useCart(); // Initialize local storage for cart items

  // Function to get the user's location
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      // You can use these coordinates to fetch the location or display it
      //console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      try{
        const location = await axios.get(url);
        const exactLocation = location.data.address;
        //console.log('Location:', exactLocation);
        setLocation(exactLocation);
        setOpenDropdown(false); // Close the dropdown after fetching location
      }
      catch (error) {
        console.log('Error fetching location:', error);
      }
    })
  }

  useEffect(() => {
    getLocation();
  }, [])

  //Load cart from local storage on initial render
  useEffect(()=>{
    const storedCart = localStorage.getItem('cartItem')
    if (storedCart) {
      setCartItem(JSON.parse(storedCart));
    }
  },[])
  // Save cart to local storage on change
  useEffect(()=>{
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
  },[cartItem]) 

  return (
    <BrowserRouter>
      <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart location={location} getLocation={getLocation} />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
