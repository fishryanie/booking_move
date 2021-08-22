import React from 'react'
import logo from '../../Assets/Images/logo.svg'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import FilmManagement from './FilmManagement'
import Member from './Member'
import MovieSchedule from './MovieSchedule'
export default function Admin() {
    const dispatch = useDispatch();
    return (
        <section className="">
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <div className="">
                    <NavLink className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/"><img src={logo} alt="" /></NavLink>
                    <button className="navbar-toggler position-absolute d-md-none collapsed bg-dark " style={{ right: '0', top: '10%' }} type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
                <input className="form-control form-control-dark w-100 rounded-pill" type="text" placeholder="Search" aria-label="Search" />
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap"><NavLink className="nav-link" to="/login"  onClick ={()=>{dispatch({type:'LOG_OUT'})}}>Sign out</NavLink></li>
                </ul>
            </header>

            <div className="">
                <div className="row w-100 m-0 vh-100">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
                        <div className="nav flex-column nav-pills mt-5" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link nav-item active mb-2 text-white"  id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><i class='bx bx-film mr-2' style={{fontSize:'20px'}} ></i>Quản lý người dùng</a>
                            <a className="nav-link nav-item mb-2 text-white" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i class='bx bx-camera-movie mr-2' style={{fontSize:'20px'}}></i>Quản lý phim</a>
                            <a className="nav-link nav-item mb-2 text-white" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class='bx bxs-user-pin mr-2' style={{fontSize:'20px'}}></i>Quản lý lịch chiếu</a>
                            <a className="nav-link nav-item mb-2 text-white" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i class='bx bxs-cog mr-2' style={{fontSize:'20px'}}></i>Settings</a>
                        </div>
                    </nav>

                        <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><Member></Member></div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"> <FilmManagement></FilmManagement></div>
                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><MovieSchedule></MovieSchedule></div>
                                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                            </div>
                        </div>



                </div>
            </div>

        </section>
    )
}
