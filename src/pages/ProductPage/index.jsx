
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/actions/cartActions';
import Footer from '../../components/Footer';
import './style.css';

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

  return (
    <>
      <div className="Product-card">
        <div className="Product-Img">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="Product-Details">
          <h2>{product.title}</h2>
          <p id="Product-description">{product.description}</p>
          <p id="Product-price">${product.price}</p>
          <button onClick={() => addProduct(product)}>Add To Cart</button>
        </div>
      </div>

      {showAlert && (
        <div className="alert">
          <p>Item added to the cart!</p>
        </div>
      )}

      <Footer />
    </>
  );
};

export default SingleProduct;
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addCart } from '../../redux/actions/cartActions';
// import Footer from '../../Components/Footer/Footer';
// import './SingleProduct.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { toggleFavorite } from '../../redux/reducers/favoritesReducer';


// const SingleProduct = () => {
//   const [product, setProduct] = useState({});
//   const [showAlert, setShowAlert] = useState(false);
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const addProduct = (product) => {
//     dispatch(addCart(product));
//     setShowAlert(true);

//     // Reset the alert after 3 seconds
//     setTimeout(() => {
//       setShowAlert(false);
//     }, 3000);
//   };

//   const handleToggleFavorite = (product) => {
//     console.log('Toggling favorite for product:', product);
//     dispatch(toggleFavorite(product));
//   };

  
//   useEffect(() => {
//     const fetchProduct = async () => {
//       const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//       const data = await response.json();
//       setProduct(data);
//     };

//     fetchProduct();
//   }, [id]);

//   return (
//     <>
//       <div className="container mt-5">
//         <div className="card">
//           <div className="row g-0">
//             <div className="col-md-4">
//               <img src={product.image} alt={product.title} className="img-fluid" />
//             </div>
//             <div className="col-md-8">
//               <div className="card-body">
//                 <div className="d-flex justify-content-between align-items-center">
//                   <h2 className="card-title">{product.title}</h2>
//                   {/* Font Awesome heart icon */}
  
//                   <button onClick={() => handleToggleFavorite(product)}>
//                      <FontAwesomeIcon icon={faHeart} style={{ color: 'red', cursor: 'pointer' }} />
//                  </button>

//                 </div>
//                 <p className="card-text" id="Product-description">{product.description}</p>
//                 <p className="card-text" id="Product-price">${product.price}</p>
//                 <button onClick={() => addProduct(product)} className="btn btn-primary">
//                   Add To Cart
//                 </button>
                
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {showAlert && (
//         <div className="alert alert-success mt-3">
//           <p>Item added to the cart!</p>
//         </div>
//       )}

//       <Footer />
//     </>
//   );
// };

// export default SingleProduct;