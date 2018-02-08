import { createStore } from 'redux';
const reducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        return {
            ...state,
            cart: state.cart.concat(action.person)
        }
    }else if (action.type === "REMOVE_FROM_CART"){
        console.log(action)
        // return {
        //     ...state,
        //     cart: state.cart.filter(person => person.ID !== action.person.ID)
        // }
    }
    return state;
}
export default createStore(reducer, { cart: [] });