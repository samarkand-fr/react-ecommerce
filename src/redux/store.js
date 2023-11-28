// import {configureStore} from '@reduxjs/toolkit';
// import rootReducers from './reducer';
// const store = configureStore({
//     reducer: rootReducers,

// })

// export default store;
// store.js
// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers'; // Replace with your actual root reducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
