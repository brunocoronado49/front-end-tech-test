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
        callback,
        message
    } = props;
    const navigate = useNavigate();

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
                    <p>Stock: {countInStock} </p>
                </div>
                {countInStock !== 0 ? (
                    <button className="btn-add" onClick={callback}>
                        { message }
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
