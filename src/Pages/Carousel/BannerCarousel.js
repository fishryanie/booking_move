import React from 'react'
import styled from 'styled-components'
import bg from '../../Assets/Images/ImageContact/bannerContact.jpg'

const Carousel = styled.section`
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
color: #fff;
height: 500px;
`
const BannerCarousel = (props) => {
  
    const {item} = props
    const background = item.hinhAnh !== null ? item.hinhAnh : `linear-gradient(to left, #5560ffb7 18%, #aa52a15d 65%, #ff43433f 100%) , url(${bg})})`
  
   
    
    
    return (
      <Carousel className="d-flex justify-content-center align-items-center text-center" style={{background: `${background}`}}>
        <section className="container">
          <h1 className="display-3 font-weight-bold">{item.title}</h1>
          <p 
            className="container px-5" 
            style={{fontSize:'20px',color:'#d0dbff'}}>{item.content}
          </p>
        </section>
      </Carousel>
    )
}

export default BannerCarousel