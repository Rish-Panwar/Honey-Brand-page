import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState();
    const fetchAllData = async () => {
        try {
            const response = await axios.get('/Products-List.json');
            const productData = response.data;
            setData(productData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
        // Combine all product arrays into one
    const allProducts = [
        ...(data?.honeyProducts ?? []),
        ...(data?.foodProducts ?? []),
        ...(data?.shopProducts ?? []),
    ]

    // Get unique categories
    const getUniqueCategory = (dataArray, property) => {
        const newVAL = dataArray?.map(item => item.property)
        return ['All',...new Set(newVAL)] // Optional: remove duplicates
    }

    const categoryData = getUniqueCategory(allProducts, 'category')
    return (
        <DataContext.Provider value={{ data, setData, fetchAllData, categoryData }}>
            {children}
        </DataContext.Provider>
    );
};
export const getData = () =>{
    return useContext(DataContext)
}