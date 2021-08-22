import React from 'react'
import person from '../../Assets/Images/ImgAbout/shakerhand.png'
import shakehands from '../../Assets/Images/ImgAbout/person-icon.png'
import circle from '../../Assets/Images/ImgAbout/circle-icon.png'
export default function Philosophy() {
  return (
    <section className="philosophy">
      <section className="philosophy_bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-8 p-5" style={{ background: "#001232" }}>
              <h2 className="text-success mb-3 mt-3">TAKE LOOK AT</h2>
              <h1 className="display-4 font-weight-bold mb-4">OUR PHILOSOPHY</h1>
              <p className="mb-4" style={{fontSize:'17px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              <div className="row align-items-center mt-5">
                <div className="col-2 borderImage">
                  <img src={shakehands} alt="" />
                </div>
                <div className="col-10">
                  <h3>Honesty & Fairness</h3>
                </div>
              </div>
              <div className="row align-items-center mt-5">
                <div className="col-2 borderImage">
                  <img src={circle} alt="" />
                </div>
                <div className="col-10">
                  <h3>Clarity & Transparency</h3>
                </div>
              </div>
              <div className="row align-items-center mt-5">
                <div className="col-2 borderImage">
                  <img src={person} alt="" />
                </div>
                <div className="col-10">
                  <h3>Focus on Customers</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
