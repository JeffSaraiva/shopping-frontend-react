import { useState } from 'react';
import axios from 'axios';
import { useCart } from '../contexts/CartContext';
import '../App.css';

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'PIX'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/orders', {
        customerName: formData.name,
        email: formData.email,
        address: formData.address,
        paymentMethod: formData.paymentMethod,
        items: cartItems.map(item => ({ productId: item.id, quantity: item.quantity }))
      });
      clearCart();
      alert('Pedido realizado com sucesso!');
    } catch (err) {
      console.error(err);
      alert('Falha ao realizar o pedido.');
    }
  };

  return (
    <div className="main-wrapper responsive-top">
      <div className="main-container checkout-wrapper">
        <h2 className="title">💳 Finalizar Compra</h2>
        <form className="checkout-form-vertical" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="address"
            placeholder="Endereço"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="PIX">PIX</option>
            <option value="CARTÃO DE CRÉDITO">Cartão de Crédito</option>
            <option value="BOLETO">Boleto</option>
          </select>
          <button type="submit" className="checkout-btn">
            Finalizar Compra
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
