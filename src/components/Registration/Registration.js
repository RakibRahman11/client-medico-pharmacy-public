import React from 'react';
import { Link} from 'react-router-dom';
import firebaseInit from '../../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';

firebaseInit()

const Registration = () => {
    const { handleRegistration, handleName, handleEmail, handlePassword } = useAuth()
    
    return (
        <div>
            <h3 className="mt-5">Registration a new account</h3>
            <form onSubmit={handleRegistration} className="container mt-5 w-25">
                <div className="mb-3">
                    <input onBlur={handleName} type="text" className="form-control" id="name" placeholder="Full name" />
                </div>
                <div className="mb-3">
                    <input onBlur={handleEmail} type="email" className="form-control" id="email" placeholder="Enter your email address" />
                </div>
                <div className="mb-3">
                    <input onBlur={handlePassword} type="password" className="form-control" id="password" placeholder="Give a strong password" />
                </div>
                <button type="submit" className="mb-2 btn btn-primary">Register</button>
                <br />
                <Link className="text-decoration-none text-dark" to='/login'>Already registration? Click me <i className="fas fa-mouse"></i></Link>
            </form>
        </div>
    );
};

export default Registration;