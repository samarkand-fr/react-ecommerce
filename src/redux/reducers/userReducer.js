
const initialState = {
    user: null,
    isAuthenticated: false, // Set initially to false
    loading: false,
    // ... other properties if needed
  };
  
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true, // Set to true upon successful login
        };
  
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isAuthenticated: false, // Set to false upon logout
        };
  
      case 'LOAD_USER_DATA':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true, // Set to true when loading user data (if authenticated)
        };
  
      case 'USER_LOADING':
        return {
          ...state,
          loading: true,
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  
  
  
  
  
  // ***********************
  // userReducer.js with cart; to relate each user to his cart
  // const initialState = {
  //   user: null,
  //   isAuthenticated: false,
  //   loading: false,
  //   cart: [], // Add cart property to store user's cart data
  // };
  
  // const userReducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case 'LOGIN':
  //       return {
  //         ...state,
  //         user: action.payload,
  //         isAuthenticated: true,
  //       };
  
  //     case 'LOGOUT':
  //       return {
  //         ...state,
  //         user: null,
  //         isAuthenticated: false,
  //         cart: [], // Clear the cart data upon logout
  //       };
  
  //     case 'LOAD_USER_DATA':
  //       return {
  //         ...state,
  //         user: action.payload.user,
  //         isAuthenticated: true,
  //         cart: action.payload.cart || [], // Load user's cart data if available
  //       };
  
  //     case 'USER_LOADING':
  //       return {
  //         ...state,
  //         loading: true,
  //       };
  
  //     default:
  //       return state;
  //   }
  // };
  
  // export default userReducer;
  