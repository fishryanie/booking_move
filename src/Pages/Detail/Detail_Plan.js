import React, {useState} from 'react'
import { useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'
import bg_time from '../../Assets/Images/imgDetail/movie-seat.png'
import moment from "moment"

export default function Detail_Plan() {
  const chiTietPhim = useSelector(state => state.FilmReducers.DetailFilm);
  // console.log(chiTietPhim.heThongRapChieu)
 

  return (
    <section className="detail_plan">

      <div className="row">
        <div className="col-4">
          <div className="nav flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
              let activeClass = index === 0 ? 'active' : '';
              return <a key={index} className={`nav-link ${activeClass} text-center mt-5 `} id="a" data-bs-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls={heThongRap.maHeThongRap} aria-selected="true">
                <div className="rounded-circle avata p-1 mx-auto mb-2">
                  <img className="rounded-circle w-100 h-100" src={heThongRap.logo}/>
                </div>
                {heThongRap.tenHeThongRap}</a>
            })}
          </div>
        </div>
        <div className="col-8">
          <div className="tab-content" id="v-pills-tabContent">
            {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                let activeClass = index === 0 ? 'show active' : '';
                console.log(heThongRap.maHeThongRap)
                return (
                  <div key={index} className={`tab-pane fade mt-5 text-center ${activeClass}`} id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby="a">
                    {heThongRap.cumRapChieu?.map((cumRap, index) => {
                      return <div key={index}>
                        <h6 className="mb-2 mt-5 text-white">{cumRap.tenCumRap}</h6>
                        <div className="row flex-wrap justify-content-center">
                            {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                              return <NavLink to={`/seat/${lichChieu.maLichChieu}`} className="col-4 col-sm-3 col-xl-2 text-white p-2  NAVLINK">
                                  {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                              </NavLink>
                            })}
                        </div>
                      </div>
                    })}
                  </div>
                )
            })}
          </div>
        </div>
      </div>




    </section>


  )
}





    //   {chiTietPhim.heThongRapChieu?.map((heThongRapChieu, index) => (
    // <section className="px-3">
    //   <div className="row p-2 mt-5 pb-4 justify-content-between" style={{borderBottom: '1px dashed #102651', paddingTop:'-50px'}}>
    //     {/* INFO */}
    //     <div className="col-sm-5 row p-0">
    //       <div className="col-md-3">
    //         <div className="rounded-circle avata p-1">
    //           <img className="rounded-circle w-100 h-100 p-1" src={heThongRapChieu.logo}/>
    //         </div>
    //       </div>
    //       <div className="col-md-9 d-flex">
    //         <h6 className="text-uppercase p-1 pt-4" >{heThongRapChieu.tenHeThongRap}</h6>
    //       </div>
    //     </div>
    //     {/* COMMENT */}
    //     <div className="col-sm-7 p-0" >
    //       {heThongRapChieu.cumRapChieu?.map((cumRap, index) => (
    //           <div className="" key={index} style={{paddingTop:'-100px !important'}}>
    //             <h6 className="mt-5">{cumRap.tenCumRap}</h6>
    //             <div className="d-flex flex-wrap" >
    //                 {cumRap.lichChieuPhim?.slice(0, 8).map((lichChieu, index) => (  
    //                   <NavLink className="col-2 text-white NAVLINK" key ={index} 
    //                     to={`/booking/${lichChieu.maLichChieu}`} >
    //                     {moment(lichChieu.ngayChieuGioChieu).format('hh:mm')}
    //                   </NavLink>
    //                 ))}
    //             </div>
    //           </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    //  ))}
    // </section>
 
    // <section className="mt-5" style={{boxShadow:'0px 0px 10px #11326f'}}>
    //   {chiTietPhim.heThongRapChieu?.map((heThongRapChieu, index) => (
    //   <div className="d-flex" style={{borderBottom: '1px solid #11326f'}} key ={index} >
    //     <div className="col-5 container-fluid p-3" style={{borderRight: '1px solid #11326f'}}>
    //       <div className="d-flex justify-content-between align-items-center" >
    //         <div className="col-2 d-flex align-items-center position-relative">
    //           <i class="fas fa-heart text-danger" style={{color:'#9aace5', display: hover.main}}></i>
    //           <i class="far fa-heart position-absolute" style={{color:'#9aace5', display: hover.boder}}></i>
    //         </div>
    //         <div className="col-8">{heThongRapChieu.tenHeThongRap}</div>
    //         <div className="col-2">
    //           <Icon className="fas fa-map-marker-alt"/>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-7 p-2" 
    //     onMouseEnter={()=>{setHover((hover)=>({...hover, main:'block', boder:'none',color:'#fff',bg:'#31d7a9'}))}} 
    //     onMouseLeave={()=>{setHover((hover)=>({...hover, main:'none', boder:'block',color:'#9aace5',bg:'#17305f'}))}}>
    //       {heThongRapChieu.cumRapChieu?.map((cumRap, index) => (
    //         <div className="container-fluid" key={index}>
    //           <h6 className="mb-3">{cumRap.tenCumRap}</h6>
    //           <div className="d-flex flex-wrap">
    //               {cumRap.lichChieuPhim?.slice(0, 8).map((lichChieu, index) => (  
    //                 <NavLink className="col-3 text-white NAVLINK" key ={index} 
    //                   to={`/booking/${lichChieu.maLichChieu}`} >
    //                   {moment(lichChieu.ngayChieuGioChieu).format('hh:mm')}
    //                 </NavLink>
    //               ))}
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     </div>
    //   ))}
    // </section>
  

