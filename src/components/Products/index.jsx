import React from "react";

const Products = (props) => {
  let { title, image, price } = props;

  return (
    <div className="Card">
      <img src={image} className="card_img" alt="product_card" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
      </div>
    </div>
  );
};

export default Products;
