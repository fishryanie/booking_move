import React from 'react'
import icon1 from '../../Assets/Images/ImgAbout/icon01.png'
import icon2 from '../../Assets/Images/ImgAbout/icon02.png'

export default function Tour() {
  return (
    <section className="about_content7">
      <section className="position-relative w-100">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-md-7 col-lg-6 col-xl-5"></div>
            <div className="col-md-5 col-lg-6 bg_thumb"></div>
          </div>
        </div>
        <div className="position-absolute w-100" style={{ top: "0", left: "0" }}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <h2 className="text-success mb-3">TAKE A LOOK AT OUR TOUR</h2>
                <h1 className="font-weight-bold mb-4">GUARANTEES YOU CAN TRUST.</h1>
                <p>Because more peace of mind means more love for the event</p>
                <div className="row align-items-center mt-5">
                  <div className="col-2 borderImage">
                    <img src={icon1} alt="" />
                  </div>
                  <div className="col-10">
                    <h2>Get In Guarantee</h2>
                    <p>Authentic tickets, on-time delivery, and access to your event. Or your money back. Period.</p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-2 borderImage">
                    <img src={icon2} alt="" />
                  </div>
                  <div className="col-10 mt-5">
                    <h2>Price Match Guarantee</h2>
                    <p>The best prices are here. If you spot a better deal elsewhere, we’ll cover the difference.</p>
                  </div>
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
