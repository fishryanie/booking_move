import React from 'react'
import styled from 'styled-components'
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux'
import {withFormik, useFormik} from 'formik';
import { LoginAction } from '../../Redux/Actions/UserAction';
import btnFB from"../../Assets/img/btn-FB.png"
import btnGG from "../../Assets/img/btn-Google.png"
import bgLogin from '../../Assets/img/bg_login.jpeg'
import  { NavLink } from 'react-router-dom';


export default function Login() {
    const dispatch = useDispatch();
    const {handleChange, handleSubmit, errors, handleBlur, touched, isValid} = useFormik({
        initialValues: {
            userName: '',
            passWord:'',
        },
        validationSchema: yup.object().shape({
            // taiKhoan: yup.string().required('Tài khoản không được bỏ trống!').min(6,'Tài khoản tối thiểu 6 ký tự!').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'email không hợp lệ'),
            taiKhoan: yup.string().required('Tài khoản không được bỏ trống!').min(6,'Tài khoản tối thiểu 6 ký tự!'),
            matKhau:yup.string().required('Mật khẩu không được bỏ trống !')
        }),
        onSubmit: (values) => {
            dispatch(LoginAction(values));
        }
    })
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
                <form className="p-3" onSubmit={handleSubmit}>
                    <div className="col-md-6 d-block mx-auto mb-3">
                        <input className="form-control main rounded-pill px-3" type="text" placeholder="UserName" name="userName" onChange={handleChange} onBlur={handleBlur} />
                        {errors.taiKhoan && touched.taiKhoan ? <p className="text-danger">{errors.taiKhoan}</p>: ''}
                    </div>
                    <div className="col-md-6 d-block mx-auto mb-3">
                        <input className="form-control main rounded-pill px-3" type="password" name="passWord" placeholder="PassWord" onChange={handleChange}onBlur={handleBlur} />
                        {errors.matKhau && touched.matKhau ? <p className="text-danger">{errors.matKhau}</p>: ''}
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
