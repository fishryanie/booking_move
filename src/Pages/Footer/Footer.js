import React, {useEffect} from 'react'
import { useSelector,  useDispatch } from "react-redux"
import "./Footer.css"
import logo from "../../Assets/img/logo.svg"
import nappa from"../../Assets/img/napas-40.png"
import masterCard from"../../Assets/img/payment-mastercard.png"
import momo from"../../Assets/img/momo.jpeg"
import zalo from"../../Assets/img/zalopay.png"
import vissa from"../../Assets/img/payment-visa.png"
import thongbao from "../../Assets/img/dathongbao.png"
import dolby from "../../Assets/img/dolby2.png"
import crhistie from "../../Assets/img/crhistie.png"
import hai_D from "../../Assets/img/2d.jpeg"
import ba_D from "../../Assets/img/3d.png"
import coffee from "../../Assets/img/cinestar-coffee-02.png"
import line  from "../../Assets/img/line-bg.png"

export default function Footer() {
    const  heThongRap  = useSelector(state => state.FilmReducers)
    console.log("heThongRap", heThongRap)
    return (
        <footer className="text-center">
            <section className="footer">
            <img className="mt-5" src={line} alt="" width="100%"/>
            <section className="container pb-5 pt-5">
                <div className="text-center mb-5" ><img src={logo} alt=""/></div>
                <div className="row text-center">
                    <div className="col-2">
                        <h2 className="title">LIÊN KẾT</h2>
                        <div className="d-flex p-2">
                            <a href="" className="facebook mx-1 p-1"><i class='bx bxl-facebook'></i></a>
                            <a href="" className="youtube mx-1 p-1"><i class='bx bxl-youtube' ></i></a>
                        </div>
                        <h2 className="title">HOT LINE</h2>
                        <a href="" type="phone">0909 394 145</a>
                    </div>
                    <div className="col-3">
                        <h2 className="title">HỆ THỐNG RẠP</h2>
                    </div>
                    <div className="col-2">
                        <h2 className="title">FLEX CENEMA</h2>
                        <a href="">Phim đang chiếu</a>
                        <a href="">Phim sắp chiếu</a>
                        <a href="">Xuất chiếu đặc biệt</a>
                        <a href="">Lịch chiếu</a>
                        <a href="">Khuyến mãi</a>
                    </div>
                    <div className="col-2">
                        <h2 className="title">THÔNG TIN</h2>
                        <a href="">Giới thiệu</a>
                        <a href="">Tin tức</a>
                        <a href="">Hỏi và đáp</a>
                        <a href="">Liên hệ</a>
                    </div>
                    <div className="col-3">
                        <h2 className="title">CHÍNH SÁCH VÀ QUY ĐỊNH</h2>
                        <a href="">Quy định chung</a>
                        <a href="">Điều khoản và giao dịch</a>
                        <a href="">Chính sách bảo mật</a>
                        <a href="">Thông tin công ty</a>
                    </div>
                </div>
                <div className="mt-5">
                    <img src={dolby} alt={dolby}/>
                    <img src={crhistie} alt={crhistie}/>
                    <img src={hai_D} alt={hai_D}/>
                    <img src={ba_D} alt={ba_D}/>
                    <img src={coffee} alt={coffee}/>
                </div>



            </section>


            <section className="pay p-3">
                <p className="text-secondary">Chấp nhận thanh toán</p>
                <img className="px-2" src={nappa} alt={nappa}></img>
                <img className="px-2" src={vissa} alt={vissa}></img>
                <img className="px-2" src={masterCard} alt={masterCard}></img>
                <img className="px-2" src={zalo} alt={zalo}></img>
                <img className="px-2" src={momo} alt={momo}></img>
            </section>

            <section className="thongBao p-3">
                <img className="mb-3" src={thongbao} alt={thongbao}/>
                <p >CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM FLEX CINEMA</p>
                <p>ĐỊA CHỈ: 123/32/2 ĐƯỜNG SỐ 2, PHƯỜNG 15, QUẬN GÒ VẤP, TP.HCM</p>
                <p>GIẤY CNĐKDN SỐ: 0312742744, ĐĂNG KÝ LẦN ĐẦU NGÀY 18/04/2014, ĐĂNG KÝ THAY ĐỔI LẦN THỨ 2 NGÀY 15/09/2014, CẤP BỞI SỞ KH & ĐT TP.HCM</p>
                <p className="mt-3">2021 © CINESTAR. ALL RIGHTS RESERVED.</p>
            </section>


            </section>
        </footer>
    )
}
