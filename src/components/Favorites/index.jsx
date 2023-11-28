import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../components/Footer';
import { toggleFavorite } from '../../redux/actions/favoriteActions';

// Favorites component

// ... (import statements and other code)

const Favorites = () => {
  const favorites = useSelector((state) => state.handleFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    // Load favorites from localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // Dispatch action to set favorites in Redux state
    storedFavorites.forEach(item => dispatch(toggleFavorite(item)));
  }, [dispatch]);

  const handleToggleFavorite = (product) => {
    dispatch(toggleFavorite(product));
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-4">Favorites</h1>

        {favorites.length === 0 ? (
          <p>Your Favorites list is empty.</p>
        ) : (
          <div className="row">
            {favorites.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card">
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">${item.price}</p>
                    <button onClick={() => handleToggleFavorite(item)}>
                      Remove from Favorites
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};


export default Favorites;
