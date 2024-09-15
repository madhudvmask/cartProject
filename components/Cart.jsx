import React from 'react';

function Cart({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart, total }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div>
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div>
                <button className="btn btn-secondary" onClick={() => increaseQuantity(item.id)}>+</button>
                <button className="btn btn-secondary" onClick={() => decreaseQuantity(item.id)}>-</button>
                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${total}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
