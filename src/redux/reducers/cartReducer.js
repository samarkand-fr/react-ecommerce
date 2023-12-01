
const initialState = {
  cart: [],
  // ... other properties if needed
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDITEM':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case 'DELITEM':
      // Assuming product id is unique
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };

    case 'UPDATE_CART':
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;

