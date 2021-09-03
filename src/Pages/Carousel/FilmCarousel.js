import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { GetListFilm } from "../../Redux/Actions/FilmAction"
import styled from 'styled-components'
import Slider from "react-slick"
import moment, { relativeTimeRounding } from "moment"
import '../../Scss/FilmSlider.scss'
export default function FilmCarousel() {
    const ArrayFilm = useSelector(state => state.FilmReducers.ArrayFilm);
    console.log(ArrayFilm)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(GetListFilm()) }, [])
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        slickNext:false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <section className="container film-slider">
            <h1 className="m-5"><i class='bx bx-camera-movie mr-4 display-4'></i>TOP MOVIE</h1>
            <Slider {...settings}>
                {ArrayFilm?.map((item, index) => {
                    return (
                        <section key={index} className="filmCarousel01">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card" style={{background:`url(${item.hinhAnh})`}} >
                                            <div className="card-spacing" />
                                            <div className="card-content">
                                                <h5>{item.tenPhim}</h5>
                                                <p className="rating">⭐ ⭐ ⭐ ⭐ ⭐  5/5</p>
                                                <div className="tags">
                                                    <div className="tagbox purple mr-2">{moment(item.ngayKhoiChieu).format('dddd')}</div>
                                                    <div className="tagbox pink">{moment(item.ngayKhoiChieu).format('l LT')}</div>
                                                </div>
                                                <div className="description">{item.moTa}</div>
                                                <div className="mt-3"><h4>Cast:</h4></div>
                                                <div className="cast-list">
                                                    <div className="cast-circle">
                                                        <img src="https://i.imgur.com/eavwYjV.jpg" />
                                                    </div>
                                                    <div className="cast-circle">
                                                        <img src="https://i.imgur.com/eJSW9lc.png" />
                                                    </div>
                                                    <div className="cast-circle">
                                                        <img src="https://i.imgur.com/UKPJbet.jpg" />
                                                    </div>
                                                    <div className="cast-circle">
                                                        <img src="https://i.imgur.com/y4JwdBj.png" />
                                                    </div>
                                                    <div className="cast-circle">
                                                        <img src="https://i.imgur.com/i7HOvJ4.png" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </Slider>
        </section>
    )
}
