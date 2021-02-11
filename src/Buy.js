import React from 'react';
import './Buy.css';

function Buy() {
    return (
        <div className="breakfast">
                <div className="breakfast__pageCard">
                    <img src="/images/food5.jfif" alt=""/>
                    <h5 className="breakfast__pageCardTitle">Name:</h5>
                    <p className="breakfast__pageCardPrice">Price: $</p>
                    <button className="breakfast__button">Buy</button>
            </div>
                <div className="breakfast__pageCard">
                    <img src="/images/food6.jfif" alt=""/>
                    <h5 className="breakfast__pageCardTitle">Name:</h5>
                    <p className="breakfast__pageCardPrice">Price: $</p>
                    <button className="breakfast__button">Buy</button>
            </div>
                <div className="breakfast__pageCard">
                    <img src="/images/food7.jfif" alt=""/>
                    <h5 className="breakfast__pageCardTitle">Name:</h5>
                    <p className="breakfast__pageCardPrice">Price: $</p>
                    <button className="breakfast__button">Buy</button>
            </div>
                <div className="breakfast__pageCard">
                    <img src="/images/food8.jfif" alt=""/>
                    <h5 className="breakfast__pageCardTitle">Name:</h5>
                    <p className="breakfast__pageCardPrice">Price: $</p>
                    <button className="breakfast__button">Buy</button>
            </div>
        </div>
    )
}

export default Buy;
