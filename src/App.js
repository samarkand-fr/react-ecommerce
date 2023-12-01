
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import AppRoutes from './Routes';
// import { loadUserData } from './redux/actions/userActions';
function App() {

  //persist the user 
  // Check if there's user data in localStorage
  // const storedUser = localStorage.getItem('user');

  // If user data is available, dispatch the action to load it into the Redux store
  // if (storedUser) {
  //   const userData = JSON.parse(storedUser);
  //   store.dispatch(loadUserData(userData));
  // }

  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Navbar />
          <AppRoutes />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
