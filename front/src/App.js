import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartPage from "./components/CartPage";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </div>
    );
};

export default App;
