import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/actions/cartActions";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { toggleFavorite } from "../../redux/reducers/favoritesReducer";
import "./style.css";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    setShowAlert(true);

    // Reset the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  const handleToggleFavorite = (product) => {
    console.log("Toggling favorite for product:", product);
    dispatch(toggleFavorite(product));
  };

  return (
    <>
      {showAlert && (
        <div className="alert">
          <p>Item added to the cart!</p>
        </div>
      )}
      <div className="Product-card">
        <div className="Product-Img">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="Product-Details">
          <h2>{product.title}</h2>
          <p id="Product-description">{product.description}</p>
          <p id="Product-price">${product.price}</p>
          <button onClick={() => addProduct(product)}>Add To Cart</button>
          <button onClick={() => handleToggleFavorite(product)}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "red", cursor: "pointer" }}
            />
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SingleProduct;
