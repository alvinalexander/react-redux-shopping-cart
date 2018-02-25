import React, { Component } from 'react';
import ShoppingCart from './components/ShoppingCart';
import _products from './api/products.json';
const PRODUCTS = _products;

class App extends Component {
    render() {
        return (
            <div className="App">

                <div className="container">
                    <div className="row">
                       <ShoppingCart products={PRODUCTS}/>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
