
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const NavBar = () => {
  // Get the cart and favorites states directly from Redux
  const cartState = useSelector(state => state.handleCart);
  const favoritesState = useSelector(state => state.handleFavorites);

  // Compute the total quantity in the cart and favorites
  const totalQuantityInCart = cartState.reduce((acc, item) => acc + item.qty, 0);
  const totalQuantityInFavorites = favoritesState.length;

  return (
    <header>
      <div className=" nav_container bg-dark text-white fw-bold d-flex flex-wrap justify-content-evenly p-4">
        <Link to="/" className="navbar-brand">
          <div className="nav_logo">
            Fashion
          </div>
        </Link>

        <div className="nav_items  px-5">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/products" className="nav-link ">
            Products
          </Link>

          <Link to="/AboutUS" className="nav-link">
            About Us
          </Link>

          <Link to="/ContactUS" className="nav-link">
            Contact Us
          </Link>
        </div>

        <div className="nav_btn  ">
          <Link to="/signup" className="nav-link">
            <i className="uil uil-user"></i> Sign Up
          </Link>
          <Link to="/cart" className="nav-link">
            <i className="uil uil-shopping-bag"></i> Cart ({totalQuantityInCart})
          </Link>
          <Link to="/favorites" className="nav-link">
            <i className="uil uil-heart"></i> Favorites ({totalQuantityInFavorites})
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
