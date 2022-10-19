import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import CartPage from "./components/CartPage";
// import ProductDetail from "./components/ProductDetail";
// import ProductList from "./components/ProductList";
import "./App.css";

const App = () => {
    return (
        <div className="app">
            {/* <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route
                        path="/product/detail/:id"
                        element={<ProductDetail />}
                    />
                </Routes>
            </BrowserRouter> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HelloWorld />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

const HelloWorld = () => {
    return <h1>Hello World</h1>;
};

export default App;
