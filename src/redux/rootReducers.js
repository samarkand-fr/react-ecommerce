import { combineReducers } from 'redux';
import cartReducer from '../redux/reducers/handleCart';
import favoritesReducer from './reducers/favoritesReducer';
import userReducer from '../redux/reducers/userReducer'; // Import your userReducer

const rootReducer = combineReducers({
   // Add your userReducer here
  handleCart: cartReducer,
  handleFavorites: favoritesReducer,
  user: userReducer,
});

export default rootReducer;
