import React,{useEffect, useState,Fragment} from 'react'
import "./Header.scss"
import logo from "../../Assets/Images/logo.svg"
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
export default function Header() {
  const {taiKhoan} = useSelector(state=>state.UserReducer);
  const {loaiNguoiDung} = useSelector(state=>state.UserReducer);
  const thongTinPhongVe = useSelector(state => state.FilmReducers.thongTinPhongVe);
  const {danhSachGheDangDat} = useSelector(state => state.QuanLyDatVeReducer);
  const [scroll, setScroll] = useState ('none')

  const [quantityCart, setQuantityCart] = useState (0)
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener('scroll',() => setScroll(window.pageYOffset > 100 ? '#0a1e5e' : 'none'));
    setQuantityCart(danhSachGheDangDat.length)
  },[danhSachGheDangDat.length]);
 
  
  const [openCart, setOpenCart] = useState('')

  // const handleOpenCart = () => {
  //   setOpenCart((openCart) => ({
  //     ...openCart,
  //     expanded: openCart.expanded === false ? true : true,
  //     itemCart: openCart.itemCart === '' ? 'show' : ''
  //   }))
  // }
  // console.log(openCart)


  const tinhTongTien = () => {
    return danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
        return tongTien += gheDangDat.giaVe;
    }, 0);
  }


  function NavMenu(){
    const arrMenu = [
      {to:'/home', text:'home'},
      {to:'/app', text:'app'},
      {to:'/about', text:'about'},
      {to:'/contact', text:'contact'},
    ]
    return(
      <Fragment>
        {arrMenu.map(item => <li className="nav-item px-3"><NavLink className="nav-link text-light nav-item text-uppercase" to={item.to}> {item.text} </NavLink></li>)}
      </Fragment>
    )
  }

  
  const navDropdown = (to, text) => {
    return  <NavLink className="nav-link dropdown-item text-light" to={to}>{text}</NavLink>
  }

  function renderCart () {
    return (
      <div className="dropdown-menu submenu ticket p-0 mt-4 bg-transparent">
        <div className="ticket__wrapper bg-white p-3">
          <div className="d-flex justify-content-between font-weight-bold">
            <div>BOOKING</div>
            <div>{danhSachGheDangDat.length} 🎟 </div>
          </div>
        </div>
        <div className="ticket__divider bg-white">
          <div className="ticket__notch" />
          <div className="ticket__notch ticket__notch--right" />
        </div>
        <div className="ticket__body bg-white p-3">
          {danhSachGheDangDat?.map((gheDangDat, index) => {
            return(
              <section className="ticket__section bg-white" key = {index}>   
                <i class='bx bx-x-circle d-block text-right mb-2'
                  onClick={()=>{
                    localStorage.setItem("danhSachGheDangDat", JSON.stringify(gheDangDat))
                    console.log(gheDangDat)
                    dispatch({
                        type:'HUY_DAT_VE',
                        gheDangDat
                      })}}> </i>
                <div className="d-flex justify-content-between">
                  <h5>{thongTinPhongVe.thongTinPhim?.tenPhim}</h5>
                  <h5>{thongTinPhongVe.thongTinPhim?.tenRap}</h5>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="mb-2">Ghế: {gheDangDat.stt} ({gheDangDat.loaiGhe})</div>
                  <div>{gheDangDat.giaVe.toLocaleString() +" đ"}</div>
                </div>
                <h6>{thongTinPhongVe.thongTinPhim?.tenCumRap}</h6>
                <p>{thongTinPhongVe.thongTinPhim?.diaChi}</p>
              </section>
          )})}     
        </div>
        <div className="ticket__divider bg-white">
          <div className="ticket__notch" />
          <div className="ticket__notch ticket__notch--right" />
        </div>
        <div className="bg-white p-2 pb-3 pt-3 text-center">
          <div className="d-flex justify-content-between font-weight-bold mb-3">
            <span>Total Paid</span>
            <h5>{tinhTongTien().toLocaleString() + " đ"}</h5>
          </div>
          <NavLink className="btn btnSignInUp px-5" to="">Payment</NavLink>
        </div>
      </div>
     
    )
  }

  return (
    <header className="header w-100 position-fixed text-light" style ={{background:scroll}}>
      <div className="dropdown rounded __cart" data-totalitems={quantityCart}>
        <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-shopping-cart bx-tada text-light"></i>
        </button>
        {renderCart()}
      </div>



     
        
      <div className="container pt-3 text-center">
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#"><img src={logo} alt={logo} /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto border-bottom">
              <NavMenu/>
              <li className="nav-item px-3 dropdown"><a className="nav-link text-white dropdown-toggle" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">{taiKhoan !== '' ? taiKhoan : 'PR0FILE'}</a>
                <ul className="dropdown-menu bg-transparent" aria-labelledby="navbarScrollingDropdown" style={{border:'none'}} >
                  <li className="nav-item px-3">{taiKhoan === '' ? navDropdown('/login','SIGN IN') : navDropdown('/profile','PR0FILE')}</li>
                  <li className="nav-item px-3"><NavLink className="nav-link dropdown-item text-light" to="/register">SIGN UP</NavLink></li>
                  {loaiNguoiDung === 'QuanTri' ? <li className="nav-item px-3">{navDropdown('/admin','ADMIN')}</li> : null}
                  {taiKhoan  !== '' ? <li className="nav-item px-3"><a className="nav-link dropdown-item text-white" onClick ={()=>{dispatch({type:'LOG_OUT'})}} href="#">LOG OUT</a></li> : null}
                  <button onClick={() => {
                    console.log(taiKhoan)
                  }}>hahahaa</button>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        
      </div>
      
    </header>
  )
}
