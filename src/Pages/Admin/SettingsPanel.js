import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {GetListUser} from '../../Redux/Actions/UserAction'
import { DataGrid } from '@mui/x-data-grid';
// import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';

import PropTypes from 'prop-types';
// import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
// import { useDemoData } from '@mui/x-data-grid-generator';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import Setting from './Setting'
export default function SettingsPanel() {
  const listUser = useSelector(state => state.UserReducer.listUser)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetListUser())
    }, [])
    listUser.forEach((item, i) => item.id = i + 1);
    
    console.log(listUser)
    const columns = [
      // { field: 'id', headerName: 'ID', width: 90 },
      {
        field: 'hoTen',
        headerName: 'họ tên',
        width: 170,
        editable: true,
      },
      {
        field: 'taiKhoan',
        headerName: 'tài khoản',
        width: 150,
        editable: true,
      },
      {
        field: 'matKhau',
        headerName: 'mật khẩu',
        width: 150,
        editable: true,
      },
      {
        field: 'email',
        headerName: 'email',
        width: 200,
        editable: true,
      },
      {
        field: 'soDt',
        headerName: 'số điện thoại',
        width: 170,
        editable: true,
      },
      {
        field: 'maLoaiNguoiDung',
        headerName: 'loại người dùng',
        width: 180,
        editable: true,
      },
      
    ];
  
 
  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <Setting></Setting>
      <DataGrid
        rows={listUser}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        // disableSelectionOnClick
      />
   
    </div>
  );
}
