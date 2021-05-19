let taiKhoanNguoiDung = '';
const stateDefault = {
    taiKhoan: taiKhoanNguoiDung,
    listUser:[]
}

export const UserReducer = (state=stateDefault, action) => {
    switch(action.type){
        case 'LOGIN' : {
            state.taiKhoan = action.userName;
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