import React,{useEffect, useState, Fragment} from 'react';
import { useDispatch, useSelector } from "react-redux"
import { layThongTinChiTietPhimAction } from '../../Redux/Actions/FilmAction'
import { NavLink } from 'react-router-dom'
import moment from "moment"
import styled from 'styled-components'
import imgDate from '../../Assets/Images/ImageDialog/date.png'
import imgCinema from '../../Assets/Images/ImageDialog/cinema.png'
import imgCity from '../../Assets/Images/ImageDialog/city.png'
import '../../Scss/SearchFilm.scss'
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const Type = styled.div `color: #31d7a9; font-size: 16px; padding-left: 8px; @media(max-width:576px){font-size: 14px}`

export default function SearchFilm(props) {
  const dispatch = useDispatch()
  useEffect(()=>{dispatch(layThongTinChiTietPhimAction(props.idFilm))},[props.idFilm])
  const ArrayFilm = useSelector(state => state.FilmReducers.ArrayFilm);
  const chiTietPhim = useSelector(state => state.FilmReducers.DetailFilm);
  
  

  const [closeModal, setCloseModal] = useState('')
  const [alert, setAlert] = useState(false);
  const [show0, set0] = useState('')
  const [show1, set1] = useState('')
  const [show2, set2] = useState('')
  const [show3, set3] = useState('')
  const [searchValue, setsearchValue] = useState('');
  const [vaidate, setValidate] = useState('')
  const [option, setOption] = useState({
    movieId: chiTietPhim?.maPhim, movieTitle:chiTietPhim?.tenPhim,
    cinemaSystemId:'',cinemaSystemTitle:'Chọn hệ thống rạp',cinemaSystemLogo:`${imgCity}`,
    cinemaId:'', cinemaTitle:'Chọn cụm rạp',
    showTimeId:'', showTimeTitle:'Chọn thời gian chiếu'
  })
 

  const handleSearch = ({ target: { value } }) => setsearchValue(value);
  const handleOptionInput = (id,title) => setOption((option) => ({...option, movieId:id, movieTitle:title}))
  const handleOptionHeThongRap = (id, title, logo) => setOption((option) => ({...option, cinemaSystemId:id, cinemaSystemTitle:title,cinemaSystemLogo:logo}))
  const handleOptionCumRap = (id, title) => setOption((option) => ({...option, cinemaId:id, cinemaTitle:title}))
  const handleOptionShowTime = (id, title) => setOption((option) => ({...option, showTimeId:id, showTimeTitle:title }))
      
   
  
  const handleMoveSeatPlan = () => {
    if(option.showTimeId !== '' ) { setValidate(`/seat/${option.showTimeId}`); setCloseModal('modal');}
    else setAlert(true); setTimeout(()=>{ setAlert(false) }, 5000);
  }

  const SelectSearch = () => {
    const cartSearch = ArrayFilm.filter(item => item.tenPhim.toLowerCase().includes(searchValue));
    return (
      <Fragment>
        <form className="search d-flex position-relative">
          <input className="d-block w-100 text-white p-2" placeholder="Search for movie" type="text"
          // value={option.movieTitle}
          onFocus={()=>{set0('showMenu')}} 
          onBlur={()=>{set0('')}}
          onChange={handleSearch}/>
          <i className='bx bx-search-alt'></i>
        </form>
        <ul className={`menuSearch p-0 ${show0}`}>
          {cartSearch.map((item, index) => {
            return (
              <li key={index} onClick={()=>{handleOptionInput(item.maPhim, item.tenPhim)}}>{item.tenPhim}</li>
            )
          })}
        </ul>
      </Fragment>
    )
  }

  const SelectHeThongRap = () => {
    return (
      <div className="dropholder d-flex" style={{width:'280px',zIndex:3}}>
        <div className="d-flex align-items-center justify-content-between">
          <div><img src={option.cinemaSystemLogo} width="40" alt="" /></div>
          <Type>City</Type>
        </div>
        <div class="dropdown" onClick={()=>{set1('showMenu')}} style={{width:'250px'}}>
          <p>{option.cinemaSystemTitle}</p>
        </div>
        <ul className={`menu p-0 ${show1}`} style={{width:'220px'}}>
        {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
          return ( 
            <li key={index} onClick={()=>{set1('');
            handleOptionHeThongRap(heThongRap.maHeThongRap,heThongRap.tenHeThongRap,heThongRap.logo);
            handleOptionCumRap('','')
            handleOptionShowTime('','')}} > 
              <img className ="mr-2" width = "25" src={heThongRap.logo} alt="" />
              {heThongRap.tenHeThongRap}
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
  const SelectCumRap = () => {
    return (
      <div className="dropholder d-flex" style={{width:'420px',zIndex:2}}>
          <div className="d-flex align-items-center justify-content-between">
            <div><img src={imgCinema} width="40" alt="" /></div>
            <Type>Cineplex</Type>
          </div>
          <div class="dropdown" onClick={()=>{set2('showMenu ps-0')}} style={{width:'360px'}}>
            <p>{option.cinemaTitle}</p>
          </div>
          <ul className={`menu ${show2}`} style={{width:'340px'}}>
          {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
            if(heThongRap.maHeThongRap === option.cinemaSystemId ){
              return (
                heThongRap.cumRapChieu?.map((cumRap, index) => {
                  console.log(heThongRap.cumRapChieu)
                  return <li key={index}
                    onClick={()=>{set2(''); 
                    handleOptionCumRap(heThongRap.maCumRap,cumRap.tenCumRap)
                    handleOptionShowTime('','')}}>
                    {cumRap.tenCumRap} </li>
                })
              )
            }
            
          })}
          </ul>
      </div>
    )
  }
  const SelectShowTime = () => {
    return (
      <div className="dropholder d-flex " style={{width:'360px',zIndex:1}} >
          <div className="d-flex align-items-center justify-content-between">
            <div><img src={imgDate} width="40" alt="" /></div>
            <Type>Date</Type>
          </div>
          <div class="dropdown" onClick={()=>{set3('showMenu')}} style={{width:'360px'}}>
            <p>{moment(option.showTimeTitle).format('llll')}</p>
          </div>
          <ul className={`menu p-0 ${show3}`} style={{width:'340px'}}>
          {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
            if(heThongRap.maHeThongRap === option.cinemaSystemId ){
              return (
                heThongRap.cumRapChieu?.map((cumRap, index) => {
                  if(heThongRap.maCumRap === option.cinemaId){
                    return(
                      cumRap.lichChieuPhim?.map((lichChieu, index) => {
                        return <li key={index} onClick={()=>{set3(''); handleOptionShowTime(lichChieu.maLichChieu,lichChieu.ngayChieuGioChieu)}}>
                        {moment(lichChieu.ngayChieuGioChieu).format('LLLL')} </li>
                      })

                    )
                  }
                })
              )
            }
          })}
          </ul>
      </div>
    )
  }




  return (
    <section className ="searchFilm">
        {/* Modal */}
      <div className="modal fade rounded" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog  modal-md modal-lg modal-xl rounded">
            <div className="modal-content bg-transparent">
              <div className="modal-header bg-transparent rounded">
                <div className="p-3">
                  <h5>WELCOME TO BOLETO</h5>
                  <h2 className="">WHAT ARE YOU LOOKING FOR</h2>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body p-4">
              <Collapse in={alert}>
                <Alert className ="mb-1" severity="error" action={ <IconButton aria-label="close"color="inherit"size="small"onClick={() => { setAlert(false) }}> <CloseIcon className="text-dark" fontSize="inherit" /></IconButton>}>
                  Vui lòng chọn rạp và lịch chiếu
                </Alert>
              </Collapse>
              <div className="modal-body-content">
                <div className="d-flex flex-wrap justify-content-between align-items-center pt-4 px-3">
                  <div className="col-xl-8 col-9 position-relative">{SelectSearch()}</div>
                  <NavLink className="col-3 btn btnSignInUp" to={vaidate} data-bs-dismiss={closeModal} onClick={handleMoveSeatPlan} >Seat Plan</NavLink>
                </div>
                <div className="d-flex flex-wrap justify-content-between align-items-center pt-4 pb-4 px-2">
                  {SelectHeThongRap()}
                  {SelectCumRap()}
                  {SelectShowTime()}
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}