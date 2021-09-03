
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
//  var comment = [{noiDung: 'tèo em'},{noiDung: 'tèo anh'}]
  // console.log(comment)
const stateDefault = {
  taiKhoan: taiKhoanNguoiDung,
  loaiNguoiDung: loaiNguoiDungStore,
  register:{},
  listUser:[],
  comment: [
    { tenNguoiDung: taiKhoanNguoiDung,
      rating:4.5,
      avata:'https://vnn-imgs-a1.vgcloud.vn/cdn.eva.vn/upload/3-2019/images/2019-08-05/showbiz-han-tay-chay-album-ra-mat-cua-thien-than-jav-yua-mikami-dung-lam-ro-ray-k-pop-07-1565002047-166-width640height480.jpg',
      noiDung:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit distinctio voluptatibus, ipsam vitae quidem nesciunt laboriosam soluta beatae voluptatem culpa neque dolorem, provident eligendi ad assumenda impedit recusandae laudantium expedita.'
    },
    { tenNguoiDung: taiKhoanNguoiDung,
      rating:3.5,
      avata:'https://br-art.vn/wp-content/uploads/2018/01/chia-se-preset-va-stock-anh-chan-dung-cua-nag-manh-cuong-3.jpg',
      noiDung:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit distinctio voluptatibus, ipsam vitae quidem nesciunt laboriosam soluta beatae voluptatem culpa neque dolorem'
    }
  ]
}



export const UserReducer = (state = stateDefault, action) => {
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
        case 'COMMENT':{          
          state.comment = [...state.comment, action.objComment]
          return {...state}
        }
        default: {
          return {...state}
        }
    }
}