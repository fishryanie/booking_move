import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { GetListFilm } from "../../Redux/Actions/FilmAction"
import moment from "moment"
import '../../Scss/ListFilm.scss'
export default function Flim() {
  const ArrayFilm = useSelector(state => state.FilmReducers.ArrayFilm);
  console.log(ArrayFilm)
  const dispatch = useDispatch();
  useEffect(() => { dispatch(GetListFilm()) }, [])

  return (  
    <section className="book-store">
      <div className="book-cards">
        {ArrayFilm.map((item, index) =>(
          <div className="book-card" key={index}>
            <div className="position-absolute" style={{bottom:'0',left:'0'}}>
              <i class='bx bxs-share-alt pl-1'></i>
              <i class='bx bxs-heart px-2'></i>
              <i class='bx bx-film'></i>
            </div>
            <div className="content-wrapper">
            
              <div className="menu-icon"><i class='bx bx-dots-vertical d-block p-2'></i></div>
              <img className="book-card-img" src={item.hinhAnh}/>
              <div className="card-content">
                <h3>{item.tenPhim}</h3>
                <div className="tags">
                  <div className="tagbox purple mr-2">
                    {moment(item.ngayKhoiChieu).format("dddd")}
                  </div>
                  <div className="tagbox pink">
                    {moment(item.ngayKhoiChieu).format("l LT")}
                  </div>
                </div>
                <div className="rating mt-2">
                  <span className="pr-3">⭐ ⭐ ⭐ ⭐ ⭐ </span>
                  <span style={{fontSize:'12px',fontStyle:'italic'}}>(1.987 voters)</span>
                </div>
                <p className="card-sum book-sum">{item.moTa}</p>
              </div>
            </div>
            <section class="btnFilm">
              <span>
                <a><i class="fas fa-calendar-day px-2"></i>Chi tiết</a>
                <a><i class="fas fa-ticket-alt px-2"></i>Mua vé</a>
              </span>
            </section>
          </div>
        ))}    
      </div>
    </section>
  )
}
