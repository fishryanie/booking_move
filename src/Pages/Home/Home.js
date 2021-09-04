import React from 'react'
import Footer from '../Footer/Footer'
import styled from 'styled-components'
import Flim from './Flim'
import FilmSlider from '../Carousel/FilmSlider'
import bg from '../../Assets/Images/banner-home01.jpeg'
import BannerCarousel02 from '../Carousel/BannerCarousel02'



export default function Home() {
  const propsBanner = {
    hinhAnh : `linear-gradient(rgba(0, 18, 50, 0.4),rgba(0, 18, 50, 0.4)),url(${bg})`,
    content: 'Buy movie tickets in advance, find movie times watch trailers, read movie reviews and much more'
  }

  return (
    <section className="text-light" style={{ background: "#001232" }}>
      <BannerCarousel02 itemProps = {propsBanner}></BannerCarousel02>
      <Flim></Flim>
      <FilmSlider></FilmSlider>
      <Footer></Footer>
    </section>
  )
}
