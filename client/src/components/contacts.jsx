import  {useEffect, useState} from 'react';
// import TimelineContainer from './timeline-container';
import ReactHtmlParser from 'react-html-parser';
import ContactContainer from './contact-container';


function Projects({forwardRef, inView}) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("/api/contacts")
            .then((res) => res.json())
            .then((result) => {
                setContacts(result)
                // console.log(result)
            },
            (error) => {
                console.log(error)

            })
            // .catch((r) =>
        
    }, [])
    return ( 
        <>
            <section id='contacts' className={`fade-in-section ${inView ? 'is-visible' : ''}`} ref={forwardRef}>
                <div className="heading-title">
                    <h1>Forms</h1>
                </div>
                <h3>Contact Form Submissions</h3>
                <div className="contact">
                        { contacts.map(contact => (
                            <ContactContainer 
                                key={contact.id}
                                name={contact.name}
                                email={contact.email}
                                createdAt={contact.createdAt}
                                message={ReactHtmlParser(contact.message)}
                            />
                        ))}
                    {/* <div className="contact-container">
                        <div><p><b>Name:</b>Akeem Anderson</p></div>
                        <div><p><b>Email:</b>akeeminbox@gmail.com</p></div>
                        <div><p><b>Date:</b>January 9, 2021 (3:33PM)</p></div>
                        <div>
                            <p><b>Message:</b>
                            Message is the realest this is so cool bro please contact me I'd love to see more of your work. I'm on discord as well</p>
                        </div>
                    </div>
                    <div className="contact-container">
                        <div><p><b>Name:</b>Akeem Anderson</p></div>
                        <div><p><b>Email:</b>akeeminbox@gmail.com</p></div>
                        <div><p><b>Date:</b>January 9, 2021 (3:33PM)</p></div>
                        <div>
                            <p><b>Message:</b>
                            Message is the realest this is so cool bro please contact me I'd love to see more of your work. I'm on discord as well</p>
                        </div>
                    </div>
                    <div className="contact-container">
                        <div><p><b>Name:</b>Akeem Anderson</p></div>
                        <div><p><b>Email:</b>akeeminbox@gmail.com</p></div>
                        <div><p><b>Date:</b>January 9, 2021 (3:33PM)</p></div>
                        <div>
                            <p><b>Message:</b>
                            Message is the realest this is so cool bro please contact me I'd love to see more of your work. I'm on discord as well</p>
                        </div>
                    </div>
                    <div className="contact-container">
                        <div><p><b>Name:</b>Akeem Anderson</p></div>
                        <div><p><b>Email:</b>akeeminbox@gmail.com</p></div>
                        <div><p><b>Date:</b>January 9, 2021 (3:33PM)</p></div>
                        <div>
                            <p><b>Message:</b>
                            Message is the realest this is so cool bro please contact me I'd love to see more of your work. I'm on discord as well</p>
                        </div>
                    </div>
                    <div className="contact-container">
                        <div><p><b>Name:</b>Akeem Anderson</p></div>
                        <div><p><b>Email:</b>akeeminbox@gmail.com</p></div>
                        <div><p><b>Date:</b>January 9, 2021 (3:33PM)</p></div>
                        <div>
                            <p><b>Message:</b>
                            Message is the realest this is so cool bro please contact me I'd love to see more of your work. I'm on discord as well</p>
                        </div>
                    </div> */}
                </div>
            </section>
        </>  
    );
}

export default Projects;