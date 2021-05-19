import React from 'react'
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
export default function Checkout() {
    const { danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer);
    console.log(`danh sách ghế ${danhSachGheDangDat}`)
    const dispatch = useDispatch();
    const GheDuocChon = styled.button`
    border: none;
    border-radius: 5px;
    background: orange;
    cursor: pointer;
    width: 50px;
    height: 50px;
`
    const renderGheDangDat = () => {
        return danhSachGheDangDat.map((gheDangDat, index) => {
            return <tr key={index}>
                <td className="text-success font-weight-bold" style={{ fontSize: 23 }}>{gheDangDat.stt}</td>
                <td className="text-success font-weight-bold" style={{ fontSize: 23 }}>{gheDangDat.giaVe.toLocaleString() +" đ"}</td>
                <td className="text-danger font-weight-bold text-center"><i class='bx bxs-trash'style={{ fontSize: 30 }} onClick={()=>{
                    localStorage.setItem("danhSachGheDangDat", JSON.stringify(gheDangDat))
                    console.log(gheDangDat)
                    dispatch({
                        type:'HUY_DAT_VE',
                        gheDangDat
                    })
                }}></i></td>
            </tr>
        })
    }
    const tinhTongTien = () => {
        return danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
            return tongTien += gheDangDat.giaVe;
        }, 0);
    }
    return (
        <section>
            <h2 className="text-center text-white">Danh sách ghế bạn chọn</h2>
            <div>
                <div className="d-flex align-items-center mb-2">
                    <GheDuocChon className="bg-warning"/>
                    <span className="mx-3">Ghế được chọn</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <GheDuocChon className="bg-success"/>
                    <span className="mx-3">Ghế được chọn</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <GheDuocChon className="bg-white"/>
                    <span className="mx-3">Ghế được chọn</span>
                    <i class='bx bxs-download bx-fade-down mx-auto' style={{ fontSize: 25 }}></i>
                </div>
            </div>
            <table className="table text-light table-dark table-hover" border="2">
                <thead>
                    <tr>
                        <th>Số ghế </th>
                        <th>Giá vé</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {renderGheDangDat()}
                    <tr><td colSpan="3" className="text-primary font-weight-bold text-right" style={{ fontSize: 25 }}><i class='bx bx-dollar mx-3'></i>{tinhTongTien().toLocaleString() + " đ"}</td></tr>
                    <tr><td colSpan="3" className="text-warning font-weight-bold text-right" style={{ fontSize: 25, cursor:'pointer' }}><i class='bx bxs-send mx-5 bx-fade-right'></i>Thanh toán</td></tr>
                </tbody>
            </table>
        </section>
    )
}
