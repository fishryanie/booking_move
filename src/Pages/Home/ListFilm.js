import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { GetListFilm } from "../../Redux/Actions/FilmAction"
import hai_D from "../../Assets/img/nav-icon-2d.png"
import "./ListFilm.css"
export default function ListFilm() {
    const ArrayFilm = useSelector(state => state.FilmReducers.ArrayFilm);

    console.log(ArrayFilm)

    const dispatch = useDispatch();
    useEffect(() => {dispatch(GetListFilm())},[])

    return (
        <article className="pt-5 m-auto">
            <section style={{maxWidth:"1300px", margin:"auto"}}>
                <section className="text-center d-flex tab">
                    <a className="sub_tab1 sub_tab">Tất cả phim</a>
                    <a className="sub_tab2 sub_tab">Phim sắp chiếu</a>
                    <a className="sub_tab3 sub_tab">Suất đặc biệt</a>
                </section>
                <section className="row mr-0">
                    {ArrayFilm?.map((item, index) => {
                        return (
                            <div className="col-6 p-4" key={index} style={{}}>
                                <div className="row mx-2 Film">
                                    <div className="col-6 p-3 img">
                                        <div className="boder p-1">
                                            <img src={item.hinhAnh} alt={item.hinhAnh} width="100%"/>
                                        </div>
                                    </div>
                                    <div className="col-6 p-3 text-white">
                                        <h2 className="">{item.tenPhim}</h2>
                                        <p className="pb-5">{item.moTa}</p>
                                        <div style={{borderTop: "1px dotted #FFF"}}>
                                            <img className="mt-2 pt-2 d-block h-25 mb-2" src={hai_D} alt="" />
                                            <span className="">Đánh gía:</span>
                                            <span className="text-warning mx-2">★★★★★</span>
                                        </div>
                                        <div className="booking p-3">
                                            <a className="deital">Xem chi tiết</a>
                                            <a className="ticket" >Đặt vé</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )})}
                </section>
            </section>
        </article>
    )
}
