import React,{Fragment,useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { layThongTinPhongVeAction } from '../../Redux/Actions/FilmAction'
import moment from "moment";
// import { SnackbarProvider, useSnackbar } from 'notistack';
import BannerCarousel from '../Carousel/BannerCarousel';

import FilmSlider from '../Carousel/FilmSlider'
import Footer from '../Footer/Footer'
import imgSeat from '../../Assets/Images/imgSeat/seat01.png';
import Button from '@material-ui/core/Button';
import screen from '../../Assets/Images/imgSeat/screen-thumb.png';
import bannerSeat from '../../Assets/Images/imgSeat/bannerSeat.jpeg'
import '../../Scss/seat.scss'

export default function Seat(props) {
  const thongTinPhongVe = useSelector(state => state.FilmReducers.thongTinPhongVe);
  const { danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer);
 
 

  const dispatch = useDispatch();
    React.useEffect(() => {
      let { id } = props.match.params
      dispatch(layThongTinPhongVeAction(id))
    })



  let item ={
    title: 'Venus',
    content: 'City Walk English - 2D',
    hinhAnh: `linear-gradient(-180deg, rgba(0, 18, 50, 0.134891) 0%, #001232 100%), url(${bannerSeat})`
  }

  const guide = (text) => {
    return (
      <div>
        <h4 className="subtitle">{text}</h4>
      </div>
    )
  }

  let renderChair = () => {
    return (
      thongTinPhongVe.danhSachGhe?.map((chair, index) => {
        let gheDaDat = chair.daDat ? 'bg-secondary' : '';
        let gheVip = chair.loaiGhe === 'Vip' ? 'gheVip' : '';
        let indexGheDgDat = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === chair.maGhe);
        var gheDgDat =  indexGheDgDat !== -1 ? `bg-success` : '';
        let sttChair = [1,13,17,29,33,45,49,61,65,77,81,93,97,109,113,125,129,141,145,157]
   
        return (
          <Fragment>
            <button key={index} className={`btnChair ${gheDgDat} ${gheVip} ${gheDaDat}`} disabled={chair.daDat} onClick={()=>{dispatch({type:'DAT_GHE', chair})}}>
              {chair.daDat === true ? 'X' : chair.stt}
              <span className='a'></span>
            </button>
            {(index + 1) % 16 === 0 ? <br /> : ''}
            {sttChair.map(item => (index == item) ? <span className="marginSeat" /> : '')}
            {(index + 1) / 32 === 1 ? guide('ghế giữa màn hình') : (index + 1) / 128 === 1 ? guide('khu vực ghế đôi') : '' }
          </Fragment>
        )
      })
    )
  }
  
  return (
    <section className="seat text-light">
   
   
   
      <BannerCarousel item ={item}></BannerCarousel>
      <section className="text-center pb-4 pt-4" style={{background:'#032055'}}>
        <div className="container">
          <div className="d-flex justify-content-between">

            <div className="col-sm-7 col-6 row">
              <div className="btn_trailer rounded col-lg-5 d-flex align-items-center">
                <a className="position-absolute rounded">
                  <span className="w-100"></span>
                  <span className="h-100 "></span>
                  <span className="w-100 "></span>
                  <span className="h-100 "></span>
                  {thongTinPhongVe.thongTinPhim?.tenRap}
                </a>
              </div>
              <div className="col-lg-7">
                <div className="text-center movieAddress">
                  <h4>{thongTinPhongVe.thongTinPhim?.tenCumRap}</h4>
                  <p>{thongTinPhongVe.thongTinPhim?.diaChi}</p>
                </div>   
              </div>
            </div>
            
            <div className="col-sm-5 col-6 row">
              <div className="col-lg-7 d-flex align-items-center movieName" >
                <span className="btnSignInUp px-4 rounded d-block w-100">{thongTinPhongVe.thongTinPhim?.tenPhim}</span>
              </div>
              <div className="col-lg-5 movieTime">
                <span className="text-right">
                  <h4>{thongTinPhongVe.thongTinPhim?.gioChieu}</h4>
                  <p>{moment(thongTinPhongVe.thongTinPhim?.ngayChieu).format('ll')}</p>
                </span>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
      <section className="text-center p-5 w-100">
        {guide('SCREEN')}
        <div className="p-5"><img className ="screen" src={screen} alt="" /></div>
      </section>
      <section className="container text-center" style ={{marginBottom:'150px'}}>
        {guide('ghế cận màn hình')}
        {renderChair()}
      </section>
        
        
        
    
      {/* <FilmSlider></FilmSlider> */}
      {/* <Footer></Footer> */}
     
    </section>
  )
}
