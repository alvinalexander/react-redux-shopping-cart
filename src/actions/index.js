import _products from '../api/products.json';
import * as types from '../constants/ActionTypes'

const PRODUCTS = _products;

export const getAllProducts = () =>({
  type: types.RECEIVE_PRODUCTS,
    products: PRODUCTS
});


export const addToCart = (id, qty) => ({
    type: types.ADD_TO_CART,
    id,
    qty
});