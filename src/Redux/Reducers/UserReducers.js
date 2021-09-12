
let account = localStorage.getItem("taiKhoan") ? JSON.parse(localStorage.getItem("taiKhoan")) : '';






const stateDefault = {
  account : account,
  register:{},
  listUser:[],
  comment: [
    { tenNguoiDung: account.taiKhoan,
      rating:4.5,
      avata:'https://vnn-imgs-a1.vgcloud.vn/cdn.eva.vn/upload/3-2019/images/2019-08-05/showbiz-han-tay-chay-album-ra-mat-cua-thien-than-jav-yua-mikami-dung-lam-ro-ray-k-pop-07-1565002047-166-width640height480.jpg',
      noiDung:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit distinctio voluptatibus, ipsam vitae quidem nesciunt laboriosam soluta beatae voluptatem culpa neque dolorem, provident eligendi ad assumenda impedit recusandae laudantium expedita.'
    },
    { tenNguoiDung: account.taiKhoan,
      rating:3.5,
      avata:'https://br-art.vn/wp-content/uploads/2018/01/chia-se-preset-va-stock-anh-chan-dung-cua-nag-manh-cuong-3.jpg',
      noiDung:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit distinctio voluptatibus, ipsam vitae quidem nesciunt laboriosam soluta beatae voluptatem culpa neque dolorem'
    }
  ]
}

console.log(stateDefault.account)


export const UserReducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'LOGIN' : {
            // state.taiKhoan = action.userName;
            // state.loaiNguoiDung = action.loaiNguoiDung
            console.log(action.userName)
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
        case 'COMMENT':{          
          state.comment = [...state.comment, action.objComment]
          return {...state}
        }
        default: {
          return {...state}
        }
    }
}