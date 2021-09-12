import React,{ useState }  from 'react'

import { useSelector } from "react-redux";
import photo_movie01 from '../../Assets/Images/imgDetail/movie-details01.jpeg'
import photo_movie02 from '../../Assets/Images/imgDetail/movie-details02.jpeg'
import photo_movie03 from '../../Assets/Images/imgDetail/movie-details03.jpeg'
import offer01 from '../../Assets/Images/imgDetail/offer01.png'
import offer02 from '../../Assets/Images/imgDetail/offer02.png'
import offer03 from '../../Assets/Images/imgDetail/offer03.png'
import Detail_Review from './Detail_Review';
import Detail_Plan from './Detail_Plan';


export default function Detail_Body() {
  const chiTietPhim = useSelector(state => state.FilmReducers.DetailFilm); 
  return (
    <section className="detail_body container mt-5 pt-5 pb-5 text-light ">
      <section className="row">
        {/* LEFT */}
        <div className="col-lg-3 Applicable_Offer">
          <ul className="">
            <li><a href="#0">2D</a></li>
            <li><a href="#0">IMAX2D</a></li>
            <li><a href="#0">4DX</a></li>
          </ul>
          <h3 className="mt-4 mb-3">Applicable Offer</h3>
          <div className="Offers">
            <div className="offer01">
              <div>
                <img src={offer01} alt={offer01} />
                <h6 className="mt-4 mb-3">Amazon Pay Cashback Offer</h6>
                <p>Win Cashback Upto Rs 300*</p>
              </div>
            </div>
            <div className="offer02">
              <div>
                <img src={offer02} alt={offer02} />
                <h6 className="mt-4 mb-3">PayPal Offer</h6>
                <p>Transact first time with Paypal and get 100% cashback up to Rs. 500</p>
              </div>
            </div>
            <div className="offer03">
              <div>
                <img src={offer03} alt={offer03} />
                <h6 className="mt-4 mb-3">HDFC Bank Offer</h6>
                <p>Get 15% discount up to INR 100* and INR 50* off on F&B T&C apply</p>
              </div>
            </div>
          </div>
        </div>
       
        {/* RIGHT */}
        <div className="col-lg-9">
          <h2>PHOTOS</h2>
          <div className="row mb-5 mt-3">
            <div className='col-4'><img className="rounded w-100" src={photo_movie01} alt={photo_movie01} /></div>
            <div className='col-4'><img className="rounded w-100" src={photo_movie02} alt={photo_movie02} /></div>
            <div className='col-4'><img className="rounded w-100" src={photo_movie03} alt={photo_movie03} /></div>
          </div>
          {/* NAV-TAB */}
          <div>
            <nav>
              <div className="nav nav-pills d-flex justify-content-around" id="nav-tab" role="tablist">
                <a className="nav-link nav-tab-content mx-3" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><i class='bx bx-detail me-3'></i>SUMERY</a>
                <a className="nav-link nav-tab-content mx-3 active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><i class='bx bx-comment-detail me-3'></i>REVIEW</a>
                <a className="nav-link nav-tab-content mx-3" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><i class='bx bx-calendar me-3'></i>PLAN</a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              {/* SUMERY */}
              <div className="tab-pane fade SUMERY" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <h3 className="mt-5 mb-4">DESCRIPTION</h3>
                <p>{chiTietPhim.moTa}</p>
                <h2 className="mt-5">CAST</h2>
              </div>
              {/* REVIEW */}
              <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <Detail_Review></Detail_Review>
              </div>
              {/* PLAN */}
              <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                <Detail_Plan></Detail_Plan>
              </div>
            </div>
          </div>
          {/* NAV-TAB */}
        </div>
      </section>
    </section>
  )
}

