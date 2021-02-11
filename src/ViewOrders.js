import React from 'react';
import './ViewOrders.css';

function ViewOrders({image, title,price,quantity}) {
    return (
        <div className="viewOrders">
            <div className="viewOrders__page">
                <div className="viewOrders__pageCard">
                    <img src={image} alt=""/>
                    <h5 className="viewOrders__pageCardTitle">Name: {title}</h5>
                    <p className="viewOrders__pageCardQuantity">Quantity: {quantity}</p>
                    <p className="viewOrders__pageCardPrice">Price: {price} $</p>
                    <button className="viewOrders__button">Buy</button>
                </div>
            </div>
        </div>
    )
}

export default ViewOrders
