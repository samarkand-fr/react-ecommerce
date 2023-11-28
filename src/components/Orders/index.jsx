// ViewOrders.js
import React from 'react';
import { useSelector } from 'react-redux';
import './style.css'; // Import the CSS file

const ViewOrders = () => {
  const cartItems = useSelector((state) => state.handleCart);

  return (
    <div className="view-orders-container">
      <h2>Your Orders</h2>
      <ul className="order-list">
        {cartItems.map((item) => (
          <li key={item.id} className="order-item">
            <img src={item.image} alt={item.title} className="order-item-image" />
            <div className="order-item-details">
              <p className="order-item-title">{item.title}</p>
              <p>Quantity: {item.qty}</p>
              <p>Price: ${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewOrders;
