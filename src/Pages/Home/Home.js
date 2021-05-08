import React from 'react'
import Footer from '../Footer/Footer'
import Ticket  from '../Ticket/Ticket'
import Carousel from './Carousel'
import ListFilm from './ListFilm'

export default function Home() {
    return (
        <div>
           <Carousel></Carousel>
          <Ticket></Ticket>
           <ListFilm></ListFilm>
           <Footer></Footer>
        </div>
    )
}
