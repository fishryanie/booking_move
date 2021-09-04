import React from "react";
import BannerCarousel from "../Carousel/BannerCarousel";
import About_content from "./About_content";
import Philosophy from "./Philosophy";
import Gallery from "./Gallery";
import Tour from "./Tour";
import FilmSlider from "../Carousel/FilmSlider";
import Footer from "../Footer/Footer";
import '../../Scss/About.scss';


export default function About() {
  const propsBanner =  {title:'About US', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
  return (
    <section className="about" style={{ background: "#001232" }}>
      <BannerCarousel item = {propsBanner}></BannerCarousel>
      <About_content></About_content>
      <Philosophy></Philosophy>
      <Gallery></Gallery>
      <Tour></Tour>
      <FilmSlider></FilmSlider>
      <Footer></Footer>
    </section>
  )
}