import React, { useState } from 'react';
import logo from '../Assets/Logo.png' // Ensure you have this image in the appropriate folder folder

const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };
    return (
        <>
            <header>
                <div className="header d-none d-lg-block">
                    <div className="container">
                        <div className="row">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">
                                    <a className="navbar-brand col-2" href="#"><img src={logo} alt="Logo" /></a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item p-3 text-center">
                                                <a className="nav-link active text-primary fw-bold" aria-current="page" href="index.html">Home</a>
                                            </li>
                                            <li className="nav-item servicemenu dropdown megamenu-li dmenu d-flex align-items-center">
                                                <a className="nav-link link_hover dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                                                <div className="dropdown-menu megamenu sm-menu border-top" aria-labelledby="dropdown01">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-sm-6 col-lg-3 border-right mb-4">
                                                                <h6 className="d-flex align-items-center">
                                                                    Web Development
                                                                </h6>
                                                                <a className="dropdown-item" href="#">React js Development</a>
                                                                <a className="dropdown-item" href="#">Node js Development</a>
                                                                <a className="dropdown-item" href="#">PHP Development</a>
                                                                <a className="dropdown-item" href="#">Laravel Development</a>
                                                                <a className="dropdown-item" href="#">WordPress Development</a>
                                                                <a className="dropdown-item" href="#">Shopify Development</a>
                                                                <a className="dropdown-item" href="#">Angular Development</a>
                                                                <a className="dropdown-item" href="#">Wix Development</a>
                                                                <a className="dropdown-item" href="#">Webflow Development</a>
                                                            </div>

                                                            <div className="col-sm-6 col-lg-3 border-right mb-4">
                                                                <h6 className="d-flex align-items-center">
                                                                    Graphic Design
                                                                </h6>
                                                                <a className="dropdown-item" href="#">Packaging Design</a>
                                                                <a className="dropdown-item" href="#">Info Graphic Design</a>
                                                                <a className="dropdown-item" href="#">Logo Design</a>
                                                                <a className="dropdown-item" href="#">Branding Identity</a>
                                                                <a className="dropdown-item" href="#">Print Design</a>
                                                            </div>

                                                            <div className="col-sm-6 col-lg-3 border-right mb-4">
                                                                <h6 className="d-flex align-items-center">
                                                                    UI/UX Design
                                                                </h6>
                                                                <a className="dropdown-item" href="#">App Design</a>
                                                                <a className="dropdown-item" href="#">UI/UX Design</a>
                                                                <a className="dropdown-item" href="#">Web Design</a>
                                                            </div>

                                                            <div className="col-sm-6 col-lg-3 border-right mb-4">
                                                                <h6 className="d-flex align-items-center">
                                                                    Mobile Apps
                                                                </h6>
                                                                <a className="dropdown-item" href="#">iOS</a>
                                                                <a className="dropdown-item" href="#">Android</a>
                                                                <a className="dropdown-item" href="#">Cross Platform</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item p-3 text-center">
                                                <a className="nav-link link_hover" aria-disabled="true" href="#">Portfolio</a>
                                            </li>
                                            <li className="nav-item py-3 ps-0 pe-3 text-center">
                                                <a className="nav-link link_hover" aria-disabled="true" href="#">Company</a>
                                            </li>
                                            <li className="nav-item py-3 ps-0 pe-3 text-center">
                                                <a className="nav-link link_hover" href="contact.html">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <form className="d-none d-lg-flex justify-content-center" role="search">
                                        <a href="tel:+918200845977" className="nav-link bg-primary text-light fw-normal border-0 rounded-2">
                                            <i className="bi-solid bi-phone-flip pe-2 bell"></i>+91 8200845977
                                        </a>
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <header>
                <div className="header d-block d-lg-none">
                    <div className="container">
                        <div className="row">

                            <nav className="navbar navbar-expand-lg">

                                <div className="container-fluid d-flex">
                                    <a className="navbar-brand col-2" href="#"><img src={logo} alt="Logo" /></a>
                                    <button
                                        className={`navbar-toggler ${isCollapsed ? '' : 'collapsed'}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded={!isCollapsed ? 'true' : 'false'}
                                        aria-label="Toggle navigation"
                                        onClick={toggleNavbar}
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div
                                        className="collapse navbar-collapse"
                                        id="navbarSupportedContent"
                                    >
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item p-3 text-center">
                                                <a className="nav-link active" aria-current="page" href="#">
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item dropdown text-center">
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Services
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Mobile Apps
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Web Development
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            {" "}
                                                            Graphic Design
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            {" "}
                                                            Game Development
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            UI/UX Design
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            3D Modeling
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown p-3 text-center">
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Technologies
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item p-3 text-center">
                                                <a className="nav-link disabled" aria-disabled="true">
                                                    Portfolio
                                                </a>
                                            </li>
                                            <li className="nav-item py-3 ps-0 pe-3  text-center">
                                                <a className="nav-link disabled" aria-disabled="true">
                                                    Company
                                                </a>
                                            </li>
                                            <li className="nav-item py-3 ps-0 pe-3  text-center">
                                                <a
                                                    className="nav-link disabled"
                                                    aria-disabled="true"
                                                    href="contact.html"
                                                >
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>
                                        <form className="d-flex justify-content-center" role="search">
                                            <a
                                                href="tel:8200845977"
                                                className="bg-primary text-light fw-normal border-0 rounded-2"
                                            >
                                                <i className="fa-solid fa-phone-flip pe-2 bell " />
                                                +91 8200845977
                                            </a>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>

    );
}

export default Header;
