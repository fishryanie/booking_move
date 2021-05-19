import React from 'react'
import styled from 'styled-components'
import bgLogin from '../../Assets/img/bg_login.jpeg'
export default function Register() {

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
                <section className="container">
                <form className="row p-3">
                    <div className="col-md-6 mb-3">
                        <input className="form-control main rounded-pill" type="text" placeholder="Your Full Name" name="name" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input className="form-control main rounded-pill" type="text" name="phoneNumber" placeholder="Your Phone Number" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input className="form-control main rounded-pill" type="email" name="email" placeholder="Your Email Address" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input className="form-control main rounded-pill" type="date" name="email" placeholder="Your Date Of Birth" required />
                    </div>
                    <div className="col-md-12 mb-3">
                        <input className="form-control main rounded-pill" type="text" name="email" placeholder="UserName" required />
                    </div>
                    <div className="col-md-12 mb-3">
                        <input className="form-control main rounded-pill" type="password" name="email" placeholder="Password" required />
                    </div>
                    <div className="col-md-12 mb-3">
                        <select class="form-control rounded-pill" id="exampleFormControlSelect1">
                            <option>Thành viên</option>
                            <option>Quản trị viên</option>
                        </select>
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary fs-5 px-5">Sign in</button>
                    </div>
                </form>


                </section>

            </LoginContent>
        </Login>
    )
}
