import { useGetAllProducts } from "../hooks/useProductsHook";
import ProductCard from "./ProductCard";

const ProductList = ({ addToCart, productsCart, setProductsCart }) => {
    const products = useGetAllProducts();

    return (
        <div className="list">
            <h1>Todos los productos</h1>
            {products.map((product) => (
                <ProductCard
                    {...product}
                    key={product._id}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
};

export default ProductList;
