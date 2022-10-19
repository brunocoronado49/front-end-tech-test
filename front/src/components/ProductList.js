import { useGetAllProducts } from "../hooks/useProductsHook";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const products = useGetAllProducts();

    return (
        <div className="list">
            <h1>Todos los productos</h1>
           {
            products.map(product => (
                <ProductCard {...product} key={product._id} id={product._id} />
            ))
           }
        </div>
    );
};

export default ProductList;
