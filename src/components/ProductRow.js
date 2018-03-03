import React from 'react';
const ProductRow = ({product, onAddToCartClicked}) => {
    let input;
    return (
        <tr>
            <td>
                {product.title}
            </td>
            <td>
                {product.price}
            </td>
            <td>
                {product.inventory}
            </td>
            <td>
                <select name={product.title}
                        ref={node =>{
                            input = node;
                        }}
                >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </td>
            <td>
                <button
                    onClick={ () => {
                        onAddToCartClicked(product.id, parseInt(input.value));
                        input.value ="0";
                    }}
                >
                    Add to Cart
                </button>
            </td>
        </tr>
    )
};

export default ProductRow;

