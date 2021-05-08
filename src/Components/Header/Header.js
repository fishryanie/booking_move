import React from 'react'
import "./Header.css"
import logo from "../../Assets/img/logo.svg"
import { NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <header className="position-absolute top-0 start-0 w-100">
            <div className="container pt-3">
                <a className="text-light text-right mb-0 d-block" href="#">
                    <i className="fa fa-phone" />
                    <span className="border-right pr-2 mx-2">033 4643 124</span>
                    <i className="fa fa-search" />
                </a>

                {/* NAVBAR */}
                <nav className="navbar navbar-expand-lg navbar-dark pt-0">
                    <a className="navbar-brand py-0" href="#"><img src={logo} alt={logo} /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto border-bottom">
                            <li className="nav-item active px-3"><NavLink className="nav-link text-light" to="/home"> HOME </NavLink></li>
                            <li className="nav-item px-3"><a className="nav-link text-light" href="#">BOOKING</a></li>
                            <li className="nav-item px-3"><a className="nav-link text-light" href="#">MOVE</a></li>
                            <li className="nav-item px-3"><a className="nav-link text-light" href="#">NEWS</a></li>
                            <li className="nav-item px-3"><NavLink className="nav-link text-light" to="/contact">CONTACTS</NavLink></li>
                            <li className="nav-item px-3"><a className="nav-link text-light" href="#">Login / Sign in</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
