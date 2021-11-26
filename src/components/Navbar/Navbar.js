import React from 'react';
import logo from '../../Images/logo.png'
import login from '../../Images/login.png'
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { user, logout, isLogin } = useAuth()

    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container w-100">
                    <Link className="navbar-brand" to="/home">
                        <img src={logo} alt="" width="70" height="60" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="mb-2 navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <img className='rounded-circle me-2' src={user.photoURL} alt="" />
                        {user.displayName}
                        {isLogin.displayName}
                        <form className="d-flex">
                            {
                                user.displayName ?
                                    <button onClick={logout} className='btn '>Logout</button> :
                                    <Link className="navbar-brand" to="/login">
                                        {user.displayName} <img src={login} alt="" width="30" height="25" />
                                    </Link>
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;