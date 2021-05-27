import React from 'react'
import Footer from '../Footer/Footer'
import Carousel from './Carousel'
import ListFilm from './ListFilm'
import bg from '../../Assets/img/bg_login.jpeg'
export default function Home() {
    return (
        <div style ={{background: `url(${bg})`}}>
           <Carousel></Carousel>
           <ListFilm></ListFilm>
           <Footer></Footer>
        </div>
    )
}
