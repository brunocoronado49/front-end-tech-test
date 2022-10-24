import { useState } from "react";
import ProductCard from "./ProductCard";

const CartPage = ({ items, setItems }) => {
    return (
        <div>
            <h1>Carrito</h1>
            {items.map((item) => {
                return <ProductCard {...item} message="Remove" />;
            })}
        </div>
    );
};

export default CartPage;
