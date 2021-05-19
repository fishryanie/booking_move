import axios from 'axios';
export const LoginAction = (user) => {//nguoiDung = {taiKhoan:'',matKhau:''}
    return async (dispatch) => {
        try {
            const result = await axios({
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
                method:'POST',
                data: user
            });
            dispatch({
                type:'LOGIN',
                userName: result.data
            })
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
