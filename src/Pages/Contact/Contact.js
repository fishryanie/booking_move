import React from 'react'
import styled from 'styled-components'
import Footer from '../../Pages/Footer/Footer';
import background from '../../Assets/img/bg_login.jpeg'
export default function Contact() {
    const Login = styled.div`
    background : url(${background});
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
                    <section className="container p-5">
                        <h1 className="text-center text-light mb-3">Contact us</h1>
                        <form className="row">
                            <div className="col-md-6 mb-3">
                                <input className="form-control main rounded-pill" type="text" placeholder="Your Full Name" name="name" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <input className="form-control main rounded-pill" type="text" name="phoneNumber" placeholder="Your Phone Number" required />
                            </div>
                            <div className="col-md-12 mb-3">
                                <input className="form-control main rounded-pill" type="email" name="email" placeholder="Your Email Address" required />
                            </div>
                            <div className="col-md-12 mb-3">
                                <textarea className="form-control main" style={{ borderRadius: "30px" }} name="messages" rows={10} placeholder="Your Message" defaultValue={""} />
                            </div>
                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-outline-primary fs-5 px-5">Submit</button>
                            </div>
                        </form>
                    </section>
                </LoginContent>
            </Login>
    )
}
