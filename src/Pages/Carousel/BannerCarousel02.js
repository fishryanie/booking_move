import React from 'react'
import styled from 'styled-components'

const CarouselContet = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width:100%; 
`
export default function BannerCarousel02(props) {
  const {itemProps} = props
  const [state, setstate] = React.useState({
    backgroundImage:'',
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment:'fixed',
    backgroundSize: 'cover',
    position:'relative',
    height:'100vh',
    opacity:'.5'
  })
  React.useEffect(() => {
    setstate((state) => ({
      ...state, backgroundImage: itemProps.hinhAnh == null ? state.background : itemProps.hinhAnh
    }))
  }, [])  
  return (
    <section>
      <section style={state}></section>
      <CarouselContet className="d-flex justify-content-center align-items-center text-center">
        <section>
          <h1 className="display-1 font-weight-bold">GET <span style={{color:'#31d7a9'}}>MOVIE </span>TICKETS</h1>
          <p className="container px-5" style={{fontSize:'28px'}}>{itemProps.content}</p>
        </section>
      </CarouselContet>
    </section>
  )
}
