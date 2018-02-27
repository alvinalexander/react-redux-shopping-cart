import React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
const App = () =>(
    <div className="App">
        <div className="container">
            <div className="row">
                <ProductsContainer />
            </div>
            <div>
                <CartContainer/>
            </div>

        </div>
    </div>
);
export default App;
