import React, { useState } from 'react';
import Cart from "./components/Cart.jsx";
import Items from "./components/Items.jsx";
import { PRODUCTS } from "./data.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the CSS file

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    console.log("inital cart",cart);
    if (existingItem) {
      console.log("existingItem loop",existingItem);
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      console.log("existingCart",cart);
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (productId) => {
    setCart(
      cart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 2 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart(
      cart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };


  return (
    <div className="App">
      <div className="flex">
        {PRODUCTS.map((product) => (
        <Items
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.shortDescription}
          img={product.img}
          btn={product.btn}
          addToCart={() => addToCart(product)}
          product= {product}
        />
        
      ))}
      </div>
       <Cart
        cartItems={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
        total={calculateTotal()}
      /> 

    </div>
  );
}

export default App;
