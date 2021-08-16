import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { GetListFilm } from "../../Redux/Actions/FilmAction"
import { NavLink } from 'react-router-dom';
import hai_D from "../../Assets/img/nav-icon-2d.png"
import "./ListFilm.css"
export default function ListFilm() {
    const ArrayFilm = useSelector(state => state.FilmReducers.ArrayFilm);
    console.log(ArrayFilm)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(GetListFilm()) }, [])

    return (
        <article className="pt-5 m-auto">
            <section style={{ maxWidth: "1300px", margin: "auto" }}>
                <section className="row mr-0">
                    {ArrayFilm?.map((item, index) => {
                        return (
                            <div className="col-md-6 p-4" key={index} style={{}}>
                                <div className="row mx-2 Film" style={{ background: `linear-gradient( rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.8)), url(${item.hinhAnh})` }}>

                                    <div className="col col-md-6 p-3 film-item-pic">
                                        <div className="item_image_film p-1">
                                            <img src={item.hinhAnh} alt={item.hinhAnh} width="100%" />
                                            <div class="trailer_film">
                                                <a href={item.trailer}>
                                                    <i className="fa fa-play text-light"></i>
                                                </a>
                                                <span className="text-white">Click to trailer</span>
                                                <span className="text-white"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col col-md-6 p-3 text-white">
                                        <h2 className="">{item.tenPhim}</h2>
                                        <p className="pb-5">{item.moTa}</p>
                                    </div>

                                    <div className="col col-md-6" style={{ borderTop: "1px dotted #FFF" }}>
                                        <img className="mt-2 pt-2 d-block h-25 mb-2" src={hai_D} alt="" />
                                        <span className="">Đánh gía:</span>
                                        <span className="text-warning mx-2">★★★★★</span>
                                    </div>

                                    <section className="col col-md-6" class="btn_film">
                                        <a>
                                            <span><i class="fas fa-calendar-day mr-2"></i>Chi tiết</span>
                                            <span><i class="fas fa-ticket-alt px-2"></i>Mua vé</span>
                                        </a>
                                    </section>



                                </div>
                            </div>
                        )
                    })}
                </section>
            </section>
        </article>
    )
}
