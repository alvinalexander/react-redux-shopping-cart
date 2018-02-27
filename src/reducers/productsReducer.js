import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes'

const byId = (state = {}, action) => {
    switch (action.type){
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce((obj, product) =>{
                    obj[product.id] = product;
                    return obj;
                }, {})
            };
        case ADD_TO_CART:
            const {productId} = action;
            return {
                ...state,
                [productId]: {...state[productId], inventory: state[productId].inventory -1}
            };
        default:
            return state;
    }
};

const visibleIds = (state=[], action) => {
  switch (action.type){
      case RECEIVE_PRODUCTS:
          return action.products.map(product => product.id);
      default:
          return state;
  }
};


export default combineReducers({
    byId,
    visibleIds
});

export const getProduct = (state, id) => {
    return state.byId[id];
};

export const getProducts = (state) =>{
    return state.visibleIds.map(id => getProduct(state, id));
};

