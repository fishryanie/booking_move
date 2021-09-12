import React from 'react'
import styled from 'styled-components'
import bg from '../../Assets/Images/bg_login.jpeg'
import line from "../../Assets/Images/line-bg.png"
import thongbao from "../../Assets/Images/dathongbao.png"
import masterCard from "../../Assets/Images/payment-mastercard.png"
import vissa from "../../Assets/Images/payment-visa.png"
import newslater from '../../Assets/Images/newslater.jpeg'




const End = styled.div ` font-size: 14px;`
const IconFooter = styled.div `@media(max-width:992px) { margin-bottom: 10px !important }`
const TextEnd = styled.span `@media(max-width:576px) { margin: 0px 8px !important }`
const Background = styled.div`
background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${bg});
background-size: cover;
clip-path: polygon(50% 5%, 75% 11%, 100% 27%, 100% 70%, 100% 100%, 50% 100%, 0 100%, 0% 70%, 0 27%, 25% 11%);
`
const Contain01 = styled.div`
background:linear-gradient(to left, #5560ffb7 18%, #aa52a15d 65%, #ff43433f 100%), url(${newslater});
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
border-radius: 30px;
@media(max-width:576px) { padding: 20px 20px !important}
`
const Input = styled.input`
border-color: rgba(255, 255, 255, 0.5);
border-radius: 30px;
padding: 0px 20px;
background: none;
outline: none;
height: 50px;
width:100%;
@media(max-width:576px) { height: 40px;}
`

const Btn = styled.button `height: 50px; @media(max-width:576px) { height: 40px;}` 
export default function Footer() {
   
    return (
      <footer>
        <section className="position-relative justify-content-center d-flex align-items-end w-100" style={{ height: '800px' }}>
          <Background className="h-75 w-100">
                    <div className="h-50"></div>
                    <div className="h-50 position-relative container">
                        <div></div>
                        <div className="position-absolute" style={{ bottom: '0' }}>
                          <div className="d-flex justify-content-around">
                            <div className="col-6">
                              <img className="mb-3 d-block" src={thongbao} alt={thongbao} width='150' />
                              <div className="row justify-content-center">
                                <div className="col-md-6">Chấp nhận thanh toán</div>
                                <div className="col-md-6 mt-1">
                                  <img className="me-3" src={vissa} alt={vissa}></img>
                                  <img className="" src={masterCard} alt={masterCard}></img>
                                </div>
                              </div>
                              </div>
                            <div className="col-6 d-flex align-items-end">
                              <div className="row w-100 align-items-end">
                                <IconFooter className ="row col-lg-6 justify-content-around">
                                  <div className="icon"><i class="fab fa-facebook-f bx-tada"></i></div>
                                  <div className="icon"><i class="fab fa-twitter bx-tada"></i></div>
                                  <div className="icon"><i class="fab fa-pinterest-p bx-tada"></i></div>
                                  
                                </IconFooter>
                                <div className ="row col-lg-6 justify-content-around">
                                  <div className="icon"><i class="fab fa-google bx-tada"></i></div>
                                  <div className="icon"><i class="fab fa-instagram bx-tada"></i></div>
                                  <div className="icon"><i class="fas fa-map-marked-alt bx-tada"></i></div>
                                </div>
                              </div>
                              
                            </div>
                          </div>
                            <img src={line} alt="" width="100%" />
                            <div className="row justify-content-between w-100 p-2">
                              <End className="col-md-12 col-lg-5 text-center fw-lighter mb-2">2021 © CINESTAR. ALL RIGHTS RESERVED.</End>
                              <End className="col-md-12 col-lg-7 text-center fw-lighter">
                                <TextEnd className="mx-3">About</TextEnd>
                                <TextEnd className="mx-3">Terms Of Use</TextEnd>
                                <TextEnd className="mx-3">Privacy Policy</TextEnd>
                                <TextEnd className="mx-3">FAQ</TextEnd>
                                <TextEnd className="mx-3">Feedback</TextEnd>
                              </End>
                            </div>
                        </div>
                    </div>
              </Background>

            <section className="position-absolute w-100 px-3" style={{top:'20%'}}>
              <Contain01 className="container text-center w-100 p-5">
                <h3 className="text-success">SUBSCRIBE TO BOLETO</h3>
                <h1 className="mb-3">TO GET EXCLUSIVE BENIFITS</h1>
                <div className="col-sm-12 col-md-10 col-lg-8 col-xl-7 mx-auto mb-4">
                  <form className="position-relative">
                    <Input placeholder="Enter Your Email" />
                    <Btn className="btnSignInUp position-absolute px-4 top-0 end-0">SUBSCRIBE</Btn>
                  </form>
                </div>
                <p>We respect your privacy, so we never share your info</p>
              </Contain01>
            </section>
          </section>
      </footer>
    )
}
