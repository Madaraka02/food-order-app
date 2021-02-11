import React from 'react';
import './Display.css';
import Menu from './Menu';

function Display() {
    return (
        <div className="display">
            <h4> WELCOME TO OUR RESTAURANT</h4>
            <p>Our menu is listed below</p>
            <Menu/>
            
        </div>
    )
}

export default Display
