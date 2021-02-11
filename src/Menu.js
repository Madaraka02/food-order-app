import React from 'react';
import './Menu.css';

function Menu() {
    return (
        <div className="menu">
            <div className="menu__breakfast">
                <div>
                <h4 className="menu__breakfastTitle">BREAKFAST MEALS</h4>
                </div>
                <div className="menu__breakfastContent">
                <div className="menu__breakfastCard">
                <img src="/images/food6.jfif" alt=""/>
                <h5>Name: </h5>
                <p>Description</p>
                </div>
                <div className="menu__breakfastCard">
                <img src="/images/food6.jfif" alt=""/>
                <h5>Name: </h5>
                <p>Description</p>
                </div>
                <div className="menu__breakfastCard">
                <img src="/images/food6.jfif" alt=""/>
                <h5>Name: </h5>
                <p>Description</p>
                </div>
                <div className="menu__breakfastCard">
                <img src="/images/food6.jfif" alt=""/>
                <h5>Name: </h5>
                <p>Description</p>
                </div>
                </div>
            </div>
            <div className="menu__brunch">
                <div className="menu__">
                <h4 className="menu__brunchTitle">BRunch MEALS</h4>
                </div>
                <div className="menu__brunchContent">
                <div className="menu__brunchCard">
                <img src="/images/food15.jfif" alt=""/>
                <h5>Name: </h5>
                <p>Description</p>
                </div>
                <div className="menu__brunchCard">
                <img src="/images/food15.jfif" alt=""/>
                <h5>Name: </h5>
                <p>Description</p>
                </div>
                <div className="menu__brunchCard">
                <img src="/images/food18.jfif" alt=""/>
                <h5>Name: </h5>
                <p>Description</p>
                </div>
                <div className="menu__brunchCard">
                <img src="/images/food16.jfif" alt=""/>
                <h5>Name: </h5>
                <p>Description</p>
                </div>
                </div>
            </div>
            <div className="menu__lunch">
                <div>
                <h4 className="menu__lunchTitle">lunch MEALS</h4>
                </div>
                <div className="menu__lunchContent">
                <div className="menu__lunchCard">
                <img src="/images/food15.jfif" alt=""/>
                <h5>Name: </h5>
                <p>Description</p>
                </div>
                <div className="menu__lunchCard">
                <img src="/images/food18.jfif" alt=""/>
                <h5>Name: </h5>
                <p>Description</p>
                </div>
                <div className="menu__lunchCard">
                <img src="/images/food16.jfif" alt=""/>
                <h5>Name: </h5>
                <p>Description</p>
                </div>
                <div className="menu__lunchCard">
                <img src="/images/food16.jfif" alt=""/>
                <h5>Name: </h5>
                <p>Description</p>
                </div>
                </div>
            </div>
            <div className="menu__supper">
            <h4 className="menu__supperTitle">supper MEALS</h4>
            </div>
            
        </div>
    )
}

export default Menu
