// authActions.js

import { loadUserData } from './userActions';

export const login = (user) => {
  return (dispatch) => {
    // Assuming you have user data after a successful login
    const userData = {
      userName: 'John Doe',
      email: 'john.doe@example.com',
      // Add more user data properties here
    };

    // Dispatch the action to load user data into the Redux store
    dispatch(loadUserData(userData));

    // Dispatch the login action
    dispatch({
      type: 'LOGIN',
      payload: user,
    });
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

  