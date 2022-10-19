import CartPage from "./components/CartPage";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import { useNavigate } from 'react-router-dom'

const App = () => {
    const navigate = useNavigate();
    
    return (
        <div className="app">
            <ProductList />
            
        </div>
    );
};

export default App;
