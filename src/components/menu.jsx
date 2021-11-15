import React, { Component } from 'react';
// import '../css/header.css';

class Menu extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="active-menu">
                {/* <h1>NuLife Marketing</h1> */}
                <ul>
                    <li className="home-link"><a href="#home">Home</a></li>
                    <li className="about-link"><a href="#about">About</a></li>
                    <li className="contact-link"><a href="#contact">Contact</a></li>
                </ul>
            </div>  
        );
    }
}

// function Home() {

//     return ( 
//         <section className="home">
//             <div className="page-title">Hello World!</div>
//             <div className="page-photo-icon">
//                 <img src="/images/me.png" alt="" />
//             </div>
//             <div className="page-intro">My name is Keem</div>
//             <div className="page-description">I design and build apps</div>
//             <div className="page-button"><button>REACH ME</button></div>
//         </section>
//     );
// }
 
export default Menu;