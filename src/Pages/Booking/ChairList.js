import React, {Fragment} from 'react'
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
export default function ChairList() {
    const thongTinPhongVe = useSelector(state => state.FilmReducers.thongTinPhongVe);
    const { danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer);
    const dispatch = useDispatch();

    console.log(thongTinPhongVe)
    const BtnChair = styled.button`
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 40px;
        height: 40px;
    `
let renderChair = () => {
    return thongTinPhongVe.danhSachGhe?.map((chair, index) => {
            //Xác định ghế đã đặt và chưa đặt
            let classGheDaDat = chair.daDat ? 'bg-secondary' : '';
            let classGheVip = chair.loaiGhe === 'Vip' ? 'bg-danger' : '';
            //Xác định ghế đang đặt
        let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === chair.maGhe);
        let classGheDangDat =  indexGheDD !== -1 ? 'bg-success' : '';
            return (
            <Fragment key={index}>
                <BtnChair className={`${classGheDaDat}  ${classGheDangDat} ${classGheVip} mt-2 mx-2`} disabled={chair.daDat} onClick={()=>{

                    dispatch({
                        type:'DAT_GHE',
                        chair
                    })
                }}>
                    {chair.daDat === true ? 'X' : chair.stt}
                </BtnChair>
                {(index + 1) % 16 === 0 ? <br /> : ''}
        </Fragment>
    )})
}
    return (
        <section className="text-center mt-5 mb-5">
            {renderChair()}
        </section>
    )
}
