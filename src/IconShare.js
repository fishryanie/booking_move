import React from 'react'
import './Scss/IconShare.scss'
export default function IconShare() {
  return (
    <section>
      <div id="wrapper">
        <div id="share">
          {/* <span>Share : </span> */}
          <a href="#" className="share_item twitter">
            <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200" className="circle">  
              <circle cx={100} cy={100} r={50} />
            </svg>
            <div className="social">
              <i className="fa fa-twitter" />
            </div>
          </a>
          <a href="#" className="share_item facebook">
            <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200" className="circle">  
              <circle cx={100} cy={100} r={50} />
            </svg>
            <div className="social">
              <i className="fa fa-facebook" />
            </div>
          </a>
          <a href="#" className="share_item google">
            <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200" className="circle">  
              <circle cx={100} cy={100} r={50} />
            </svg>
            <div className="social">
              <i className="fa fa-google-plus" />
            </div>
          </a>
          <a href="#" className="share_item pinterest">
            <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200" className="circle">  
              <circle cx={100} cy={100} r={50} />
            </svg>
            <div className="social">
              <i className="fa fa-pinterest" />
            </div>
          </a>
          <a href="#" className="share_item linkedin">
            <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200" className="circle">  
              <circle cx={100} cy={100} r={50} />
            </svg>
            <div className="social">
              <i className="fa fa-linkedin" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
