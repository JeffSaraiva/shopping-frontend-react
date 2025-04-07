# 🛒 Shopping Frontend

Frontend responsivo desenvolvido em **React + TypeScript** para um sistema de compras online. Esta aplicação consome uma API REST para exibição de produtos e gerenciamento de pedidos.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Vite](https://vitejs.dev/) (caso esteja usando para build)
- CSS3 (estilização manual e global)

## 📦 Funcionalidades

- ✅ Listagem de produtos com visual moderno em cards
- ✅ Adição, remoção e ajuste de quantidade de produtos no carrinho
- ✅ Exibição de preço e estoque atualizado por item
- ✅ Finalização de pedido via formulário (nome, email, endereço, forma de pagamento)
- ✅ Layout totalmente responsivo e centralizado

  ## 🧠 Gerenciamento de Estado

Utiliza `React Context API` para:

- Manter o estado global do carrinho de compras
- Compartilhar funções como `addToCart`, `removeFromCart`, `decreaseQuantity`, `clearCart` entre componentes

## 🔗 Comunicação com a API

- Requisições feitas com `Axios`
- A API espera os dados no seguinte formato no endpoint de pedidos (`POST /orders`):
{
  "customerName": "João",
  "email": "joao@email.com",
  "address": "Rua X",
  "paymentMethod": "PIX",
  "items": [
    { "productId": 1, "quantity": 2 },
    { "productId": 4, "quantity": 1 }
  ]
}

🖥️ Estilização
Estilo global com App.css

Layout responsivo e centralizado para todos os tamanhos de tela

Componentes como cards e formulários dispostos em grids e flexbox

Utilização de classes como .main-wrapper, .cards-grid, .cart-card, .checkout-form-vertical etc.

🛠️ Instalação

