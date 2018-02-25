import React, { Component } from 'react';
import InventoryList from './InventoryList';


class Inventory extends Component{

    render(){
        return (
            <div>
                <h1> Products </h1>
                <InventoryList products={this.props.products} onQtyChange={this.props.onQtyChange}/>

            </div>
        );
    }
}

export default Inventory;