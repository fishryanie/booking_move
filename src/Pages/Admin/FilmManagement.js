import React from 'react'
import './Admin.css'
import { useSelector, useDispatch } from "react-redux"
export default function FilmManagement() {
    const ArrayFilm = useSelector(state => state.FilmReducers.ArrayFilm);
    console.log(ArrayFilm)
    return (
        <div>
            <section className="container-fluid">
                <h2>Danh Sách Phim</h2>
                <div class="row">
                    <div class="col-8">
                        <button id="btnThem" type="button" class="btn btn-warning mb-3 text-white" data-toggle="modal" data-target="#exampleModal">
                            Thêm phim
                        </button>
                    </div>
                </div>
                <div class="table-responsive foodTable">
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr class="bg-warning">
                                <th>Mã phim</th>
                                <th>Tên phim</th>
                                <th>Bí danh</th>
                                <th>Trailer</th>
                                <th>Hình ảnh</th>
                                <th>Mô tả</th>
                                <th>Ngày khởi chiếu</th>
                                <th>Đánh giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="tbodyFood">
                        {ArrayFilm?.map((item, index) => {
                                return (
                                    <tr key ={index}>
                                        <td >{item.maPhim}</td>
                                        <td>{item.tenPhim}</td>
                                        <td>{item.biDanh}</td>
                                        <td >{item.trailer}</td>
                                        <td ><img src={item.hinhAnh} alt="" width='50' height="80"/> </td>
                                        <td >{item.moTa}</td>
                                        <td>{item.ngayKhoiChieu}</td>
                                        <th>{item.danhGia}</th>
                                    </tr>
                                )
                        })}
                        </tbody>
                    </table>
                </div>
            </section>


            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Thêm phim</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form className="needs-validation" id="foodForm">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="foodID">Mã phim</label>
                            <input className="form-control" placeholder="Nhập ID" disabled />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="tenMon">Tên phim</label>
                            <input type="text" className="form-control" id="tenMon" placeholder="Nhập tên phim" required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="tenMon">Bí danh</label>
                            <input type="text" className="form-control" id="tenMon" placeholder="Nhập bí danh phim" required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="giaMon">Trailer</label>
                            <input type="text" className="form-control" id="giaMon" placeholder="Thêm trailer phim" defaultValue required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="tinhTrang">Đánh giá</label>
                            <input type="number" className="form-control" placeholder="Thêm lượt đánh giá"/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="giaMon">Ngày khởi chiếu</label>
                            <input type="date" className="form-control"/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-group">
                            <label htmlFor="hinhMon">Hình phim</label>
                            <input type="file" className="form-control-file" id="hinhAnh" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="moTa">Mô Tả</label>
                        <textarea className="form-control" rows={3} defaultValue={""} />
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-warning" id="btnThemMon">Thêm</button>
                </div>
                </div>
            </div>
            </div>

        </div>
    )
}
