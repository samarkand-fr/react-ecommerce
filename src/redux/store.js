
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers'; // Replace with your actual root reducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
