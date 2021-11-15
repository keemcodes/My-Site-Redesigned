import React, { useState, useEffect } from 'react';
// import React, { Component } from 'react';
// import { useState, useEffect } from 'react';
import { debounce } from '../utilities/helpers';

// import '../css/header.css';
function Header() {
    
    // state = {  }
    
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    
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
    return ( 
        <header style={{ ...navbarStyles, top: visible ? '0' : '-60px' }}>
            <div className="logo">
                <img src="/images/logo.svg" alt="" />
            </div>
            <div className="hamburger-menu">
                <img src="/images/menu.svg" alt="" />
            </div>
        </header>
    );
};

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