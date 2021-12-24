import React from 'react';

function ContactContainer(props) {
    return ( 
        <div className="contacts-container">
            <div><p><b>Name:</b>{props.name}</p></div>
            <div><p><b>Email:</b>{props.email}</p></div>
            <div><p><b>Date:</b>{new Date(props.createdAt).toLocaleString()}</p></div>
            <div>
                <p><b>Message:</b>
                    {props.message}
                </p>
            </div>
        </div>
    );
}

export default ContactContainer;