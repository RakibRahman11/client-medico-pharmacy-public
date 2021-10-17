import React from 'react';
import logo from '../../Images/logo.png'
import login from '../../Images/login.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="" width="70" height="60" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="mb-2 navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <a className="navbar-brand" href="/">
                                <img src={login} alt="" width="30" height="25" />
                            </a>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;