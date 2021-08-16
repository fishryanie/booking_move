import React from 'react'
import imgInfo01 from "../../Assets/img/ImageContact/contact_info_01.png"
import imgInfo02 from "../../Assets/img/ImageContact/contact_info_02.png"
import Carousel_contact from '../Carousel/BannerCarousel'
import FilmSlider from '../Carousel/FilmSlider'
import Footer from '../Footer/Footer'
import "../../Scss/Contact.scss"

export default function Contact() {
    return (
        <section className="contact text-light" style={{background:'#001232'}}>
            <Carousel_contact title="CONTACT US" content="contact content"></Carousel_contact>
            <section className="contact_content">
                <div className="position-relative w-100">
                    <div className="container-fluid">
                        <div className="row justify-content-between">
                            <div className="col-md-7 col-lg-6 col-xl-5"></div>
                            <div className="col-md-5 col-lg-6 bg_thumb"></div>
                        </div>
                    </div>
                    <div className="position-absolute w-100" style={{ top: '0', left: '0' }}>
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-md-7 col-lg-6 col-xl-5 ">
                                    <h3 className="text-success">CONTACT US</h3>
                                    <h1>GET IN TOUCH</h1>
                                    <p className="mb-5">We’d love to talk about how we can work together. Send us a message below and we’ll respond as soon as possible.</p>
                                    <form>
                                        <div className="mb-4">
                                            <label>Name <span className="text-danger">*</span></label>
                                            <input type="email" placeholder="Enter Your Name"/>
                                        </div>
                                        <div className="mb-4">
                                            <label>Email <span className="text-danger">*</span></label>
                                            <input type="text" placeholder="Enter Your Email"/>
                                        </div>
                                        <div className="mb-4">
                                            <label>Subject<span className="text-danger">*</span></label>
                                            <input type="text" placeholder="Enter Your Subject"/>
                                        </div>
                                        <div className="mb-5">
                                            <label>Message <span className="text-danger">*</span></label>
                                            <textarea className ="p-2" placeholder="Enter Your Message"  rows={3} defaultValue={""} />
                                        </div>
                                        <button type="submit" className="btnSendContact">Send Message</button>
                                    </form>
                                </div>
                                <div className="col-md-5 col-lg-6 contact_info pl-0">
                                    <div className="row " style={{padding:'50px 20px', background: '#001232'}}>
                                        <div className="d-flex col-sm-6 col-md-12 col-xl-6 p-0" style={{borderRight: '2px solid rgba(255, 255, 255, 0.2)'}}>
                                            <div className="col-3"><img src={imgInfo01} alt="" /></div>
                                            <div className="col-9">
                                                <h6>PHONE NUMBER</h6>
                                                <a className="text-success" href="">0979955925</a>
                                            </div>
                                        </div>
                                        <div className="d-flex col-sm-6 col-md-12 col-xl-6 p-0">
                                        <div className="col-3"><img src={imgInfo02} alt="" /></div>
                                            <div className="col-9">
                                                <h6>Email</h6>
                                                <a className="text-success" href="">flex_cinema@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        <FilmSlider></FilmSlider>
        <Footer></Footer>
        </section>
    )
}
