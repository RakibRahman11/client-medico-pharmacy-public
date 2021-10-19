import React from 'react';
import logo from '../../Images/logo.png'
import login from '../../Images/login.png'
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const { user, logout, isLogin } = useAuth()

    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container w-100">
                    <a className="navbar-brand" href="/home">
                        <img src={logo} alt="" width="70" height="60" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="mb-2 navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/contact">Contact</a>
                            </li>
                        </ul>
                        <img className='rounded-circle me-2' src={user.photoURL} alt="" />
                        {user.displayName}
                        {isLogin.displayName}
                        <form className="d-flex">
                            {
                                user.displayName ?  
                                    <button onClick={logout} className='btn '>Logout</button> :
                                    <a className="navbar-brand" href="/login">
                                        {user.displayName} <img src={login} alt="" width="30" height="25" />
                                    </a>
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;