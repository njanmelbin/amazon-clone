import React,{useState} from 'react'
import './Login.css'
import {Link,useHistory} from 'react-router-dom';
import {auth} from './firebase';
function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        // some firebase stuff 
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth) => {
                history.push('/')
            }) 
            .catch(error => {
                alert(error.message);
            })
    }

    const register = e => {
        e.preventDefault();
        // do some firebase register
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                console.log(auth);
                if(auth){
                    history.push('/')
                }
            }).catch(error =>{
                alert(error.message);
            })
    }
    
    return (
        <div className="login">
            <h1>Login Page</h1>
            <Link to ='/'>
            <img 
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_log.svg/1024px-Amazon_logo.svg.png"/>
            </Link>
           <div className="login__container">
                <h1>SignIn</h1>
                <form action="">
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={ e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={ e => setPassword(e.target.value)}/>
                    <button type="submit" onClick={signIn}
                     className="login__SignInButton">SignIn</button>  
                </form>  
                <p>
                    By signing In you agree to Amazon Clone
                    conditions of use & sale.Please see our 
                    Privacy notice,our cookies notice and our interest
                    based Ads Notice.
                </p>  
                <button 
                    onClick={register}
                className="login__registerButton">Create your Amazon Account</button>
           </div>
        </div>
    )
}

export default Login
