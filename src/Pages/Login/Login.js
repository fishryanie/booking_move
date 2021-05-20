import React from 'react'
import styled from 'styled-components'
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux'
import { useForm } from "react-hook-form";
import { LoginAction } from '../../Redux/Actions/UserAction';
import btnFB from"../../Assets/img/btn-FB.png"
import btnGG from "../../Assets/img/btn-Google.png"
import bgLogin from '../../Assets/img/bg_login.jpeg'
import  { NavLink } from 'react-router-dom';


export default function Login() {
    const dispatch = useDispatch();
    const { register,  handleSubmit,  formState:{ errors }  } = useForm();
    const onSubmit = (data) => {

        console.log(data);
        let userLogin = {
                "taiKhoan": data.userName,
                "matKhau": data.passWord
        };
        dispatch(LoginAction(userLogin));

    }


    const Login = styled.div`
    background: url(${bgLogin});
    background-size: 100%;
    height: 100vh;`

    const LoginContent = styled.div`
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)`

    return (


        <Login>
            <LoginContent>
                <h1 className="text-center text-white">Đăng Nhập</h1>
                <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6 d-block mx-auto mb-3">
                        <input className="form-control main rounded-pill px-3" placeholder="UserName"{...register("userName", {required:true})}  />
                        {errors?.userName?.type === 'required' && <span className="text-danger ml-3">This field is required</span>}
                    </div>
                    <div className="col-md-6 d-block mx-auto mb-3">
                        <input className="form-control main rounded-pill px-3" type="password" placeholder="PassWord" {...register("passWord",{required:true})}  />
                        {errors?.passWord?.type === 'required' && <span className="text-danger ml-3">This field is required</span>}
                    </div>
                    <div className="col-md-6 d-block mx-auto mb-3">
                        <div className="row">
                            <a className="col-md-6 d-block text-center" href="">Forgot passWord</a>
                            <NavLink className="col-md-6 d-block text-center" to={"register"}>Đăng kí thành viên</NavLink>
                        </div>
                    </div>
                    <div className="row col-md-6 mx-auto mb-3">
                        <img className="w-100 col-6" src={btnFB} alt=""/>
                        <img className="w-100 col-6" src={btnGG} alt=""/>
                    </div>
                    <div className="col-12 text-center mt-5">
                        <button type="submit" className="btn btn-primary fs-5 px-5">Login</button>
                    </div>
                </form>
            </LoginContent>
        </Login>

    )
}
