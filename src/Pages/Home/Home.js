import React from 'react'
import Footer from '../Footer/Footer'
import styled from 'styled-components'
import Flim from './Flim'
import FilmSlider from '../Carousel/FilmSlider'
import bg from '../../Assets/Images/banner-home01.jpeg'
import AlertDialogSlide from './DialogBuyTicket'

const Carousel = styled.section`
    background: linear-gradient(rgba(0, 18, 50, 0.4),rgba(0, 18, 50, 0.4)),url(${bg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
    height: 100vh;
    width:100%;
    color: #fff;
    opacity: .5;
  `
  const CarouselContet = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width:100%;
  
  
  `
export default function Home() {
  

  return (
    <section className="text-light" style={{ background: "#001232" }}>
  
      <Carousel></Carousel>
      <CarouselContet className="d-flex justify-content-center align-items-center text-center"> 
        <div>
          <h1 className="display-1 font-weight-bold">GET <span style={{color:'#31d7a9'}}>MOVIE </span>TICKETS</h1>
          <p className="container px-5" style={{fontSize:'28px'}}>Buy movie tickets in advance, find movie times watch trailers, read movie reviews and much more</p>
        </div>
      </CarouselContet>

      <section className="show">
        <AlertDialogSlide></AlertDialogSlide>
      </section>


      <Flim></Flim>
      <FilmSlider></FilmSlider>
      <Footer></Footer>
    </section>
  )
}
