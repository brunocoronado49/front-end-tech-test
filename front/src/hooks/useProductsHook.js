import { useEffect, useState } from "react";
import { getAllProducts, getOneProduct } from "../services/api";

export const useGetAllProducts = () => {
    const [products, setProducts] = useState([]);
    const  response = getAllProducts();

    useEffect(() => {
        const res = response.then(product => setProducts(product))
        console.log(res)
    }, []);


    return products;
};

export const useGetOneProduct = (id) => {
    const [product, setProduct] = useState({});
    const response = getOneProduct(id);
    setProduct(response);

    return product;
};
