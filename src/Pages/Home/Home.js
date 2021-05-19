import React from 'react'
import Footer from '../Footer/Footer'
import Carousel from './Carousel'
import ListFilm from './ListFilm'

export default function Home() {
    return (
        <div>
           <Carousel></Carousel>
           <ListFilm></ListFilm>
           <Footer></Footer>
        </div>
    )
}
