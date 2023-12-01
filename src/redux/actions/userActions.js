
export const loadUserData = (userData) => {
  console.log('loadUserData Action:', userData);
  // Save user data to localStorage
  localStorage.setItem('user', JSON.stringify(userData));
  return {
    type: 'LOAD_USER_DATA',
    payload: userData,
  };
};

export const userLoading = () => {
  return {
    type: 'USER_LOADING',
  };
};

export const userLogout = () => {
  return (dispatch) => {
    // perform any additional cleanup or API calls here
    localStorage.removeItem('user');
    // Dispatch the logout action
    dispatch({
      type: 'LOGOUT',
    });
  };
};
