
// For Add Item to Cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// For Delete Item to Cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}
export const updateCart = (userId, items) => ({
    type: 'UPDATE_CART',
    payload: { userId, items },
});



