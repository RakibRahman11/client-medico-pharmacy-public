import React from 'react';
import firebaseInit from '../../Firebase/firebase.init';
import useFirebase from '../../hooks/useFirebase';

firebaseInit()

const Login = () => {
    const {user, googleLogin} = useFirebase()
    return (
        <div>
            <h3 className="mt-5">Login to your account</h3>
            <div className="container w-25 mt-5">
                <div className="mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Please enter your email"/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Give a strong password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <p className="my-5">-----------------------------------------</p>
                <button onClick={googleLogin} type="button" class="btn btn-outline-dark bg-white text-dark"><i class="fab fa-google"></i> Sign in to Goggle</button>
            </div>
        </div>
    );
};

export default Login;