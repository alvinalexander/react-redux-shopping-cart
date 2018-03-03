import React, { Component } from 'react';

const CartItemsList = ({total, children}) => (
    <table className="table">
        <thead>
            <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {children}
            <tr>
                <td>
                    Total:
                </td>
                <td>
                    {total}
                </td>
                <td>
                </td>
            </tr>
        </tbody>
    </table>
);

export default CartItemsList;