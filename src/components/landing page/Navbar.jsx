import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/transparentlogo.png";
import Styles from "../../styles/landing page/Navbar.module.css";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light p-1 ">
                <div className="container">
                    <img src={`${logo}`} alt="logo" height={65} />
                    <Link className={`navbar-brand ${Styles.title}`} href="#">SNAPBUG</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${Styles.nav_item}`} aria-current="page" href="#">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${Styles.nav_item}`} href="#">Board</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${Styles.nav_item}`} href="#">Tickets</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${Styles.nav_item}`} href="#">Bugs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${Styles.nav_item}`} href="#">Reports</Link>
                            </li>


                        </ul>
                        <form className={`d-flex pe-3 ${Styles.search_form}`} role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className={`btn ${Styles.search_btn}`} type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className ="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg></button>
                        </form>

                        <Link className={`${Styles.signin} ms-3`}>Sign in</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;