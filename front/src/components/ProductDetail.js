import { useParams } from "react-router-dom";
import { useGetOneProduct } from "../hooks/useProductsHook";
import "../styles/detail.css";

const ProductDetail = () => {
    const params = useParams();
    const product = useGetOneProduct(params.id);

    return (
        <div className="detail">
            <div className="image-detail-container">
                <img
                    src={`http://localhost:2000${product.image}`}
                    alt={product.name}
                    className="image-detail"
                />
            </div>
            <div className="info">
                <h1>
                    {product._id} - {product.name} - {product.price}
                </h1>
                <p>{product.description}</p>
                <p>Stock: {product.countInStock}</p>
                <div className="extra">
                    <h3 className="text">Info:</h3>
                    <p className="text">{product.category}</p>
                    <p className="text">{product.brand}</p>
                    <p className="text">Rating: {product.rating}</p>
                    <p className="text">Reviews: {product.numReviews}</p>
                </div>
            </div>
            <button className="btn-add">Add to cart</button>
        </div>
    );
};

export default ProductDetail;
