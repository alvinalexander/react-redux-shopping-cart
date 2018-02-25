import React, { Component } from 'react';
import InventoryProductRow from "./InventoryProductRow";

class InventoryList extends Component{
    render(){
        const products = this.props.products;
        const rows = products.map((product) =>{
            return <InventoryProductRow product={product} key={product.name} onQtyChange={this.props.onQtyChange}/>
        });

        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Price per Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default InventoryList;