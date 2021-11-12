import React, { Component } from 'react';
// import '../css/header.css';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <section class="home">
                <div class="page-title">Hello World!</div>
                <div class="page-photo-icon">
                    <img src="/images/me.png" alt="" />
                </div>
                <div class="page-intro">My name is Keem</div>
                <div class="page-description">I design and build apps</div>
                <div class="page-button"><button>REACH ME</button></div>
            </section>
        );
    }
}
 
export default Home;