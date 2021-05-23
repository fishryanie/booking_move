
let taiKhoanNguoiDung = '';

if(localStorage.getItem("taiKhoan")) { //Kiểm tra taiKhoan có trong store không => có thì lấy làm giá trị mặc định cho state
    let tkNguoiDungStore = localStorage.getItem("taiKhoan");
    taiKhoanNguoiDung = JSON.parse(tkNguoiDungStore).taiKhoan;
}
let loaiNguoiDungStore = '';
if(localStorage.getItem("loaiNguoiDung")) { //Kiểm tra taiKhoan có trong store không => có thì lấy làm giá trị mặc định cho state
    let loai_nguoi_dung = localStorage.getItem("loaiNguoiDung");
    loaiNguoiDungStore = JSON.parse(loai_nguoi_dung).loaiNguoiDung;
}
const stateDefault = {
    taiKhoan: taiKhoanNguoiDung,
    loaiNguoiDung: loaiNguoiDungStore,
    register:{},
    listUser:[]
}

export const UserReducer = (state=stateDefault, action) => {
    switch(action.type){
        case 'LOGIN' : {
            state.taiKhoan = action.userName;
            state.loaiNguoiDung = action.loaiNguoiDung
            return {...state}
        }
        case 'REGISTER' : {
            state.taiKhoan = action.userName;
            return {...state}
        }
        case 'LOG_OUT':{
            localStorage.removeItem("taiKhoan");
            window.location.reload()
            return {...state}
        }
        case 'Get_List_User' : {
            state.listUser = [...action.listUser];
            return {...state}
        }
        default: {
            return {...state}
        }
    }
}