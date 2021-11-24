import React, { useState, useEffect } from 'react';
// import { Component } from 'react';
// import React, { Component } from 'react';
import { debounce } from '../utilities/helpers';
// import * as Scroll from 'react-scroll';
import { Link } from "react-scroll";
// import { Link, scrollSpy, animateScroll as scroll } from "react-scroll";
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

// import '../css/header.css';
function Header() {
    
    // state = {  }
    
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [menu, setMenu] = useState();
    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
    
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    
        setPrevScrollPos(currentScrollPos);
    }, 100);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    
    }, [prevScrollPos, visible, handleScroll]);

    const navbarStyles = {
        position: 'fixed',
        transition: 'top 0.6s'
    }        

    // function handleMenuClick(e) {
    //     e.preventDefault();
    //     alert("this");
    // }
    return ( 
        <header>
            <div className={`top-navigation ${menu ? 'disable-background' : ''}`} style={{ ...navbarStyles, top: visible ? '0' : '-60px' }}>
            
            
                <div className="nav-align">
                    <div className="logo">
                        <img src="/images/logo.svg" alt="" />
                    </div>
                    <div className="hamburger-menu">
                        {/* <img src="/images/menu.svg" alt="" /> */}
                        <div className="ham-menu" onClick={() => setMenu(!menu)}>
                            <span id="1"></span>
                            <span id="2"></span>
                            <span id="3"></span>
                            <span id="4"></span>
                        </div>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><Link activeClass="active-nav-link" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                        <li><Link activeClass="active-nav-link" to="about" spy={true} smooth={true} duration={500}>About</Link></li>
                        <li><Link activeClass="active-nav-link" to="projects" spy={true} smooth={true} duration={500}>Projects</Link></li>
                        <li><Link activeClass="active-nav-link" to="employment" spy={true} smooth={true} duration={500}>Employment</Link></li>
                        <li><Link activeClass="active-nav-link" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
                    </ul>
                    <a href="resume.pdf"><button>Resume</button></a>
                </nav>    
            </div>
            <div className={`active-menu nav ${menu ? "menu-active" : ""}`} >
                {/* <h1>NuLife Marketing</h1> */}
                <ul>
                    <li><Link activeClass="active-nav-link" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                    <li><Link activeClass="active-nav-link" to="about" spy={true} smooth={true} duration={500}>About</Link></li>
                    <li><Link activeClass="active-nav-link" to="projects" spy={true} smooth={true} duration={500}>Projects</Link></li>
                    <li><Link activeClass="active-nav-link" to="employment" spy={true} smooth={true} duration={500}>Employment</Link></li>
                    <li><Link activeClass="active-nav-link" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
                </ul>
                <a href="resume.pdf"><button>Resume</button></a>
            </div>                        
        </header>
    );
};

// class Header extends Component {
    
//     // state = {  }
//     constructor(props) {
//         super(props);
//         this.state = {
//             prevScrollPos: 0,
//             visible: true,
//             menu: false,
//         }
//     }
//     // const [prevScrollPos, setPrevScrollPos] = useState(0);
//     // const [visible, setVisible] = useState(true);
//     // const [menu, setMenu] = useState();
//     handleScroll = debounce(() => {
//         const currentScrollPos = window.pageYOffset;
    
//         // setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
//         this.setState({ visible: (this.state.prevScrollPos > currentScrollPos && this.state.prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10 });
    
//         // setPrevScrollPos(currentScrollPos);
//         this.setState({prevScrollPos: currentScrollPos})
//     }, 100);
//     componentDidMount() {
//         window.addEventListener('scroll', this.handleScroll);
//     }
//     componentDidUpdate() {
//         window.addEventListener('scroll', this.handleScroll);
//     }
//     // useEffect(() => {
//     //     window.addEventListener('scroll', handleScroll);
    
//     //     return () => window.removeEventListener('scroll', handleScroll);
    
//     // }, [prevScrollPos, visible, handleScroll]);

//     navbarStyles = {
//         position: 'fixed',
//         transition: 'top 0.6s'
//     }  

//     render() {
//         return ( 
//             <header>
//                 <div className="top-navigation" style={{ ...this.navbarStyles, top: this.visible ? '0' : '-60px' }}>
                
                
//                     <div className="nav-align">
//                         <div className="logo">
//                             <img src="/images/logo.svg" alt="" />
//                         </div>
//                         <div className="hamburger-menu">
//                             {/* <img src="/images/menu.svg" alt="" /> */}
//                             <div className="ham-menu" onClick={() => !this.menu}>
//                                 <span id="1"></span>
//                                 <span id="2"></span>
//                                 <span id="3"></span>
//                                 <span id="4"></span>
//                             </div>
//                         </div>
//                     </div>
//                     <nav>
//                         <ul>
//                             <li>Home</li>
//                             <li>About</li>
//                             <li>Projects</li>
//                             <li>Employment</li>
//                             <li>Contact</li>
//                         </ul>
//                         <button>Resume</button>
//                     </nav>    
//                 </div>
//                 <div className={`active-menu nav ${this.menu ? "menu-active" : ""}`} >
//                     {/* <h1>NuLife Marketing</h1> */}
//                     <ul>
//                         <li className="home-link"><a href="#home">Home</a></li>
//                         <li className="about-link"><a href="#about">About</a></li>
//                         <li className="contact-link"><a href="#contact">Contact</a></li>
//                     </ul>
//                 </div>                        
//             </header>
//         );
//     }
// };

// function Header() {
//     return ( 
//         <header>
//             <div class="logo">
//                 <img src="/images/logo.svg" alt="" />
//             </div>
//             <div class="hamburger-menu">
//                 <img src="/images/menu.svg" alt="" />
//             </div>
//         </header>
//     );
// }
 
export default Header;