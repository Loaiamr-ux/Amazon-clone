import React ,{useState} from 'react'
import { Link, useHistory} from 'react-router-dom'
import "./Login.css"
import { auth } from "./firebase"

function Login() {
    const history = useHistory();
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

          const login = (event) => {
            event.preventDefault();

           auth.signInWithEmailAndPassword(email,password)
           .then((auth) => {
                history.push("/");
           })
           .catch (e => alert(e.message));
          };

          const register = (event) => {
            event.preventDefault();

            auth.createUserWithEmailAndPassword(email,password)
            .then(auth => {
                history.push("/");
            })
            .catch (e => alert(e.message));
          };


    return (
        <div className="login">
            <Link>
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
                
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form >
                <h5>E-mail</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} ype="email" />
                    <h5>Password</h5>
                    <input value={password}  onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login_signinbutton">Sign in</button>
                </form>
               <p>
               By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
               </p>
               <button onClick={register} className="login_registerbutton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
