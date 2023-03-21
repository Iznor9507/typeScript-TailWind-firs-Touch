import axios from "axios";
import { Iproduct } from "../models";
import { AxiosError } from "axios";
import React from "react";

export function useProducts() {
    const [products, setProducts] = React.useState<Iproduct[]>([]);
     const [loading, setLoading] = React.useState(false);
     const [error, setError] = React.useState("");
  
    async function fetchProducts() {
      try {
        setError("");
        setLoading(true);
        const response = await axios.get<Iproduct[]>(
          "https://fakestoreapi.com/products?limit=8"
        );
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (e: unknown) {
        const error = e as AxiosError;
        setLoading(false);
        setError(error.message);
      }
    }
  
    React.useEffect(() => {
      fetchProducts();
    }, []);

return { products, loading, error }
}