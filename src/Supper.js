import React from 'react';
import './Supper.css';

function Supper() {
    return (
        <div className="supper">
                <div className="supper__pageCard">
                    <img src="/images/food13.jfif" alt=""/>
                    <h5 className="supper__pageCardTitle">Name:</h5>
                    <p className="supper__pageCardPrice">Price: $</p>
                    <button className="supper__button">Buy</button>
            </div>
                <div className="supper__pageCard">
                    <img src="/images/food12.jfif" alt=""/>
                    <h5 className="supper__pageCardTitle">Name:</h5>
                    <p className="supper__pageCardPrice">Price: $</p>
                    <button className="supper__button">Buy</button>
            </div>
                <div className="supper__pageCard">
                    <img src="/images/food11.jfif" alt=""/>
                    <h5 className="supper__pageCardTitle">Name:</h5>
                    <p className="supper__pageCardPrice">Price: $</p>
                    <button className="supper__button">Buy</button>
            </div>
                <div className="supper__pageCard">
                    <img src="/images/food10.jfif" alt=""/>
                    <h5 className="supper__pageCardTitle">Name:</h5>
                    <p className="supper__pageCardPrice">Price: $</p>
                    <button className="supper__button">Buy</button>
            </div>
        </div>
    )
}

export default Supper;
