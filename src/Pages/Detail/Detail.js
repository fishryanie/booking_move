import React, { useEffect } from 'react'
import moment from "moment"
import { useDispatch } from "react-redux"
import { layThongTinChiTietPhimAction } from '../../Redux/Actions/FilmAction'

import Detail_Content from './Detail_Content'
import Detail_Header from './Detail_Header'
import FilmSlider from '../../Pages/Carousel/FilmSlider'
import Footer from '../../Pages/Footer/Footer'
import '../../Scss/Detail.scss'

export default function Detail(props) {
  const dispatch = useDispatch()
  useEffect(() => {
      let { id } = props.match.params;
      dispatch(layThongTinChiTietPhimAction(id))
  }, [])
 
   
  
 
  return (
    <section className="detail text-light">
      <Detail_Header></Detail_Header>
      <Detail_Content></Detail_Content>
      <FilmSlider></FilmSlider>
      <Footer></Footer>
    </section>
  )
}




        // <section>
        //     <section className="container">
        //         <section className="row">
        //             <div className="col-md-5 mb-5 text-center">
        //                 <img className="w-75"style={{height:'500px'}}  src={chiTietPhim.hinhAnh} alt=""/>
        //             </div>
        //             <div className="col-md-7 mb-3">
        //                 <nav>
        //                     <div class="nav nav-tabs" id="nav-tab" role="tablist">
        //                         <a class="nav-link active " id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Chi tiết</a>
        //                         <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Lịch chiếu</a>
        //                         <a class="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Đánh giá</a>
        //                     </div>
        //                 </nav>
        //                 <div class="tab-content" id="nav-tabContent">
        //                     <div class="tab-pane fade show active text-white mt-5" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        //                         <div className="row">
        //                             <h2 className="col-12 mb-5">{chiTietPhim.tenPhim}</h2>
        //                             <p className="col-4">Ngày khởi chiếu:</p>
        //                             <p className="col-7">{chiTietPhim.ngayKhoiChieu}</p>
        //                             <p className="col-4">Tác giả:</p>
        //                             <p className="col-7">Không biết tên</p>
        //                             <p className="col-4">Diễn viên</p>
        //                             <p className="col-7">Không biết tên luôn</p>
        //                             <p className="col-12">Mô tả:</p>
        //                             <p className="col-12">{chiTietPhim.moTa}</p>
        //                         </div>
        //                     </div>
        //                     <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        //                         <div class="row">
        //                             <div class="col-3">
        //                                 <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        //                                     {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
        //                                         let activeClass = index === 0 ? 'active' : '';
        //                                         return <a key={index} class={`nav-link ${activeClass} text-center mt-5`} id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls={heThongRap.maHeThongRap} aria-selected="true">
        //                                             <img className="d-block mx-auto" src={heThongRap.logo} width="60" alt="" />
        //                                             {heThongRap.tenHeThongRap}</a>
        //                                     })}
        //                                 </div>
        //                             </div>
        //                             <div class="col-9">
        //                                 <div class="tab-content" id="v-pills-tabContent">
        //                                 {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
        //                                     const activeClass = index === 0 ? 'show active' : '';
        //                                     return (
        //                                         <div key={index} class={`tab-pane fade show mt-5 text-center ${activeClass}`} id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
        //                                             {/* Load cụm rạp chiếu từ heThongRap.cumRapChieu */}
        //                                             {heThongRap.cumRapChieu?.map((cumRap, index) => {
        //                                                 return <div key={index}>
        //                                                     <h3 className="mb-3 mt-5 text-white">{cumRap.tenCumRap}</h3>
        //                                                     <div className="row">
        //                                                         {cumRap.lichChieuPhim?.slice(0, 8).map((lichChieu, index) => {
        //                                                             console.log(lichChieu.maLichChieu)
        //                                                             return <NavLink to={`/booking/${lichChieu.maLichChieu}`} className="col-3 text-white">
        //                                                                 {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
        //                                                             </NavLink>
        //                                                         })}
        //                                                     </div>
        //                                                 </div>
        //                                             })}
        //                                         </div>
        //                                     )
        //                                 })}
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
        //                 </div>
        //             </div>
        //         </section>
        //     </section>
        // </section>
  
