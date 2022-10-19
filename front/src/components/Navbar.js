import { Link } from 'react-router-dom'
import "../styles/navbar.css";

const Navbar = ({ cart }) => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/products">Productos</Link>
                </li>
                <li>
                    <Link to="/cart">Carrito {cart} </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
