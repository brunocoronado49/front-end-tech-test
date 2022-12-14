import { useEffect, useState } from "react";
import { getAllProducts, getOneProduct } from "../services/api";

export const useGetAllProducts = () => {
    const [products, setProducts] = useState([]);
    const response = getAllProducts();

    useEffect(() => {
        const res = response.then((product) => setProducts(product));
        console.log(res);
    }, []);

    return products;
};

export const useGetOneProduct = (id) => {
    const [product, setProduct] = useState({});
    const response = getOneProduct(id);

    useEffect(() => {
        const res = response.then((product) => setProduct(product));
        console.log(res);
    }, []);

    return product;
};

export const useAddToCart = () => {
    const [cart, setCart] = useState(0);
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);

    const addToCart = () => {
        setCart(cart + 1);
        const response = getAllProducts();
        const data = response.then((p) => setProduct(p));

        setProducts([...products, data]);
    };

    const removeItem = (index) => {
        setCart(cart - 1);
        const newItems = [...products];
        newItems.splice(index, 1);
        setProducts(newItems);
    };

    return [cart, addToCart, products, removeItem, product];
};
