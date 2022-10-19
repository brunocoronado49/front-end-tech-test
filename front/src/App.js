import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import './App.css'

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
