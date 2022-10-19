import { useParams } from "react-router-dom";
import { useGetOneProduct } from "../hooks/useProductsHook";
import "../styles/detail.css";

const ProductDetail = () => {
    const params = useParams();
    const product = useGetOneProduct(params.id);

    return (
        <div className="detail">
            <div className="image-detail">
                <img src={`http://localhost:2000${product.image}`} alt={product.name} />
            </div>
            <div className="info">
                <h1>
                    {product._id} - {product.name} - {product.price}
                </h1>
                <p>{product.description}</p>
                <p>{product.countInStock}</p>
                <h3>Info:</h3>
                <div className="extra">
                    <p>{product.category}</p>
                    <p>{product.brand}</p>
                    <p>{product.rating}</p>
                    <p>{product.numReviews}</p>
                </div>
            </div>
            <button className="btn-add">Add to cart</button>
        </div>
    );
};

export default ProductDetail;
