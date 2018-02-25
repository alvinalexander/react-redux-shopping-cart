import React, { Component } from 'react';

class InventoryProductRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.product.name}
                </td>
                <td>
                    {this.props.product.price}
                </td>
                <td>
                    <select name={this.props.product.name} onChange={this.props.onQtyChange}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </td>
                <td>
                    <button>Add to Cart</button>
                </td>
            </tr>
        );
    }
}

export default InventoryProductRow;