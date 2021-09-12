import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from 'yup';

import { RegisterAction } from '../../Redux/Actions/UserAction'
import IconShare from '../../IconShare';
export default function Register() {

    const SignupSchema = yup.object().shape({
        hoTen: yup.string().required('Không được để trống').max(20, 'Tối thiểu 20 kí tự'),
        email: yup.string().required('Không được để trống').email("email không đúng định dạng"),
        soDt: yup.string().required('Không được để trống').matches(/^[0-9]+$/, 'Số điện thoại không hợp lệ'),
        taiKhoan: yup.string().required('Không được để trống').max(20, 'Tối thiểu 20 kí tự'),
        matKhau: yup.string().required('Không được để trống').min(8, 'Mật khẩu không được thấp hơn 8 kí tự')
    });

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(SignupSchema) });
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
    const RegisterContent = styled.div`
        width: 100%;
        max-width: 700px;
        margin: 100px auto;
        padding: 40px 20px;
        background: rgba(0,0,0,0.6);
        border-radius:10px;
        box-shadow: 0 0 10px 5px #173d65;`

    return (
        <section className="backgroundLogin_register p-4">
            <RegisterContent className="">
                <h3 className="text-center text-success">WELLCOME TO</h3>
                <h1 className="text-center text-white mb-5">FLEX CINEMA</h1>
                <form className="row p-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6 mb-5">
                        <label>FULL NAME <span className="text-danger mb-2">*</span></label>
                        <input className="inputSignInUp" placeholder="Enter @Your Full Name" {...register('hoTen')} />
                        {errors.hoTen && <span className="text-danger ">{errors.hoTen.message}<i class='bx bx-message-error mx-2'></i></span>}
                    </div>
                    <div className="col-md-6 mb-5">
                        <label>PHONE NUMBER <span className="text-danger mb-2">*</span></label>
                        <input className="inputSignInUp" placeholder="Enter @Your Phone Number" {...register('soDt')} />
                        {errors.soDt && <span className="text-danger ">{errors.soDt.message}<i class='bx bx-message-error mx-2'></i></span>}
                    </div>
                    <div className="col-md-6 mb-5">
                        <label>EMAIL<span className="text-danger mb-2">*</span></label>
                        <input className="inputSignInUp" placeholder="Enter @Your Email Address" {...register('email')} />
                        {errors.email && <span className="text-danger ">{errors.email.message}<i class='bx bx-message-error mx-2'></i></span>}
                    </div>
                    <div className="col-md-6 mb-5">
                        <label>KIND OF PERSON <span className="text-danger mb-2">*</span></label>
                        <select className="inputSignInUp" {...register('maLoaiNguoiDung')}>
                            <option value={'KhachHang'}>Thành viên</option>
                            <option value={'QuanTri'}>Quản trị viên</option>
                        </select>
                    </div>
                    <div className="col-md-12 mb-5">
                        <label>USER NAME <span className="text-danger mb-2"> *</span></label>
                        <input className="inputSignInUp" type="text" placeholder="Enter@ Your UserName" {...register('taiKhoan')} />
                        {errors.taiKhoan && <span className="text-danger ">{errors.taiKhoan.message}<i class='bx bx-message-error mx-2'></i></span>}
                    </div>
                    <div className="col-md-12 mb-4">
                        <label>PASS WORD <span className="text-danger mb-2">*</span></label>
                        <input className="inputSignInUp" type="password" placeholder="Enter@ Your Password" {...register('matKhau')} />
                        {errors.matKhau && <span className="text-danger ">{errors.matKhau.message}<i class='bx bx-message-error mx-2'></i></span>}
                    </div>
                    <div className="pl-3 mb-5">
                        <span style={{ fontSize: '16px' }}><input className="" type="checkbox" />I Agree To The <span className="text-success">Terms, Privacy Policy</span> And <span className="text-success">Fees</span></span>
                    </div>
                    <div className="col-12 text-center mb-4"><button type="submit" className="btnSignInUp">Sign up</button></div>
                    <div className="col-12 text-center mb-4">Already have an account? <NavLink className='text-success' to={"/register"}>Login now </NavLink></div>
                    <div className="col-12 d-flex"><hr /><div className=" text-center px-5">OR</div><hr />
                    </div>
                    <div className="col-12"><IconShare/></div>
                </form>
            </RegisterContent>
        </section>
    )
}