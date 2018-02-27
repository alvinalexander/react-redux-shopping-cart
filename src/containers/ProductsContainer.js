import React from 'react';
import {connect} from 'react-redux';
import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'
import {getProducts} from "../reducers/productsReducer";

const ProductsContainer = ({products}) => (
    <ProductsList title="Products">
        {products.map(product =>
            <ProductItem
                key={product.id}
                product={product}
            />
        )}

    </ProductsList>
);

const mapStateToProps = state => ({
    products: getProducts(state.products)
});

export default connect(
    mapStateToProps
)(ProductsContainer);