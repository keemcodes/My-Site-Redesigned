import React from 'react';
import LoginForm from './login-form'

function Contact({forwardRef, inView}) {
    return ( 
        <>
            <section id='login' className={`fade-in-section ${inView ? 'is-visible' : ''}`} ref={forwardRef}>

                <div className="heading-title">
                    <h1>Login Page</h1>
                </div>
                <div className="contact-container">

                    <LoginForm />
                </div>

            </section>  
        </>
    );
}
 
export default Contact;