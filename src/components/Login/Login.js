import React from 'react';
import { Link, useLocation, useHistory} from 'react-router-dom';
import firebaseInit from '../../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';

firebaseInit()

const Login = () => {
    const {googleLogin, signInUsingEmail, handleEmail, handlePassword} = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_ui = location.state?.from || '/home'
    const handleGoogleSignin = () => {
        googleLogin()
            .then(result => {
                history.push(redirect_ui);
            })
    }
    return (
        <div>
            <h3 className="mt-5">Login to your account</h3>
        <div>
            <form onSubmit={signInUsingEmail} className="container mt-5 w-25">
                <div className="mb-3">
                    <input onBlur={handleEmail} type="email" className="form-control" id="email" placeholder="Please enter your email"/>
                </div>
                <div className="mb-3">
                    <input onBlur={handlePassword} type="password" className="form-control" id="password" placeholder="Enter your password" />
                </div>
                <button type="submit" className="mb-2 btn btn-primary">Login</button>
                <br/>
            </form>
                <Link className="text-decoration-none text-dark" to='/registration'>New user? Click me <i className="fas fa-mouse"></i></Link>
                <br/>
                <p className="my-5">-----------------------------------------</p>
                <button onClick={handleGoogleSignin} type="button" className="bg-white btn btn-outline-dark text-dark"><i className="fab fa-google"></i> Sign in to Goggle</button>
            </div>
        </div>
    );
};

export default Login;