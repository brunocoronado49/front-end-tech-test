import { useState } from "react";
import ProductCard from "./ProductCard";

const CartPage = ({ items, setItems, callback }) => {
    return (
        <div>
            <h1>Carrito</h1>
            {items.map((item) => {
                return <ProductCard {...item} message="Remove" callback={callback} />;
            })}
        </div>
    );
};

export default CartPage;
