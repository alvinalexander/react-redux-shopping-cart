import React, { Component } from 'react';
import Inventory from './Inventory';
import Cart from './Cart';

class ShoppingCart extends Component {
    constructor(props){
        super(props);
        this.state = {itemsInCart: []}; // this can be changed into a map for more efficent execution.
        this.updateCart = this.updateCart.bind(this);
        this.handleQtyChange = this.handleQtyChange.bind(this);
        this.getPrice = this.getPrice.bind(this);
    }
    updateCart(newItem){
        //This function takes in a new cart item object and returns a new cart array that can be passed to setState.
        let newCart = this.state.itemsInCart.slice();

       //find index of item
        const indexOfItem = newCart.findIndex((item) =>{
            return item.name === newItem.name;
        });


        // if in cart. update that index
        if(indexOfItem !== -1){
            newCart[indexOfItem] = newItem;
        }else{
            newCart.push(newItem);
        }

        return newCart;

    }
    getPrice(itemName){
        const product = this.props.products.find((product) =>{
            return product.name === itemName;
        });

        if(product !== undefined){
            return product.price;
        }else{
            return -1;
        }
    }
    handleQtyChange(e){
        //loop over current cart.
        //if items is in cart. update the value
        //else add the item
        const price = this.getPrice(e.target.name);
        const newCart = this.updateCart({name: e.target.name, qty: e.target.value, price: price});
        this.setState({itemsInCart: newCart});

    }
    render() {

        return(
            <div>
                <div className="col-lg-6">
                    <Inventory products={this.props.products} onQtyChange={this.handleQtyChange}/>
                </div>
                <div className="col-lg-6">
                    <Cart items={this.state.itemsInCart} />
                </div>
            </div>
        );
    }
}

export default ShoppingCart;