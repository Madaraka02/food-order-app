import React from 'react';
import './Lunch.css';

function Lunch() {
    return (
        <div className="lunch">
                <div className="lunch__pageCard">
                    <img src="/images/food4.jfif" alt=""/>
                    <h5 className="lunch__pageCardTitle">Name: Mukimo</h5>
                    <p className="lunch__pageCardPrice">Price: 20$</p>
                    <button className="lunch__button">Buy</button>
            </div>
                <div className="lunch__pageCard">
                    <img src="/images/food3.jfif" alt=""/>
                    <h5 className="lunch__pageCardTitle">Name: Pizza</h5>
                    <p className="lunch__pageCardPrice">Price: 12$</p>
                    <button className="lunch__button">Buy</button>
            </div>
                <div className="lunch__pageCard">
                    <img src="/images/food2.jfif" alt=""/>
                    <h5 className="lunch__pageCardTitle">Name: Ugali</h5>
                    <p className="lunch__pageCardPrice">Price: 10$</p>
                    <button className="lunch__button">Buy</button>
            </div>
                <div className="lunch__pageCard">
                    <img src="/images/food1.jfif" alt=""/>
                    <h5 className="lunch__pageCardTitle">Name: Beef</h5>
                    <p className="lunch__pageCardPrice">Price: 3$</p>
                    <button className="lunch__button">Buy</button>
            </div>
        </div>
    )
}

export default Lunch;
