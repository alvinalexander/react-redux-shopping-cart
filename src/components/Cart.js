import React, { Component } from 'react';
import CartItemsList from "./CartItemsList";

class Cart extends Component {
    render(){
        return(
            <div>
                <h1>Cart</h1>
                <CartItemsList items={this.props.items}/>
            </div>

        );
    }
}

export default Cart;