import React from 'react'

const Banner = () => {
    return (
        <div className='bg-gray-100 md-py-24 mt-2em h-dvh'>
            <div className="relative max-w-7xl mx-auto md:rounded-2xl rounded-md pt-28 bg-cover bg-center h-[550px] md:h-[600px]"
                style={{ backgroundImage: "url(/assets/banner.jpg)", backgroundPosition: "center", backgroundAttachment: 'fixed' }}>
                <div className="absolute inset-0 bg-black/60 md-rounded-2xl bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Indulge in Nature’s Finest Golden Elixir</h1>
                        <p className="text-lg md:text-xl mb-6">Pure excellence delivered nationwide with elegance and care.</p>
                        <button className="bg-cover bg-center text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-full cursor-pointer transition duration-300"
                        style={{backgroundImage:"url(/assets/button-bee-2.jpg)"}}>                            
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
