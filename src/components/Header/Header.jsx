import React from 'react'

export default function Header() {
    return (
        <>
            <div className="header-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="logo"><a href="#"><img src="images/logo.png" alt="" width='80px' /></a></div>
                        </div>
                        <div className="col-lg-3 col-md-5">
                            {/* <div className="active-profile">More Than<strong> 70,000</strong> <span>Active Profiles</span> </div> */}
                        </div>
                        <div className="col-lg-5 col-md-7">
                            <div className="usertoplinks">
                                <ul className="usernav">
                                    <li><a href="#"><i className="fas fa-sign-in-alt"></i> Login</a></li>
                                    <li><a href="#" className="reg"><i className="far fa-user"></i> Register</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}

            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container"> <a className="navbar-brand" href="#">Menu</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item"> <a className="nav-link" href="#">Home</a>
                            </li>

                            <li className="nav-item"> <a className="nav-link" href="#">Profile</a> </li>

                            <li className="nav-item"> <a className="nav-link" href="#">About US</a> </li>

                            <li className="nav-item"> <a className="nav-link" href="#">Contact US</a> </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
