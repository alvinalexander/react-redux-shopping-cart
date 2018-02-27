import _products from '../api/products.json';
import * as types from '../constants/ActionTypes'

const PRODUCTS = _products;
console.log(typeof PRODUCTS);
export const getAllProducts = () =>({
  type: types.RECEIVE_PRODUCTS,
    products: PRODUCTS
});


