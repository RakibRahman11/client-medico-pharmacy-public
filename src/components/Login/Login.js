import React from 'react';
import { Link } from 'react-router-dom';
import firebaseInit from '../../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

firebaseInit()

const Login = () => {
    const {googleLogin} = useAuth()
    return (
        <div>
            <h3 className="mt-5">Login to your account</h3>
            <div className="container w-25 mt-5">
                <div className="mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Please enter your email"/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Login</button>
                <br/>
                <Link className="text-decoration-none text-dark" to='/registration'>New user? Click me <i class="fas fa-mouse"></i></Link>
                <br/>
                <p className="my-5">-----------------------------------------</p>
                <button onClick={googleLogin} type="button" className="btn btn-outline-dark bg-white text-dark"><i className="fab fa-google"></i> Sign in to Goggle</button>
            </div>
        </div>
    );
};

export default Login;