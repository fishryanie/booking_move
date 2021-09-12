import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetListFilm } from "../../Redux/Actions/FilmAction";
import Slider from "react-slick";
import moment from "moment";
import "../../Scss/FilmSlider.scss";

const arrImageCast = ['https://i.imgur.com/eavwYjV.jpg','https://i.imgur.com/eJSW9lc.png','https://i.imgur.com/UKPJbet.jpg','https://i.imgur.com/y4JwdBj.png','https://i.imgur.com/i7HOvJ4.png']

export default function FilmSlider() {
  const ArrayFilm = useSelector((state) => state.FilmReducers.ArrayFilm);
  console.log(ArrayFilm);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetListFilm());
  }, []);
  var settings = {
    dots: false, infinite: true, autoplay: true, slidesToShow: 5, slidesToScroll: 1, initialSlide: 0, autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 2, infinite: true } },
      { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1, initialSlide: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, initialSlide: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 2, slidesToScroll: 1, initialSlide: 2} },
    ],
  };
  return (
    <section children="FlimSlider" style={{ background: "#001232" }}>
      <section className="container text-light p-0">
        <h1 className="m-5">
          <i class="bx bx-camera-movie mr-4 display-4"></i>TOP MOVIE
        </h1>
        <Slider {...settings}>
          {ArrayFilm?.map((item, index) => {
            return (
              <section key={index} className="filmCarousel01">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="card" style={{ backgroundImage: `url(${item.hinhAnh})` }}>
                        <div className="card-spacing" />
                        <div className="card-content">
                          <h5>{item.tenPhim}</h5>
                          <p className="rating">⭐ ⭐ ⭐ ⭐ ⭐ 5/5</p>
                          <div className="tags">
                            <div className="tagbox purple mr-2">
                              {moment(item.ngayKhoiChieu).format("dddd")}
                            </div>
                            <div className="tagbox pink">
                              {moment(item.ngayKhoiChieu).format("l LT")}
                            </div>
                          </div>
                          <div className="description">{item.moTa}</div>
                          <div className="mt-3">
                            <h4>Cast:</h4>
                          </div>
                          <div className="cast-list">
                            {arrImageCast?.map(item => <div className="cast-circle"><img src={item} alt="" /></div>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </Slider>
      </section>
    </section>
  );
}
