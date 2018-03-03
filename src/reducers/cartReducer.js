import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes'

const addedIds = (state=[], action) => {
    switch (action.type){
        case ADD_TO_CART:
            if(action.qty <= 0){
                return state;
            }
            if(state.indexOf(action.id) !== -1){
                return state;
            }
            return [...state, action.id];
        default:
            return state;
    }
};

const quantityById = (state={}, action) => {
    switch (action.type){
        case ADD_TO_CART:
            if(action.qty > 0){
                return {...state, [action.id]: (state[action.id] || 0) + action.qty};
            }
            return state;
        default:
            return state;
    }
};


export default combineReducers({
    addedIds,
    quantityById,
});

export const getAddedProducts = (state) => {
    const products = state.products;
    const cart = state.cart;

  return cart.addedIds.map( id => (
      {...products.byId[id], qty: cart.quantityById[id]}
  ));
};

export const getTotalCartValue = (state) => {
  //sum up the cost of all the items in cart
    const products = state.products;
    const cart = state.cart;

    let total = 0;
    let cost = 0;
    cart.addedIds.forEach(id =>{
        cost = (cart.quantityById[id] * products.byId[id]['price'])
        total += cost;
    });
    //return cart.addedIds.reduce((acc, id)=>{
     //   return acc + (cart.quantityById[id] * products.byId[id]['price']);
    //})
    return total;
};