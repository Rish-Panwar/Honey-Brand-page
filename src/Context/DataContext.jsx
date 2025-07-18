import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const fetchAllData = async () => {
        try {
            const response = await axios.get('/Products.json');
            const productData = response.data;
            setData(productData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <DataContext.Provider value={{ data, setData, fetchAllData }}>
            {children}
        </DataContext.Provider>
    );
};
export const getData = () =>{
    return useContext(DataContext)
}