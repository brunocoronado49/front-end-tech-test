import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/card.css";

const ProductCard = (props) => {
    const {
        _id,
        name,
        description,
        image,
        brand,
        category,
        price,
        countInStock,
        addToCart,
    } = props;
    const navigate = useNavigate();
    const [stock, setStock] = useState(countInStock);

    const removeStock = () => {
        setStock(stock - 1);
        addToCart();
    };

    return (
        <div className="card">
            <div className="container-card">
                <div className="container-image">
                    <img
                        src={`http://localhost:2000${image}`}
                        alt={name}
                        className="image"
                    />
                </div>
                <div className="info">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <br />
                    <p>
                        {brand} - {category}
                    </p>
                    <p>Price: {price}</p>
                    <p>Stock: {stock} </p>
                </div>
                {stock !== 0 ? (
                    <button className="btn-add" onClick={removeStock}>
                        Add to cart
                    </button>
                ) : (
                    <button className="btn-empty">Empty stock</button>
                )}

                <button
                    className="btn-add"
                    onClick={() => navigate(`/products/${_id}`)}
                >
                    Detail
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
