import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <h3 className="mt-5">Registration a new account</h3>
            <div className="container w-25 mt-5">
                <div className="mb-3">
                    <input type="text" className="form-control" id="name" placeholder="Full name" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Enter your email address" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Give a strong password" />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Register</button>
                <br/>
                <Link className="text-decoration-none text-dark" to='/login'>Already registration? Click me <i class="fas fa-mouse"></i></Link>
            </div>
        </div>
    );
};

export default Registration;