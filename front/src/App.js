import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import { useAddToCart } from "./hooks/useProductsHook";
import "./App.css";

const App = () => {
    const [cart, addToCart, products] = useAddToCart();

    return (
        <div className="app">
            <Navbar cart={cart} />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/products"
                        element={<ProductList addToCart={addToCart} />}
                    />
                    <Route
                        path="/products/:id"
                        element={<ProductDetail addToCart={addToCart} />}
                    />
                    <Route
                        path="/cart"
                        element={<CartPage items={products} setItems={addToCart} />}
                    />
                </Routes>
            </div>
        </div>
    );
};

export default App;
