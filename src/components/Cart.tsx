import { useCart } from '../contexts/CartContext';
import '../App.css';

const Cart = () => {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="main-wrapper responsive-top">
      <div className="main-container">
        <div className="cart-container">
          <h2 className="title">🛒 Carrinho</h2>
          {cartItems.length === 0 ? (
            <p className="empty-cart">O carrinho está vazio.</p>
          ) : (
            <div className="cards-grid">
              {cartItems.map(item => (
                <div key={item.id} className="cart-card">
                  <img src={item.image} alt={item.name} className="card-image" />
                  <div className="cart-info">
                    <h4 className="product-name">{item.name}</h4>
                    <p className="description">{item.description}</p>
                    <p className="price">
                      <strong>Preço:</strong> R$ {item.price.toFixed(2)}
                    </p>
                    <p className="stock">
                      <strong>Estoque disponível:</strong> {item.stock}
                    </p>
                    <div className="cart-controls">
                      <button className="qty-btn" onClick={() => decreaseQuantity(item.id)}>
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button className="qty-btn" onClick={() => addToCart(item)}>
                        +
                      </button>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {cartItems.length > 0 && (
            <div className="checkout-wrapper">
              <button
                className="checkout-btn"
                onClick={() => (window.location.href = '/checkout')}
              >
                Finalizar Compra
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
