import React, { useEffect } from 'react'
import styled from 'styled-components'
import './acb.css'
import bgLogin from '../../Assets/img/bg_login.jpeg'
import { useDispatch, useSelector } from 'react-redux'
import { GetListUser } from '../../Redux/Actions/UserAction'
export default function Admin() {


    const listUser = useSelector(state => state.UserReducer.listUser)
    console.log(listUser);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetListUser())
    }, [])

    let renderListContact = () => {
        return listUser?.map((item, index) => {
            return (
                <tr key={index}>
                    <td >{item.hoTen}</td>
                    <td>{item.email}</td>
                    <td>{item.soDt}</td>
                    <td>{item.taiKhoan}</td>
                    <td>{item.matKhau}</td>
                </tr>
            )
        })
    }
    let bg = { background: 'linear-gradient(to top, #530044, #26001C)', backgroundSize: '100%' }
    let style = { paddingTop: '200px' }

    return (
        <section>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
                    <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
                    <a class="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
            </div>
        </section>
    )
}
