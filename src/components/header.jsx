import React, { Component } from 'react';
// import '../css/header.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                <div class="logo">
                    <img src="/images/logo.svg" alt="" />
                </div>
                <div class="hamburger-menu">
                    <img src="/images/menu.svg" alt="" />
                </div>
            </header>
        );
    }
}
 
export default Header;