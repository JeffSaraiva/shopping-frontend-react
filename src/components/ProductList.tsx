import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../contexts/CartContext';
import '../App.css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get<Product[]>('http://localhost:8080/products')
    .then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="main-wrapper responsive-top">
      <div className="main-container">
        <h2 className="title">🛌 Produtos</h2>
        <div className="cards-grid">
          {products.map((product) => (
            <div key={product.id} className="cart-card">
              <img src={product.image} alt={product.name} className="card-image" />
              <div className="cart-info">
                <h4 className="product-name">{product.name}</h4>
                <p className="description">{product.description}</p>
                <p className="price">
                  <strong>Preço:</strong> R$ {product.price.toFixed(2)}
                </p>
                <p className="stock">
                  <strong>Estoque:</strong> {product.stock}
                </p>
                <div className="cart-controls">
                  <button className="add-btn" onClick={() => addToCart(product)}>
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
