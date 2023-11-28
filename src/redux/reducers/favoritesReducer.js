// reducers/favoritesReducer.js

const initialState = [];

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return [...state, action.payload];
    case 'REMOVE_FROM_FAVORITES':
      return state.filter(item => item.id !== action.payload);
    case 'TOGGLE_FAVORITE':
      const itemId = action.payload.id; // Use action.payload.id here
      // Check if the item is already in the favorites list
      const isFavorite = state.some(item => item.id === itemId);
      if (isFavorite) {
        // If it is, remove it from favorites
        return state.filter(item => item.id !== itemId);
      } else {
        // If it's not, add it to favorites
        return [...state, action.payload];
      }
    default:
      return state;
  }
};

// favoritesReducer.js

export const toggleFavorite = (product) => {
  return {
    type: 'TOGGLE_FAVORITE',
    payload: product,
  };
};

// rest of the reducer logic...

export default favoritesReducer;
