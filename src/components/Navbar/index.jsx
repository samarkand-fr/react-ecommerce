import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";

const NavBar = () => {
  // Get the cart and favorites states directly from Redux
  const cartState = useSelector((state) => state.handleCart);
  const favoritesState = useSelector((state) => state.handleFavorites);

  // Compute the total quantity in the cart and favorites
  const totalQuantityInCart = cartState.reduce(
    (acc, item) => acc + item.qty,
    0
  );
  const totalQuantityInFavorites = favoritesState.length;

  return (
    <header className="container-fluid">
      <div className="navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          <div className="nav_logo">SHOPY</div>
        </Link>

        <div className="navbar">
          <Link to="/" className="nav-link px-3 active">
            Home
          </Link>

          <Link to="/products" className="nav-link px-3">
            Products
          </Link>

          <Link to="/AboutUS" className="nav-link px-3">
            About Us
          </Link>

          <Link to="/ContactUS" className="nav-link px-3">
            Contact Us
          </Link>
        </div>

        <div className="nav_btn fs-6">
          <Link to="/signup" className="nav-link">
            <i className="uil uil-user"></i> Sign Up
          </Link>
          <Link to="/cart" className="nav-link">
            <i className="uil uil-shopping-bag"></i> Cart ({totalQuantityInCart}
            )
          </Link>
          <Link to="/favorites" className="nav-link">
            <i className="uil uil-heart"></i> Favorites (
            {totalQuantityInFavorites})
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
