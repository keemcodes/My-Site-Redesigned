import React, { Component } from 'react';

class Menu extends Component {
    render() { 
        return ( 
            <div className="active-menu">
                <ul>
                    <li className="home-link"><a href="#home">Home</a></li>
                    <li className="about-link"><a href="#about">About</a></li>
                    <li className="contact-link"><a href="#contact">Contact</a></li>
                </ul>
            </div>  
        );
    }
}

export default Menu;