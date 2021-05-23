import React,{useEffect} from 'react'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch} from 'react-redux'
import { GetListFilm } from "../../Redux/Actions/FilmAction"
import { layThongTinChiTietPhimAction } from "../../Redux/Actions/FilmAction"
// import {GetListUser} from '../../Redux/Actions/UserAction'
export default function MovieSchedule() {
    const ArrayFilm = useSelector(state => state.FilmReducers.ArrayFilm);
    const chiTietPhim = useSelector(state => state.FilmReducers.DetailFilm.heThongRapChieu);
    const { register,  handleSubmit,  formState:{ errors }  } = useForm();
    const onSubmit = (data) => {
        dispatch(layThongTinChiTietPhimAction(parseInt(data.maPhim)))
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetListFilm())
    },[])

    console.log( chiTietPhim);
    return (
        <div>
             <section className="container-fluid">
                <h2 className="mt-3">Danh sách lịch chiếu theo phim</h2>
                <div class="row">
                    <div className="col-9">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <select className="form-select form-select-sm btn btn-outline-secondary" aria-label=".form-select-sm example" {...register('maPhim')}>
                                <option selected disabled>Chọn phim</option>
                                {ArrayFilm.map((film, index) => {
                                    return <option key = {index}value={film.maPhim}>{film.maPhim} {film.tenPhim}</option>
                                })}
                            </select>
                            <button type='submit'></button>
                        </form>
                    </div>
                    <div class="col-3 text-right">
                        <button id="btnThem" type="button" class="btn btn-warning mb-3 font-weight-bold " data-toggle="modal" data-target="#exampleModal">
                            <i class='bx bx-cloud-upload bx-fade-up mr-2' style={{fontSize:'20px'}}></i>Thêm lịch chiếu
                        </button>
                    </div>


                </div>
                <div class="table-responsive foodTable">
                    <table class="table table-hover table-sm text-center">
                        <thead>
                            <tr class="bg-warning">
                                <th>Mã lịch chiếu</th>
                                <th>Mã rạp</th>
                                <th>Tên rap</th>
                                <th>Ngày giờ chiếu</th>
                                <th>Giá vé</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="tbodyFood">
                        {}

                        {/* {listUser?.map((item, index) => {
                                return (
                                    <tr key ={index}>
                                        <td className="">{item.hoTen}</td>
                                        <td className=''>{item.soDt}</td>
                                        <td className=''>{item.email}</td>
                                        <td className=''>{item.taiKhoan}</td>
                                        <td className=''>{item.matKhau}</td>
                                        <td className="text-danger font-weight-bold text-center px-1"><i class='bx bxs-trash'style={{ fontSize: 30,cursor:'pointer' }}/></td>
                                        <td className="text-primary font-weight-bold text-center px-5"> <i class='bx bxs-wrench'style={{ fontSize: 30,cursor:'pointer' }}/></td>
                                    </tr>
                                )
                        })} */}
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
