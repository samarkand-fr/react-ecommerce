import { combineReducers } from 'redux';
import cartReducer from '../redux/reducers/handleCart';
import favoritesReducer from './reducers/favoritesReducer';
import userReducer from '../redux/reducers/userReducer'; // Import your userReducer

const rootReducer = combineReducers({
  handleCart: cartReducer,
  handleFavorites: favoritesReducer,
  user: userReducer, // Add your userReducer here
});

export default rootReducer;
