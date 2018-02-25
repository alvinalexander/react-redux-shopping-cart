import React, { Component } from 'react';
import CartItemRow from './CartItemRow';
class CartItemsList extends Component{

    constructor(props){
         super(props);
         this.totalCost = this.totalCost.bind(this);
    }

    totalCost(items){
        let totalCost = 0;
        items.forEach((item) =>{
           totalCost = totalCost + (item.qty * item.price);
        });

        return totalCost;
    }

    render(){
        const items = this.props.items;
        const rows = [];
        items.forEach((item) =>{
            if(item.qty>0){
                rows.push(<CartItemRow item={item} key={item.name}/>);
            }
        });
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                    <tr>
                        <td>
                            Total:
                        </td>
                        <td>
                            {this.totalCost(items)} 
                        </td>
                        <td>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default CartItemsList;