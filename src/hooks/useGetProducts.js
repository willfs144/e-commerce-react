import axios from "axios";
import { useEffect, useState } from "react";

const useGetProducts = (API_PRODUCTS) => {
   const [products, setProducts] = useState([]);

    useEffect(() => {
       async function fetchData() {
        try {
            // Make the API call using Axios
            const response = await axios.get(API_PRODUCTS);
            // Assuming the API returns an array of products, update the state
            setProducts(response.data);
            
        } catch (error) {
            // Handle errors if needed
            console.error('Error fetching data:', error);
        }
          
        }
     fetchData();    
    }, [API_PRODUCTS]);
    return products;
}

export default useGetProducts;