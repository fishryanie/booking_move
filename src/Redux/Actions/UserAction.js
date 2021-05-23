import axios from 'axios';
import {history} from '../../App'
export const LoginAction = (user) => {//user = {taiKhoan:'', matKhau:''}
    return async (dispatch) => {
        try {
            const result = await axios({
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
                method:'POST',
                data: user
            });
            localStorage.setItem('accessToken', result.data.accessToken);
            localStorage.setItem("taiKhoan", JSON.stringify(result.data));
            localStorage.setItem("loaiNguoiDung", JSON.stringify(result.data));
            dispatch({
                type:'LOGIN',
                userName: result.data.taiKhoan,
                loaiNguoiDung: result.data.maLoaiNguoiDung
            })
            let chuyenTrang = result.data.maLoaiNguoiDung === "QuanTri" ? 'admin' : '' ; history.push(`/${chuyenTrang}`)
        }catch(errors) {
            console.log('errors',errors)
        }
    }
}

export const RegisterAction = (user) => {
    return async () => {
        try {
            const result = await axios({
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
                method:'POST',
                data: user
            });
            alert('Đăng kí thành công')
            console.log(result);
        }catch(errors) {
            console.log('errors',errors)
        }
    }
}

export const GetListUser = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
                method: 'GET'
            });
            dispatch({
                type:'Get_List_User',
                listUser: result.data
            })
        } catch (errors) {
            console.log('errors',errors)
        }
    }
}
