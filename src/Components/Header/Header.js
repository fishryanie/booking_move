import React from 'react'
import "./Header.css"
import logo from "../../Assets/img/logo.svg"
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
export default function Header() {
    const {taiKhoan} = useSelector(state=>state.UserReducer);
    const {loaiNguoiDung} = useSelector(state=>state.UserReducer);
    console.log(loaiNguoiDung)
    const dispatch = useDispatch();
    // let active = 'active'
    return (
        <header className="position-absolute top-0 start-0 w-100">
            <div className="container pt-3 text-center">
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
                            <li className="nav-item px-3"><NavLink className="nav-link text-light nav-item"  to="/home"> HOME </NavLink></li>
                            <li className="nav-item px-3"><NavLink className="nav-link text-light nav-item" to="/contact">CONTACTS</NavLink></li>
                            <li className="nav-item px-3"><NavLink className="nav-link text-light nav-item" to="/register">REGISTER</NavLink></li>
                            <li className="nav-item px-3 active dropdown">
                                {taiKhoan !== '' ? <NavLink to="" className="nav-link text-white dropdown-toggle"  id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">{taiKhoan}
                                </NavLink> : <NavLink className="nav-link text-light " to="/login">LOGIN</NavLink>}
                                <ul className="dropdown-menu bg-transparent" aria-labelledby="navbarScrollingDropdown" style={{border:'none'}} >
                                    {loaiNguoiDung === 'QuanTri' ? <li className="nav-item mb-2"><NavLink className="nav-link dropdown-item text-white" to="/admin">Admin</NavLink></li> : null}
                                    <li className="nav-item mb-2"><a className="nav-link dropdown-item text-white" href="#">QUẢN LÝ TÀI KHOẢN</a></li>
                                    <li className="nav-item mb-2"><a className="nav-link dropdown-item text-white" onClick ={()=>{dispatch({type:'LOG_OUT'})}} href="#">ĐĂNG XUẤT</a></li>
                                </ul>
                            </li>
                            <li className="nav-item px-3"><a className="nav-link text-light" href="#">SITTING</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
