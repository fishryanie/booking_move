import React from 'react'
import moment from "moment"
import { useSelector } from "react-redux"
import styled from 'styled-components'
  
export default function Detail_Header() {
  const chiTietPhim = useSelector(state => state.FilmReducers.DetailFilm);
  console.log('detail', chiTietPhim);

  const Carousel = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),url(${chiTietPhim.hinhAnh});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin-bottom: 120px;
    height: 600px;
    color: #fff;
  `
  const Date = styled.div`
  display: inline-block;
  color: #000;
  padding: 2px 5px;
  border-radius: 5px;
  font-size: 0.75rem;
`
  return (
    <Carousel className="position-relative d-flex justify-content-center align-items-end ">
      <section className="position-absolute h-100 w-100" style={{top:'0',left:'0'}}>
        <section className="container h-100 w-100">
          <section className="w-100" style={{height:'35%'}}></section>
          <section className="row w-100" style={{height:'65%'}}>
            <div className="col-3">
              <img className="position-absolute h-100 w-100 px-3" style={{bottom:'-8%'}} src={chiTietPhim.hinhAnh} />
            </div>
            <div className="col-9 p-5">
              <h1>{chiTietPhim.tenPhim}</h1>
              <div className="d-flex">
              <Date className="mr-2 text-light" style={{background:'purple'}}>
                <i class='bx bx-calendar mr-2'></i>
                {moment(chiTietPhim.ngayKhoiChieu).format("dddd")}
              </Date>
              <Date style={{background:'pink'}}>
                <i class='bx bx-time mr-2'></i>
                {moment(chiTietPhim.ngayKhoiChieu).format("l LT")}
              </Date>
            </div>
            </div>
          </section>
        </section>
      </section>
      <section className="h-25 w-100" style={{background:'#032055'}}></section>
    </Carousel>
  )
}
