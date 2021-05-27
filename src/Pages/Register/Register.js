import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useForm } from "react-hook-form";
import styled from 'styled-components'
import bgLogin from '../../Assets/img/bg_login.jpeg'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import {RegisterAction} from '../../Redux/Actions/UserAction'
export default function Register() {

    const SignupSchema = yup.object().shape({
        hoTen: yup.string().required('Không được để trống').max(20, 'Tối thiểu 20 kí tự'),
        email: yup.string().required('Không được để trống').email("email không đúng định dạng"),
        soDt: yup.string().required('Không được để trống').matches(/^[0-9]+$/, 'Số điện thoại không hợp lệ'),
        taiKhoan: yup.string().required('Không được để trống').max(20, 'Tối thiểu 20 kí tự'),
        matKhau: yup.string().required('Không được để trống').min(8, 'Mật khẩu không được thấp hơn 8 kí tự')
    });

    const { register,  handleSubmit,  formState:{ errors }  } = useForm({resolver: yupResolver(SignupSchema)});
    const onSubmit = (data) => {
        let dataRegister = {
            'taiKhoan': data.taiKhoan,
            'matKhau': data.matKhau,
            'email': data.email,
            'soDt': data.soDt,
            'maNhom': 'GP01',
            'maLoaiNguoiDung': data.maLoaiNguoiDung,
            "hoTen": data.hoTen,
        }
        RegisterAction(dataRegister);
        console.log(dataRegister);
    }

    const Register = styled.div`
    background: url(${bgLogin});
    background-size: 100%;
    height: 100vh;`

    const RegisterContent = styled.div`
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)`

    return (
        <Register>
            <RegisterContent>
                <section className="container">
                    <h1 className="text-white text-center">Register</h1>
                    <form className="row p-3" onSubmit = {handleSubmit(onSubmit)}>
                        <div className="col-md-6 mb-3">
                            <input className="form-control main rounded-pill" placeholder="Your Full Name" {...register('hoTen')} />
                                {errors.hoTen &&  <span className="text-danger ml-3">{errors.hoTen.message}<i class='bx bx-message-error mx-2'></i></span>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <input className="form-control main rounded-pill" placeholder="Your Phone Number" {...register('soDt')} />
                            {errors.soDt &&  <span className="text-danger ml-3">{errors.soDt.message}<i class='bx bx-message-error mx-2'></i></span>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <input className="form-control main rounded-pill" placeholder="Your Email Address" {...register('email' )} />
                            {errors.email &&  <span className="text-danger ml-3">{errors.email.message}<i class='bx bx-message-error mx-2'></i></span>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <select class="form-control rounded-pill" {...register('maLoaiNguoiDung')}>
                                <option value={'KhachHang'}>Thành viên</option>
                                <option value={'QuanTri'}>Quản trị viên</option>
                            </select>
                        </div>
                        <div className="col-md-12 mb-3">
                            <input className="form-control main rounded-pill" type="text" placeholder="UserName" {...register('taiKhoan' )} />
                            {errors.taiKhoan &&  <span className="text-danger ml-3">{errors.taiKhoan.message}<i class='bx bx-message-error mx-2'></i></span>}
                        </div>
                        <div className="col-md-12 mb-3">
                            <input className="form-control main rounded-pill" type="password" placeholder="Password" {...register('matKhau' )} />
                            {errors.matKhau &&  <span className="text-danger ml-3">{errors.matKhau.message}<i class='bx bx-message-error mx-2'></i></span>}
                        </div>
                        <div className="col-12 text-center"><button type="submit" className="btn btn-primary fs-5 px-5">Sign in</button></div>
                    </form>
                </section>
            </RegisterContent>
        </Register>
    )
}
