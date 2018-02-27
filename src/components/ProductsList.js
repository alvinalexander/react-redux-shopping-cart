import React from 'react';

const ProductsList = ({title, children}) => (
    <div>
        <h1>{title}</h1>
        <table className="table">
            <thead>
            <tr>
                <th>Item Name</th>
                <th>Price per Unit</th>
            </tr>
            </thead>
            <tbody>
            {children}
            </tbody>
        </table>
    </div>
);

export default ProductsList;
