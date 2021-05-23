import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {GetListUser} from '../../Redux/Actions/UserAction'
export default function Member() {
    const listUser = useSelector(state => state.UserReducer.listUser)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetListUser())
    }, [])
    console.log(listUser)
    return (
        <div>
             <section className="container-fluid">
                <h2 className="mt-3">Danh Người dùng</h2>
                <div class="row">
                    <div class="col-8">
                        <button id="btnThem" type="button" class="btn btn-warning mb-3 text-white" data-toggle="modal" data-target="#exampleModal">
                        <i class='bx bx-cloud-upload bx-fade-up mx-2' style={{fontSize:'20px'}}></i>
                            Thêm người dùng
                        </button>
                    </div>
                </div>
                <div class="table-responsive foodTable">
                    <table class="table table-hover table-sm text-center">
                        <thead>
                            <tr class="bg-warning">
                                <th>Họ tên</th>
                                <th>Số đt</th>
                                <th>Email</th>
                                <th>Tài khoản</th>
                                <th>Mật khẩu</th>
                                <th>Loại người dùng</th>
                                <th>Xóa</th>
                                <th>Cập nhật</th>
                            </tr>
                        </thead>
                        <tbody id="tbodyFood">
                        {listUser?.map((item, index) => {
                                return (
                                    <tr key ={index}>
                                        <td className="">{item.hoTen}</td>
                                        <td className=''>{item.soDt}</td>
                                        <td className=''>{item.email}</td>
                                        <td className=''>{item.taiKhoan}</td>
                                        <td className=''>{item.matKhau}</td>
                                        <td className='px-5'>{item.maLoaiNguoiDung}</td>
                                        <td className="text-danger font-weight-bold text-center px-1"><i class='bx bxs-trash'style={{ fontSize: 30,cursor:'pointer' }}/></td>
                                        <td className="text-primary font-weight-bold text-center px-5"> <i class='bx bxs-wrench'style={{ fontSize: 30,cursor:'pointer' }}/></td>
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
