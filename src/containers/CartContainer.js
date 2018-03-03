import React from 'react'
import Cart from "../components/Cart";
import {connect} from 'react-redux';
import {getAddedProducts, getTotalCartValue} from "../reducers/cartReducer";

const CartContainer = ({products, total}) => (
  <Cart
    products={products}
    total={total}
  />
);

const mapStateToProps = state => ({
    products: getAddedProducts(state),
    total: getTotalCartValue(state)
});

export default connect(
    mapStateToProps
)(CartContainer);