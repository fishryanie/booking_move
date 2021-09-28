import * as yup from 'yup';
import React,{useEffect, useState} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateMemberAction } from '../../Redux/Actions/AdminAction'
import { CreateMovieAction } from '../../Redux/Actions/AdminAction'

const arrayInfoMovie = [
  {label:'Mã phim', key:'maPhim', placeholder:'Nhập ID', class:'col-md-6 mb-3', disabled:true},
  {label:'Tên phim', key:'tenPhim', placeholder:'Nhập tên phim', class:'col-md-6 mb-3'},
  {label:'Bí danh', key:'biDanh', placeholder:'Nhập bí danh', class:'col-md-6 mb-3'},
  {label:'Trailer', key:'trailer', placeholder:'Nhập link trailer', class:'col-md-6 mb-3'},
  {label:'Đánh giá', key:'danhGia', placeholder:'Thêm lượt đánh giá', class:'col-md-6 mb-3', disabled:true},
  {label:'Ngày khởi chiếu', key:'ngayKhoiChieu', placeholder:'Nhập ngày khởi chiếu', class:'col-md-6 mb-3'},
  {label:'Hình ảnh', key:'hinhAnh', placeholder:'Nhập tên phim', class:'col-12',type:'file'},
  {label:'Mô tả', key:'moTa', placeholder:'Nhập mô tả', class:'col-12 mb-3'},
]

const arrayInfoMember = [
  {label:'Họ tên', key:'hoTen', placeholder:'Nhập họ tên', class:'col-md-6 mb-3'},
  {label:'Tài khoản', key:'taiKhoan', placeholder:'Nhập tài khoản', class:'col-md-6 mb-3'},
  {label:'Mật khẩu', key:'matKhau', placeholder:'Nhập mật khẩu', class:'col-md-6 mb-3'},
  {label:'Email', key:'email', placeholder:'Nhập email', class:'col-md-6 mb-3'},
  {label:'Số điện thoại', key:'soDt', placeholder:'Nhập sô điện thoại', class:'col-md-6 mb-3', disabled:true},
  {label:'Loại người dùng', key:'maLoaiNguoiDung', class:'col-md-6 mb-3'},
]

export default function ModelForm(props) {
  const account = useSelector(state=>state.UserReducer.account);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  
    
  

  useEffect(() => {
    if(props.rows != ''){
      for(let key in props.rows[0]){

        setValue(`${key}` , `${key == 'hinhAnh' ? '' : props.rows[0][key]}`)
      }
    }
  },[props.rows])
  

  const onSubmit = (value) => {
    const dataMovie = {
      maPhim: 0,
      tenPhim: value.tenPhim,
      biDanh: value.biDanh,
      trailer: value.trailer,
      hinhAnh: value.hinhAnh,
      moTa: value.moTa,
      maNhom: 'GP01',
      ngayKhoiChieu: value.ngayKhoiChieu,
      danhGia: 0
    }
    const dataMember = {
      hoTen: value.hoTen,
      taiKhoan: value.taiKhoan,
      matKhau: value.matKhau,
      email: value.email,
      maNhom: 'GP01',
      soDt: value.soDt,
      maLoaiNguoiDung: value.maLoaiNguoiDung
    }
  
    if(props.typeModel === 'Create member') CreateMemberAction(dataMember)
    if(props.typeModel === 'Create movie') CreateMovieAction(dataMovie)
  }

  console.log(props.rows)




  const RenderFromMovie = () => {
    return (
      <div className="row">
        {arrayInfoMovie.map((item, index) => {
          return (
            <div className={item.class} key={index}>
              <label>{item.label}</label>
              {
                index !== 7  ? 
                <input className="form-control" disabled={item.disabled} type={item.type} placeholder={item.placeholder} {...register(`${item.key}`)}/> : 
                <textarea className="form-control" rows={3} defaultValue={""} placeholder={item.placeholder} {...register(`${item.key}`)}/>
              }
            </div>
          )
        })}
      </div>
    )
  }

  const RenderFromMember = () => {
    return (
      <div className="row">
        {arrayInfoMember.map((item, index) => {
          return (
            <div className={item.class} key={index}>
              <label>{item.label}</label>
              {
                index !== 5  ? 
                <input className="form-control" type={item.type} placeholder={item.placeholder} {...register(`${item.key}`)}/> : 
                <select className="form-select" {...register(`${item.key}`)}>
                  <option value={'KhachHang'}>Thành viên</option>
                  <option value={'QuanTri'}>Quản trị viên</option>
                </select>   
              }
            </div>
          )
        })}
      </div>
    )
  }







  return (
    <div>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{props.typeModel}</h5>
              <button type="button" className="btn btn-secondary close" data-bs-dismiss="modal" aria-label="Close">
              x
              </button>
            </div>
            <div className="modal-body">
              <div >
                {props.typeModel === 'Create movie' ? RenderFromMovie() : props.typeModel === 'Create member' ? RenderFromMember() : ''}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-warning">{props.rows == '' ? 'Save' : 'Update'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
