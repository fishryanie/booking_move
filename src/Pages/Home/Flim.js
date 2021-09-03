import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { GetListFilm } from "../../Redux/Actions/FilmAction"
import { NavLink } from 'react-router-dom'
import moment from "moment"
import Pagination from '@material-ui/lab/Pagination';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import '../../Scss/Dialog.css'
import '../../Scss/ListFilm.scss'
import AlertDialogSlide from './DialogBuyTicket'
export default function Flim() {
  useEffect(() => { dispatch(GetListFilm())}, [])
  const ArrayFilm = useSelector(state => state.FilmReducers.ArrayFilm);
  const [showMenu, setShowMenu] = React.useState('')
  const dispatch = useDispatch();
  const [openDiaLog, setOpenDiaLog] = React.useState(false);
  const [idFilm, setIdFilm] = React.useState(false);
  const [page, setPage] = React.useState(1)
  const [silce, setSilce] = React.useState({ from:0, to:8 })
  const handle= (e, value) => {
    setPage(value);
    setSilce((silce) => ({
      ...silce,
      from: value === 1 ? 0 : value === 2 ?  8 : value === 3 ? 16 : value === 4 ? 24 : value === 5 ? 32 : value === 6 ? 40 : value === 7 ? 48 : 56, 
      to: value === 1 ? 8 : value === 2 ? 16 : value === 3 ? 24 : value === 4 ? 32 : value === 5 ? 40 : value === 6 ? 48 : value === 7 ? 56 : 60
    }));
  };
 
  
 
  return (  
    <section className="book-store mt-5 mb-5">
      <AlertDialogSlide idFilm={idFilm}></AlertDialogSlide>
     
     
      <h1 className="display-4">MOVIES</h1>
      <p>Be sure not to miss these Movies today.</p>
      <div className="book-cards">
        {ArrayFilm.slice(silce.from, silce.to).map((item, index) => (
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
                <h4>{item.tenPhim}</h4>
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
                <NavLink to ={`/detail/${item.maPhim}`}><i class="fas fa-calendar-day px-2"></i>Chi tiết</NavLink>
                <NavLink type="button" data-toggle="modal" data-target="#exampleModal"  to="" onClick={()=>{setOpenDiaLog(true);setIdFilm(item.maPhim)}}><i class="fas fa-ticket-alt px-2"></i>Mua vé</NavLink>
              </span>
            </section>
           
          </div>
        ))}    
      </div>
      <div>

      </div>
      <Pagination color='primary' size="small" variant="outlined" count={8} page={page} shape="rounded" showFirstButton showLastButton  onChange={handle}/>
    </section>
  )
}
