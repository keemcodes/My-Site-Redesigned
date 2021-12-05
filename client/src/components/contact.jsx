import React from 'react';
import ContactForm from './contact-form'

function Contact({forwardRef, inView}) {
    return ( 
        <>
            <section id='contact' className={`fade-in-section ${inView ? 'is-visible' : ''}`} ref={forwardRef}>

                <div className="heading-title">
                    <h1>Contact Me</h1>
                </div>
                <div className="contact-container">

                    <h3>Hit Me Up</h3>
                    <div className="contact-body">
                        <p>
                            Feel free to leave a message or email me any inquires. Or if you want to just say hey that's cool too! 
                        </p>
                    </div>
                    <ContactForm />
                </div>

            </section>  
        </>
    );
}
 
export default Contact;