
const cartKey = 'cart';

const cartFromStorage = JSON.parse(localStorage.getItem(cartKey)) || [];

const handleCart = (state = cartFromStorage, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // If the item already exists, increase the quantity
        const newState = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
        localStorage.setItem(cartKey, JSON.stringify(newState));
        return newState;
      } else {
        // If the item is not in the cart, add it with quantity 1
        const newState = [...state, { ...product, qty: 1 }];
        localStorage.setItem(cartKey, JSON.stringify(newState));
        return newState;
      }

    case "DELITEM":
      const exist2 = state.find((x) => x.id === product.id);
      if (exist2.qty === 1) {
        // If the item quantity is 1, remove it from the cart
        const newState = state.filter((x) => x.id !== exist2.id);
        localStorage.setItem(cartKey, JSON.stringify(newState));
        return newState;
      } else {
        // If the item quantity is more than 1, decrease the quantity
        const newState = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
        localStorage.setItem(cartKey, JSON.stringify(newState));
        return newState;
      }

    default:
      return state;
  }
};

export default handleCart;



  