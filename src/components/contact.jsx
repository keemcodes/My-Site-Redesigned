import React, { Component } from 'react';
// import '../css/header.css';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div className="heading-title">
                    <h1>Contact Me</h1>
                </div>
                <h3>Hit Me Up</h3>
                <div className="contact-body">
                    <p>
                        Feel free to leave a message or email me any inquires. Or if you want to just say hey that's cool too! 
                    </p>
                </div>
                <div className="contact-buttons">
                    <button>LEAVE MESSAGE</button>
                    <button>EMAIL ME</button>
                </div>
                
            </>
        );
    }
}

// function Contact() {
//     return ( 
//         <section>
//             <div className="heading-title">
//                 <h1>Contact Me</h1>
//             </div>
//             <h3>Hit Me Up</h3>
//             <div className="contact-body">
//                 <p>
//                     Feel free to leave a message or email me any inquires. Or if you want to just say hey that's cool too! 
//                 </p>
//             </div>
//             <div className="contact-buttons">
//                 <button>LEAVE MESSAGE</button>
//                 <button>EMAIL ME</button>
//             </div>
            
//         </section>
//     );
// }
 
export default Contact;