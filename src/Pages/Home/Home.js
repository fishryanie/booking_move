import React from 'react'
import Footer from '../Footer/Footer'
import BannerCarousel from '../Carousel/BannerCarousel'
import Flim from './Flim'
import FilmSlider from '../Carousel/FilmSlider'
export default function Home() {
    return (
        <section style={{ background: "#001232" }}>
          <BannerCarousel title = 'Home' content ='Home content'></BannerCarousel>
          <Flim></Flim>
          <FilmSlider></FilmSlider>
          <Footer></Footer>
        </section>
    )
}
