import React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';

const App = () =>(
    <div className="App">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <ProductsContainer />
                </div>
                <div className="col-md-6">
                    <CartContainer/>
                </div>
            </div>
            <div>

            </div>

        </div>
    </div>
);
export default App;
