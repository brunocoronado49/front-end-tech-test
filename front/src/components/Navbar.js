import { Link } from 'react-router-dom'
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">Productos</Link>
                </li>
                <li>
                    <Link to="/cart">Carrito</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
