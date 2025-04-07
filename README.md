<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
=======
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

>>>>>>> e0e958d0b228633a8cefaa3fa10ccdae9254c4af
