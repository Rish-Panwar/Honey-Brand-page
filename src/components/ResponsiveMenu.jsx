import { Logs, ListCollapse } from 'lucide-react'
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import { FaUserCircle } from 'react-icons/fa'
import { useCart } from "../Context/CartContext";

const ResponsiveMenu = ({ openNav, setOpenNav }) => {
    const { user, isSignedIn } = useUser();
    const { cartItem } = useCart();
    return (
        <>
            {/* Toggle button is now only rendered in Navbar to avoid overlap */}
            <div
                className={`fixed top-2 right-0 h-[50%] w-64 rounded-xl shadow-2xl bg-cover bg-center flex flex-col p-6 z-50 transition-transform duration-300
                ${openNav ? "translate-x-0" : "translate-x-full"}`}
                style={{ backgroundImage: "url('/assets/background.jpg')" }}
            >
                {/* Blur and shadow overlay */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-xl pointer-events-none z-0" />
                <button
                    onClick={() => setOpenNav(false)}
                    className="absolute top-3 right-3 text-white text-2xl p-2 rounded-full bg-black/30 hover:shadow-lg transition-shadow duration-200 cursor-pointer z-20"
                    style={{ zIndex: 20 }}
                >
                    <Logs />
                </button>
            <div className="flex justify-start items-center gap-3 z-10">
                {!isSignedIn ? (
                    <SignInButton>
                        <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-full px-4 py-2 cursor-pointer flex items-center gap-2">
                            <FaUserCircle size={24} /> Sign In
                        </button>
                    </SignInButton>
                ) : (
                    <>
                        <UserButton />
                        <span className="text-white font-semibold ml-2">Hello! {user?.firstName}</span>
                    </>
                )}
            </div>
            <nav className="flex flex-col gap-6 mt-5 relative z-10">
                <a href="/" className="text-white text-lg nav-hover-effect px-2 py-1">Home</a>
                <a href="/products" className="text-white text-lg nav-hover-effect px-2 py-1">Products</a>
                <a href="/about" className="text-white text-lg nav-hover-effect px-2 py-1">About</a>
                <a href="/contact" className="text-white text-lg nav-hover-effect px-2 py-1">Contact</a>
            </nav>
        </div>
    </>
    );
}

export default ResponsiveMenu
