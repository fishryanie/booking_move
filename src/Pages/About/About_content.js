import React from 'react'
import about01 from '../../Assets/Images/ImgAbout/about01.png'

export default function About_content() {
  return (
    <section className="about_content7">
      <section className="position-relative w-100">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-md-7 col-lg-6 col-xl-5"></div>
            <div className="col-md-5 col-lg-6 bg_thumb" style={{background:`url(${about01})`}}></div>
          </div>
        </div>
        <div className="position-absolute w-100" style={{ top: "0", left: "0" }}>
          <div className="container">
            <div className="row justify-content-between pr-5">
              <div className="col-lg-6 pt-5">
                <h2 className="text-success mb-3">WE ARE BOLETO</h2>
                <h1 className="display-4 font-weight-bold mb-4">GET TO KNOW US</h1>
                <p className="mb-4" style={{fontSize:'17px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <p className="mb-4" style={{fontSize:'17px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <div className="row align-items-center mt-5">
                  
                </div>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
