import  {useState, useContext} from 'react';
import { AuthContext } from '../Auth';


function LoginForm() {
    const { setIsAuth } = useContext(AuthContext)
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [response, setResponse] = useState('');
    function submit(e) {
        e.preventDefault();
        fetch("/api/auth/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((result) => {
            setResponse(result)
            setIsAuth(true);
            console.log(result)
        },
        (error) => {
            setResponse("Login failed")
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
                <div className="contact-form-header">
                    <i className="fas fa-signature"></i>
                    <h2>Login</h2>
                </div>
                <form onSubmit={(e) => submit(e)}>
                    <div className="contact-form-bar-outter">
                        <div className="contact-form-bar-line"></div>
                        <div className="contact-form-bar-round"></div>
                        <div className="contact-form-bar-round"></div>
                        <div className="contact-form-bar-round"></div>
                    </div>
                    <label htmlFor="name">Email</label>
                    <div className="input-icon-wrap">
                        <i className="fas fa-user"></i>
                        <input onChange={(e) => handle(e)} id='email' name='email' placeholder='' type="text" value={data.email}/>
                    </div>
                    <label htmlFor="email">Password</label>
                    <div className="input-icon-wrap">
                        <i className="fas fa-key"></i>
                        <input onChange={(e) => handle(e)} id='password' name='password' placeholder='' type="password" value={data.password}/>
                    </div>
                    <input type="submit" value="Login" />
                    <div className="success-message">
                        <p>{response.id ? "Login Successful" : response}</p>
                    </div>
                </form>
            </div>

        </>

    );
      
}
 
export default LoginForm;