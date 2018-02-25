import React, { Component } from 'react';

class CartItemRow extends Component {
    render () {
        return (
            <tr>
                <td>
                    {this.props.item.name}
                </td>
                <td>
                    {this.props.item.qty}
                </td>
                <td>
                    {this.props.item.qty * this.props.item.price}
                </td>
            </tr>
        );
    }
}
export default CartItemRow;