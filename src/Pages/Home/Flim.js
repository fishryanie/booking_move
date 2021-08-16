import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { GetListFilm } from "../../Redux/Actions/FilmAction"
import './film.css'
export default function Flim() {
    const ArrayFilm = useSelector(state => state.FilmReducers.ArrayFilm);
    console.log(ArrayFilm)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(GetListFilm()) }, [])
    return (
        <section className="mainFilm">
            <section className="container">
                <section className="row">
                    <section className="col-md-4"></section>
                    <section className="itemFilm col-md-8">
                        {ArrayFilm?.map((item, index) => {
                            return (
                                <section className="col-12 p-3" key={index}>
                                    <div className="movie_card" id="bright">
                                        <div className="info_section">
                                            <div className="movie_header">
                                                <img className="locandina" src={item.hinhAnh} width="100" height="200" />
                                                <h2>{item.tenPhim}</h2>
                                                <h4>2017, David Ayer</h4>
                                                <span className="minutes">117 min</span>
                                                <p className="type">Action, Crime, Fantasy</p>
                                            </div>
                                            <div className="movie_desc"><p className="text">{item.moTa}</p></div>
                                            <div className="movie_social">
                                                <ul>
                                                    <li><i className="material-icons">share</i></li>
                                                    <li><i className="material-icons"></i></li>
                                                    <li><i className="material-icons">chat_bubble</i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="blur_back bright_back" style={{ background: `url(${item.hinhAnh})` }} />
                                    </div>
                                </section>
                            )
                        })}
                    </section>
                </section>
            </section>
        </section>
    )
}
