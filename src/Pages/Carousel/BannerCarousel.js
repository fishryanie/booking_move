import React from 'react'
import styled from 'styled-components'
import bg from '../../Assets/Images/ImageContact/bannerContact.jpg'
export default function BannerCarousel(props) {
    const Carousel = styled.section`
        background:  linear-gradient(to left, #5560ffb7 18%, #aa52a15d 65%, #ff43433f 100%) , url(${bg});
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        height: 500px;
        color: #fff;
    `
    return (
        <Carousel className="d-flex justify-content-center align-items-center text-center">
            <section>
                <h1 style={{fontSize:'70px'}}>{props.title}</h1>
                <p 
                  className="container px-5" 
                  style={{fontSize:'20px'}}>{props.content}
                </p>
            </section>
        </Carousel>
    )
}
