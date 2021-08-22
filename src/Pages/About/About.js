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
  return (
    <section className="about" style={{ background: "#001232" }}>
      <BannerCarousel title='About us' content ='Lorem ipsum dolor sit amet consectetur adipisicing elit.'></BannerCarousel>
      <About_content></About_content>
      <Philosophy></Philosophy>
      <Gallery></Gallery>
      <Tour></Tour>
      <FilmSlider></FilmSlider>
      <Footer></Footer>
    </section>
  )
}