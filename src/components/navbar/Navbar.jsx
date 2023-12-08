import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "./Navbar.css";


const Navbar = () => {
    const [ToggleMenu, setToggleMenu] = useState(false)
    return (
        <>
            <nav className="app__navbar">
                <div className="app__navbar-logo">
                    <img src="" alt="app logo" />
                </div>
                <ul className="app__navbar-links">
                    <li className="p_opensans">
                        <a href="#home">Home</a>
                    </li>
                    <li className="p_opensans">
                        <a href="#about">About</a>
                    </li>
                    <li className="p_opensans">
                        <a href="#menu">Job Listing</a>
                    </li>
                    <li className="p_opensans App_page">
                        <a href="#awards">Pages</a>
                        <ul className="app__navbar-links-dropdown">
                            <li className="p_opensans">
                                <a href="#home">Service</a>
                            </li>
                            <li className="p_opensans">
                                <a href="#about">Testimonial</a>
                            </li>
                            <li className="p_opensans">
                                <a href="#menu">FAQ</a>
                            </li>
                        </ul>
                    </li>
                    <li className="p_opensans">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <div className="app__navbar-login">
                    <a className="p_opensans " href="#login">
                        Post A Job
                    </a>
                    <div />
                    <a className="p_opensans" href="/">
                        Login
                    </a>
                </div>
                <div className="app__navbar-smallscreen">

                    <GiHamburgerMenu color="#000" frontsize={27} onClick={() => { setToggleMenu(true) }} />
                    {ToggleMenu && (
                        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                            <MdClose
                                frontsize={27}
                                onClick={() => { setToggleMenu(false) }}
                                className="overlay__close"
                            />
                            <ul className="app__navbar-smallscreen-links">
                                <li className="p_opensans">
                                    <a href="#home">Home</a>
                                </li>
                                <li className="p_opensans">
                                    <a href="#about">About</a>
                                </li>
                                <li className="p_opensans">
                                    <a href="#menu">Job Listing</a>
                                </li>
                                <li className="p_opensans">
                                    <a href="#home">Service</a>
                                </li>
                                <li className="p_opensans">
                                    <a href="#about">Testimonial</a>
                                </li>
                                <li className="p_opensans">
                                    <a href="#menu">FAQ</a>
                                </li>
                                <li className="p_opensans">
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};
export default Navbar;
