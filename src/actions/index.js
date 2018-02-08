const addToCart = person => {
    return {
        type: "ADD_TO_CART",
        person
    }
}

const removeFromCart = person => {
    return {
        type: "REMOVE_FROM_CART",
        person
    }
}

export { addToCart, removeFromCart };