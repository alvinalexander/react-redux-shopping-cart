import React from 'react';

const ProductItem = ({product, onAddToCartClicked}) => (
    <tr>
        <td>
            {product.name}
        </td>
        <td>
            {product.price}
        </td>
        <td>
            <select name={product.name}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </td>
        <td>
            <button >Add to Cart</button>
        </td>
    </tr>
);

export default ProductItem;