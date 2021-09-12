import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { GetListUser } from '../../Redux/Actions/UserAction'
import { GetListFilm } from "../../Redux/Actions/FilmAction"
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import moment from "moment"
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components'
import bg_admin from '../../Assets/Images/bg-admin.jpeg'
import '../../Scss/Admin.scss'
import ModelForm from './ModelForm';
const Background = styled.section`
  height: 100vh;
  width: 100wh;
  background-image: url(${bg_admin});;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`
const AdminContent = styled.div `
  max-height: 90%
`
const Form = styled.section`
  height:75vh;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgb(255 255 255 / 20%);
`
const arrayValue = ['Member management', 'Movie management','Movie schedule management']
const columnsUsers = [
  { field: 'hoTen', headerName: 'họ tên', width: 170, editable: true, checkboxSelection:true },
  { field: 'taiKhoan', headerName: 'tài khoản', width: 150, editable: true },
  { field: 'matKhau', headerName: 'mật khẩu', width: 150, editable: true },
  { field: 'email', headerName: 'email', width: 200, editable: true },
  { field: 'soDt', headerName: 'số điện thoại', width: 170, editable: true },
  { field: 'maLoaiNguoiDung', headerName: 'loại người dùng', width: 180, editable: true, renderCell:(params) => ( <span>{params.value}</span> )},
];

const columnsFilms = [
  { field: 'id', headerName: 'Stt', width: 100, editable: true },
  { field: 'hinhAnh', headerName: 'Hình ảnh', width: 150, editable: true, renderCell:(params) => (  <Avatar alt="Remy Sharp" src={params.value} /> )},
  { field: 'maPhim', headerName: 'Mã phim', width: 150, editable: true },
  { field: 'tenPhim', headerName: 'Tên phim', width: 250, editable: true },
  { field: 'ngayKhoiChieu', headerName: 'Ngày khởi chiếu', width: 250, editable: true,  renderCell:(params => <span>{moment(params.value).format('llll')}</span>)},
  { field: 'trailer', headerName: 'trailer', width: 350, editable: true, renderCell:(params => <a href={params.value}>{params.value}</a> )},
  { field: 'moTa', headerName: 'Mô tả', width: 500, editable: true },
];




export default function Main() {
  const ArrayUsers = useSelector(state => state.UserReducer.listUser)
  const ArrayFilms = useSelector(state => state.FilmReducers.ArrayFilm);
  const [showOption, setShowOption] = useState('')
  const [option, setOption] = useState('Chọn loại bảng')
  const [table, setTable] = useState({rows: [], columns:[], btnCreate:'Button'})


  console.log(ArrayFilms)
  ArrayUsers.forEach((item, i) => item.id = i + 1);
  ArrayFilms.forEach((item, i) => item.id = i + 1);

  const handle = (item) => {
    setOption(item)
    if(item === 'Member management'){
      setTable((table) => ({...table, rows: ArrayUsers, columns:columnsUsers, btnCreate: 'Create member'}))
    }else if(item === 'Movie management'){
      setTable((table) => ({...table, rows: ArrayFilms, columns:columnsFilms, btnCreate: 'Create movie'}))
    }

  }
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(GetListUser());
      dispatch(GetListFilm())
  }, [])

   
 
   
  const Select = () => {
    return (
      <div className="w-100 dropholder d-flex">
        <div class="dropdown " onClick={()=>{setShowOption('showMenu')}}>
          <p>{option}</p>
        </div>
        <ul className={`col-3 menu p-0 ${showOption}`}>
          {arrayValue.map(item => <li onClick={()=>{handle(item);setShowOption('')}}>{item}</li>)}
        </ul>
      </div>
    )
  }

  return (
    <Background className ="admin d-flex align-items-center">
      <AdminContent className="container w-100">
        <section className="d-flex mb-3">
          <div className="col-3">
            {Select()}
          </div>

          <button type="button" className="btn btn-outline-warning text-white ms-3 px-4 position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className='bx bx-chevron-right position-absolute me-2 fs-3 start-0'></i>
            {table.btnCreate}
          </button>
        </section>
        <Form className="bg-white px-0 ">
          <DataGrid  className="rounded-3 text-center" rows={table.rows} columns={table.columns} components={{Toolbar: GridToolbar,}}  checkboxSelection disableSelectionOnClick />
        </Form>
      </AdminContent>
      <ModelForm typeModel={table.btnCreate}></ModelForm>
    </Background>
  )
}
