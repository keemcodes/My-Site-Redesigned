import React from 'react';

function Home({forwardRef, inView}) {

    return ( 
        <section id='home' ref={forwardRef} className={`home fade-in-section ${inView ? 'is-visible' : ''}`}>
            <div className="page-title">Hello World!</div>
            <div className="page-photo-icon">
                <img src="/images/me.png" alt="" />
            </div>
            <div className="page-intro">My name is Keem</div>
            <div className="page-description">I design and build apps</div>
            
            <div className="page-button"><a href="mailto:akeeminbox@gmail.com"><button>REACH ME</button></a></div>
        </section>
    );
}
 
export default Home;