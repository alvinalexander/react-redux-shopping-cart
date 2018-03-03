import React from 'react';
import CartRow from './CartRow';


const Cart =({products, total}) => {
    //list products
    // display total
    // checkout button.
    const rows = products.map(product => {
        return (<CartRow
            product={product}

        />)
    });
    return (
        <div>
            <h1>Cart</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Qty</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                <tr>
                    <h3>Total: $ {total}</h3>
                </tr>
                </tbody>

            </table>

        </div>
    )

};

export default Cart;