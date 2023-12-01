
export const loadProduct = (productId) => {
  //  API endpoint to fetch product details
  const apiUrl = `https://fakestoreapi.com/products/${productId}`;

  return async (dispatch) => {
    try {
      // dispatch an action to set loading state if needed
      // dispatch({ type: 'PRODUCT_LOADING' });

      const response = await fetch(apiUrl);
      const data = await response.json();

      // Dispatch an action to set the product details in the store
      dispatch({
        type: 'LOAD_PRODUCT_SUCCESS',
        payload: data, // the API response contains product details
      });
    } catch (error) {
      // Dispatch an action to handle the error
      dispatch({
        type: 'LOAD_PRODUCT_FAILURE',
        payload: error.message,
      });
    }
  };
};