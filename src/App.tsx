import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <nav className="navbar">
          <div className="nav-center">
            <Link to="/">🏠 Início</Link>
            <Link to="/cart">🛒 Carrinho</Link>
            <Link to="/checkout">💳 Finalizar Compra</Link>
          </div>
        </nav>
        
        <div className="main-container">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;