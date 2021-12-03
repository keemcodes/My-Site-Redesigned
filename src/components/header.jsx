import React, { useState, useEffect } from 'react';
// import { Component } fr
import { debounce } from '../utilities/helpers';
import { Link } from "react-scroll";

function Header() {
    
    
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [menu, setMenu] = useState();
    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
    
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    
        setPrevScrollPos(currentScrollPos);
    }, 100);
    
    useEffect(() => {
        if (menu === true) {
            document.body.style.overflowY = 'hidden'
            setVisible( false )
        }
        else {
            document.body.style.overflowY = 'scroll'
            window.addEventListener('scroll', handleScroll);
            
        }
        return () => window.removeEventListener('scroll', handleScroll);
        
    
    
    }, [prevScrollPos, visible, handleScroll, menu]);



    const navbarStyles = {
        position: 'fixed',
        transition: 'top 0.3s'
    }        


    return ( 
        <header>
            <div className={`top-navigation ${menu ? 'disable-background' : ''}`} style={{ ...navbarStyles, top: visible ? '0' : '-60px' }}>
            
            
                <div className="nav-align">
                    <div className="logo" style={{position: menu ? 'fixed' : 'absolute'}}>
                        <a href="#home"><img src="/images/logo.svg" alt="" /></a>
                        
                    </div>
                    <div className='hamburger-menu' style={{position: menu ? 'fixed' : 'absolute'}}>
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
                        <li><Link activeClass="active-nav-link" to="home" spy={true} smooth={true} hashSpy={true} duration={350} offset={-100}>Home</Link></li>
                        <li><Link activeClass="active-nav-link" to="about" spy={true} smooth={true} hashSpy={true} duration={350} offset={-100}>About</Link></li>
                        <li><Link activeClass="active-nav-link" to="projects" spy={true} smooth={true} hashSpy={true} duration={350} offset={-100}>Projects</Link></li>
                        <li><Link activeClass="active-nav-link" to="employment" spy={true} smooth={true} hashSpy={true} duration={350} offset={-100}>Employment</Link></li>
                        <li><Link activeClass="active-nav-link" to="contact" spy={true} smooth={true} hashSpy={true} duration={350} offset={-100}>Contact</Link></li>
                    </ul>
                    <a href="resume.pdf"><button>Resume</button></a>
                </nav>    
            </div>
            <div className={`active-menu nav ${menu ? "menu-active" : ""}`} >
                {/* <h1>NuLife Marketing</h1> */}
                <ul>
                    <li><Link activeClass="active-nav-link" to="home" spy={true} smooth={true} hashSpy={true} duration={350} offset={-100}>Home</Link></li>
                    <li><Link activeClass="active-nav-link" to="about" spy={true} smooth={true} hashSpy={true} duration={350} offset={-100}>About</Link></li>
                    <li><Link activeClass="active-nav-link" to="projects" spy={true} smooth={true} hashSpy={true} duration={350} offset={-100}>Projects</Link></li>
                    <li><Link activeClass="active-nav-link" to="employment" spy={true} smooth={true} hashSpy={true} duration={350} offset={-100}>Employment</Link></li>
                    <li><Link activeClass="active-nav-link" to="contact" spy={true} smooth={true} hashSpy={true} duration={350} offset={-100}>Contact</Link></li>
                </ul>
                <a href="resume.pdf"><button>Resume</button></a>
            </div>                        
        </header>
    );
};


 
export default Header;