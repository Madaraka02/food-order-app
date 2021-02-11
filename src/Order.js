import React from 'react';
import './Order.css';
import ViewOrders from './ViewOrders'

function Order() {
    return (
        <div className="order">
            <ViewOrders
            image=""
            title ="Nuggets"
            quantity="10"
            price={20}
            /> 
            <ViewOrders
            image=""
            title ="wings"
            quantity="5"
            price={7}
            /> 
            <ViewOrders
            image=""
            title ="wings"
            quantity="5"
            price={7}
            /> 
            <ViewOrders
            image=""
            title ="wings"
            quantity="5"
            price={7}
            /> 
        </div>
    )
}

export default Order
