
import React from 'react'
import styled from 'styled-components'
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { LoginAction } from '../../Redux/Actions/UserAction';
import { NavLink } from 'react-router-dom';
import "./login.css"

export default function Login() {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        console.log(data);
        let userLogin = {
            "taiKhoan": data.userName,
            "matKhau": data.passWord
        };
        dispatch(LoginAction(userLogin));

    }
    const LoginContent = styled.div`
        width: 100%;
        max-width: 540px;
        margin: 100px auto;
        padding: 45px;
        background: rgba(0,0,0,0.6);
        border-radius:10px;
        box-shadow: 0 0 10px 5px #173d65;
    `
    const BtnLodgin = styled.button`
        background: -webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%);
        border: none;
        letter-spacing: 3px;
        outline: none;
        font-weight: 800;
        font-family: 'Times New Roman', Times, serif;
    `
    const Input = styled.input`
        width:100%;
        background: none;
        outline: none;
        border : none;
        color:#fff;
        border-bottom:1px solid white !important;
    `

    return (
        <section className="Login backgroundLogin_register">
            <LoginContent className="animate__animated animate__backInDown">
                <h3 className="text-center text-success">PLEASE LOGIN</h3>
                <h1 className="text-center text-white mb-5">TO USE THE SERVICE</h1>
                <form className="" onSubmit={handleSubmit(onSubmit)} className="text-light">
                    <div className="col-md-12 mb-5">
                        <label>USER NAME <span className="text-danger mb-2">*</span></label>
                        <Input placeholder="Enter Your Username" type="text"  {...register("userName", { required: true })} />
                        {errors?.userName?.type === 'required' && <span className="text-danger font-italic" style={{fontSize:'15px',}}>This field is required</span>}
                    </div>
                    <div className="col-md-12 mb-4">
                        <label>PASS WORD <span className="text-danger mb-2">*</span></label>
                        <Input placeholder="Enter Your Password" type="password"{...register("passWord", { required: true })} />
                        {errors?.passWord?.type === 'required' && <span className="text-danger font-italic" style={{fontSize:'15px',}}>This field is required</span>}
                    </div>
                    <div className="checkbox">
                        <span className=""><input className="" type="checkbox" />Remember Password</span>
                        <NavLink className="text-right text-light font-italic" style={{fontSize:'15px',}}  to="">Forrgot passWord</NavLink>
                    </div>
                    <div className="col-12 text-center mt-5 mb-3">
                        <BtnLodgin className="btnLogin rounded-pill text-light px-5 p-2" type="submit" >Login</BtnLodgin>
                    </div>
                    <div className="text-center mb-4">Don't have an account? <NavLink className='text-success' to={"/register"}>Sign up now </NavLink></div>
                    <div className="d-flex">
                        <hr/>
                        <div className=" text-center px-5">OR</div>
                        <hr/>
                    </div>
                    <div className="icon text-center mt-3">
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-google-plus-square mx-5"></i>
                        <i class="fab fa-twitter-square"></i>
                    </div>
                </form>
            </LoginContent>
        </section>
    )
}