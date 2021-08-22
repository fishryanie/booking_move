import React from 'react'
import moment from "moment"
import { useSelector } from "react-redux"
export default function Detail_Content() {
  const chiTietPhim = useSelector(state => state.FilmReducers.DetailFilm);
  return (
    <section className="container pb-5">
      <section className="row">
        <div className="col-2"></div>
        <div className="col-10">
          {/* NAV-TAB */}
          <div>
            <nav>
              <div className="nav nav-pills mb-3" id="nav-tab" role="tablist">
                <a className="nav-link mx-5 active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">SUMERY</a>
                <a className="nav-link mx-5 " id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><i class='bx bx-comment-detail mx-3'></i>REVIEW</a>
                <a className="nav-link mx-5" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><i class='bx bx-calendar mx-3'></i>PLAN</a>
            
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active SUMERY" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <h2 className="mt-5 mb-4">SUMERY</h2>
                <p>{chiTietPhim.moTa}</p>
                <h2 className="mt-5">CAST</h2>
              </div>
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">REVIEW</div>
              <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">PLAN</div>
            </div>
          </div>
          {/* NAV-TAB */}
        </div>
      </section>
    </section>
  )
}
