import React from 'react';


const CartRow =({product}) => (
    <tr>
        <td>
        {product.title}
        </td>
        <td>
        {product.price}
        </td>
        <td>
        {product.qty}
        </td>
    </tr>
);

export default CartRow;