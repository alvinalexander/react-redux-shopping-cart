import React from 'react';
import {connect} from 'react-redux';
import ProductsList from '../components/ProductsList'
import ProductRow from '../components/ProductRow'
import {getProducts} from "../reducers/productsReducer";
import {addToCart} from "../actions/index";

const ProductsContainer = ({products, onAddToCartClicked}) => (
    <ProductsList title="Products">
        {products.map(product =>
            <ProductRow
                key={product.id}
                product={product}
                onAddToCartClicked={onAddToCartClicked}

            />
        )}

    </ProductsList>
);

const mapStateToProps = state => ({
    products: getProducts(state.products)
});

const mapDispatchToProps = (dispatch) => ({
    onAddToCartClicked:  (id, qty) => (dispatch(addToCart(id, qty)))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);