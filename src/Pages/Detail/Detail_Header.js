import React from 'react'
import moment from "moment"
import { useSelector } from "react-redux"
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import styled from 'styled-components'
import tomato from '../../Assets/Images/imgDetail/tomato2.png'
import cake from '../../Assets/Images/imgDetail/cake2.png'
import Trailer from './Trailer'  
import IconShare from '../../IconShare';

const Date = styled.div`
    display: inline-block;
    color: #000;
    padding: 2px 5px;
    border-radius: 5px;
    font-size: 0.75rem;
  `
export default function Detail_Header() {
  const chiTietPhim = useSelector(state => state.FilmReducers.DetailFilm);
  

  const Carousel = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),url(${chiTietPhim.hinhAnh});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 450px;
    color: #fff;
    @media(max-width:768px){
      background-position: center start;
      height: 350px;
    }
  `
  


  return (
    <section className="detail_header">
      <Carousel className="">
        <section className="container h-100">
          <div className="d-flex h-100 pt-5">
            <div className="col-lg-3 imgFilm h-100">
              <img className="w-100" src={chiTietPhim.hinhAnh} alt="" />
            </div>
            <div className="col-lg-9 d-flex align-items-end">
              <div className="col-6 h-50 p-3" style ={{color:'#9aace5'}}>
                <h1 className="text-light">{chiTietPhim.tenPhim}</h1>
                {/* <p style={{fontSize:'14px'}}>ENGLISH, HINDI, TELEGU, TAMIL</p> */}
                <div className="genreMovie mt-3 mb-3"><span>HORROR</span></div>
                <Date>{chiTietPhim.ngayKhoiChieu}</Date>
              </div>
              <div className="col-6 d-flex align-items-end h-100 w-100 p-0">
                <div className="h-50 w-100 d-flex align-items-end">
                  <IconShare></IconShare>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Carousel>


      <section className="book-section" style={{background:'#032055'}}>
        <div className="container w-100">
          <div className="row book-section-content w-100 justify-content-center px-1">
            <div className="col-lg-3 imgFilm book-section-item01"></div>
            <div className="col-lg-6 book-section-item02">
              <div className="row pt-5 pb-4">
                <div className="col-4">
                  <div className="text-center">
                    <img className="bx-tada" src={tomato} alt="" />
                    <span className ="mx-2">88%</span>
                    <p>Tomatometer</p>  
                  </div>               
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <img className="bx-tada" src={cake} alt="" />
                    <span className ="mx-2">88%</span>
                    <p>Audience Score</p>
                  </div>
                   
                </div>
                <div className="col-4">
                  <div>
                    <Rating precision={0.5} value={4.5} icon={<FavoriteIcon  fontSize="inherit"/>} readOnly style={{color:'red'}} />
                    <p>Users Rating</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn_trailer col-lg-3 book-section-item03  d-flex align-items-center justify-content-center">
              <a type="button" data-toggle="modal" data-target="#exampleModal">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                WATCH TRAILER
              </a>
            </div>
          </div>
        </div>
      </section>
      <Trailer trailer = {chiTietPhim.trailer}/>
    </section>
  )
}
