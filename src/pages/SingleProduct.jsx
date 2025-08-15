import axios from 'axios';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import notfound from "../assets/notfound.json"
import QuantitySelector from '../components/QuantitySelector';


const SingleProduct = () => {
    const params = useParams();
    const [SingleProduct, setSingleProduct] = useState(null);

    const getSingleProduct = async () => {
        try {
            const res = await axios.get('/Products-List.json');
            const allProducts = res.data;

            // Merge all product arrays into one array
            const mergedProducts = Object.values(allProducts).flat();

            const foundProduct = mergedProducts.find(product => product.id === params.id);
            if (foundProduct) {
                setSingleProduct(foundProduct);
            } else {
                console.error("Product not found");
            }
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    useEffect(() => {
        getSingleProduct();
    }, []);
    return (
        <>
            {
                SingleProduct ? <div className='px-4 pb-4 md:px-0 mt-15 mb-10'>                   
                    <div className="max-w-5xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Product Image */}
                        <div className="w-fit">
                            <img src={SingleProduct.image} alt={SingleProduct.title} className='rounded-2xl w-full object-cover ' />
                        </div>
                        {/* product details */}
                        <div className="flex flex-col gap-6 py-6">
                            <h1 className="md:text-3xl text-2xl font-bold text-[#DC3C22]">{SingleProduct.title}</h1>
                            <div className="text-orange-400">{/*{SingleProduct.category} */}
                                <p className="text-xl text-[#DC3C22] font-bold">₹{SingleProduct.price}/{SingleProduct.unit}</p>
                                <p className=" text-amber-500 md:text-xl mt-2 ">{SingleProduct.description}</p>
                            </div>   
                            {/* Quantity selecter */}
                        <div className="flex items-center gap-4"><QuantitySelector product={SingleProduct}/></div>                                                                                
                        </div>
                        
                        
                    </div>
                </div> :
                    <div className="flex items-center justify-center md:h-[600px] md:w-[900px] mt-10">
                        <Lottie animationData={notfound} classID="w-[500px]" />
                    </div>
            }
        </>
    );
};

export default SingleProduct;