import React from 'react';

const ProductsList = ({title, children}) => {
    return (
        <div>
            <h1>{title}</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Inventory</th>
                </tr>
                </thead>
                <tbody>
                {children}
                </tbody>
            </table>
        </div>
    )
};

export default ProductsList;
