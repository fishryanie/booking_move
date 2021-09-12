import React,{useEffect, useState,Fragment} from 'react'
import "../../Scss/Header.scss"
import logo from "../../Assets/Images/logo.svg"
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
export default function Header() {
  const {taiKhoan} = useSelector(state=>state.UserReducer);
  const {loaiNguoiDung} = useSelector(state=>state.UserReducer);
  const thongTinPhongVe = useSelector(state => state.FilmReducers.thongTinPhongVe);
  const {danhSachGheDangDat} = useSelector(state => state.QuanLyDatVeReducer);
  const [scroll, setScroll] = useState ('none')
  const [openCart, setOpenCart] = useState('')
  const [quantityCart, setQuantityCart] = useState (0)
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener('scroll',() => setScroll(window.pageYOffset > 100 ? '#0a1e5e' : 'none'));
    setQuantityCart(danhSachGheDangDat.length)
  },[danhSachGheDangDat.length]);
 
  
  



  const tinhTongTien = () => {
    return danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
      return tongTien += gheDangDat.giaVe;
    }, 0);
  }


  
  const navDropdown = (to, text) => {
    return  <NavLink className="nav-link dropdown-item text-dark" to={to}><i class="fas fa-sign-in-alt me-3 icnav"></i>{text}</NavLink>
  }

  function renderCart () {
    return (
      <div className={`dropdown-menu submenu ticket p-0 mt-4 bg-light ${openCart}`} style={{border:'none'}} >
        <div className="ticket__wrapper bg-white p-3 m-0">
          <div className="d-flex justify-content-between font-weight-bold bg-white">
            <div>BOOKING</div>
            <div>{danhSachGheDangDat.length} 🎟 </div>
          </div>
        </div>
        <div className="ticket__divider bg-white">
          <div className="ticket__notch " />
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
          <button className="btn btnSignInUp px-5" 
            data-bs-toggle="modal" data-bs-target="#checkout"
            onClick={()=>{setOpenCart('')}} >Payment</button>
        </div>
      </div>
     
    )
  }

  function cartNull(){
    return (
      <div className ={`dropdown-menu submenu bg-white text-center mt-4 ${openCart}`}>
        <h5>Giỏ hàng đang rỗng</h5>
      </div>
    )
  }





  
  return (
    <header className="header position-fixed w-100" style ={{background:scroll}}>
      <div className="dropdown rounded __cart" data-totalitems={quantityCart}>
          <button type="button" onClick={()=>{setOpenCart(openCart === '' ? 'show' : '')}}>
            <i class="fas fa-shopping-cart bx-tada text-light"></i>
          </button>
          {danhSachGheDangDat.length ? renderCart() : cartNull() }
        </div> 
      <nav className="navbar navbar-expand-lg navbar-dark w-100">
        <div className="container d-flex">
          <NavLink className="navbar-brand col-xl-5 col-lg-4 text-center" to="/"><img src={logo} alt={logo} /></NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end col-xl-7 " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <NavLink className="navbar-brand col-xl-5 col-lg-4 text-center" to="/"><img src={logo} alt={logo} /></NavLink>
              <button type="button" class="btn-close text-reset bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <ul className="navbar-nav mx-auto border-bottom text-center">
              <li className="nav-item px-3"><NavLink className="nav-link text-light nav-item text-uppercase" to='/home'><i class='bx bx-home icnav'></i>Home</NavLink></li>
              <li className="nav-item px-3"><NavLink className="nav-link text-light nav-item text-uppercase" to='/app'><i class='bx bx-mobile-vibration icnav' ></i>app</NavLink></li>
              <li className="nav-item px-3"><NavLink className="nav-link text-light nav-item text-uppercase" to='/about'><i class='bx bx-chat icnav'></i>about</NavLink></li>
              <li className="nav-item px-3"><NavLink className="nav-link text-light nav-item text-uppercase" to='/contact'><i class='bx bx-chat icnav' ></i>contact</NavLink></li>
              <li className="nav-item px-3 dropdown" onClick={()=>{setOpenCart('')}}><a className="nav-link text-white" href="#" id="a"  data-bs-toggle="dropdown" role="button" aria-expanded="false"><i className='bx bx-id-card icnav'></i>{taiKhoan !== '' ? taiKhoan : 'PR0FILE'}<i className='bx bxs-down-arrow ps-3 pt-1'></i></a>
                <ul className="dropdown-menu bg-white submenu mt-4" aria-labelledby="a">
                  <li className="nav-item px-3">{taiKhoan === '' ? navDropdown('/login','SIGN IN') : navDropdown('/profile','PR0FILE')}</li>
                  <li className="nav-item px-3"><NavLink className="nav-link dropdown-item text-dark" to="/register"><i className="fas fa-user-plus me-3 icnav"></i>SIGN UP</NavLink></li>
                  {loaiNguoiDung === 'QuanTri' ? <li className="nav-item px-3">{navDropdown('/admin','ADMIN')}</li> : null}
                  {taiKhoan  !== '' ? <li className="nav-item px-3"><a className="nav-link dropdown-item text-dark" onClick ={()=>{dispatch({type:'LOG_OUT'})}} href="#"><i class="fas fa-sign-out-alt me-3 icnav"></i>LOG OUT</a></li> : null}
                </ul>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>    
  )
}


