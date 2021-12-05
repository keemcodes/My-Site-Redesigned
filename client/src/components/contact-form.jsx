import  {useState} from 'react';



function ContactForm() {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [response, setResponse] = useState({
        errors: {
            success: 'All fields required'
        },
    });
    function submit(e) {
        e.preventDefault();
        fetch("/formPost2", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((result) => {
            setResponse(result)
            console.log(result)
            if (result.errors.success === undefined) return;
            setData({
                name: "",
                email: "",
                message: ""
            })
        },
        (error) => {
            console.log(error)
        })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <>
            <div className="contact-form">
                <div className="contact-form-header"><h2>Send A Message</h2></div>
                <form onSubmit={(e) => submit(e)}>
                    <div className="contact-form-bar-outter">
                        <div className="contact-form-bar-line"></div>
                        <div className="contact-form-bar-round"></div>
                        <div className="contact-form-bar-round"></div>
                        <div className="contact-form-bar-round"></div>
                    </div>
                    <label htmlFor="name">Name</label>
                    <div className="input-icon-wrap">
                        <i className="fas fa-user"></i>
                        <input onChange={(e) => handle(e)} id='name' name='name' placeholder='' type="text" value={data.name}/>
                    </div>
                    <label htmlFor="email">Email</label>
                    <div className="input-icon-wrap">
                        <i className="fas fa-envelope"></i>
                        <input onChange={(e) => handle(e)} id='email' name='email' placeholder='' type="text" value={data.email}/>
                    </div>
                    <label htmlFor="message">Message</label>
                    <textarea onChange={(e) => handle(e)} id='message' name='message' placeholder='' type="text" value={data.message}/>
                    <input type="submit" value="Message Me" />
                    <div className="success-message">
                        <p>{response.errors.success ? response.errors.success : "Please enter a valid " + response.errors[0].param}</p>
                    </div>
                </form>
            </div>

        </>

    );
      
}
 
export default ContactForm;