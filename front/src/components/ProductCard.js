import { useNavigate } from "react-router-dom";
import "../styles/card.css";

const ProductCard = (props) => {
    const { id, name, description, image, brand, category, price } = props;
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
                </div>
                <button className="btn-add">Add to cart</button>
                <button
                    className="btn-add"
                    onClick={() => navigate(`/products/${id}`)}
                >
                    Detail
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
