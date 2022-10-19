import { useGetAllProducts } from "../hooks/useProductsHook";
import ProductCard from "./ProductCard";

const ProductList = ({ cart, setCart, addToCart }) => {
    const products = useGetAllProducts();

    return (
        <div className="list">
            <h1>Todos los productos</h1>
            {products.map((product) => (
                <ProductCard
                    {...product}
                    key={product._id}
                    cart={cart}
                    setCart={setCart}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
};

export default ProductList;
