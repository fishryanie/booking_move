import React from 'react'
import styled from 'styled-components'
import bg from '../../Assets/Images/ImageContact/bannerContact.jpg'
export default function BannerCarousel(props) {
  const {item} = props
  const [state, setstate] = React.useState({
    background:`linear-gradient(to left, #5560ffb7 18%, #aa52a15d 65%, #ff43433f 100%) , url(${bg})`,
    backgroundPosition:'center center',
    backgroundRepeat: 'norepeat',
    backgroundSize: 'cover',
    height:'500px'
  })
  React.useEffect(() => {
    setstate((state) => ({
      ...state,
      height: item.height == null ? state.height : item.height,
      background: item.hinhAnh == null ? state.background : item.hinhAnh
    }))
  }, [])  

    return (
      <section className="d-flex justify-content-center align-items-center text-center text-light" style={state}>
        <section className="container">
          <h1 className="display-3 font-weight-bold">{item.title}</h1>
          <p 
            className="container px-5" 
            style={{fontSize:'20px',color:'#d0dbff'}}>{item.content}
          </p>
        </section>
      </section>
    )
}
