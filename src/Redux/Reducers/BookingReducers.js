let gheDaDat = []

    if (localStorage.getItem("danhSachGheDangDat")) {
        gheDaDat = JSON.parse(localStorage.getItem("danhSachGheDangDat"))
    }



const stateDatVe = {
  danhSachGheDangDat:[],
  // count: ''
}



export const QuanLyDatVeReducer = (state = stateDatVe, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            //Kiểm tra ghế có trong mảng danhSachGheDangDat => Có xoá, không thì thêm vào
            let index = state.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.maGhe === action.chair.maGhe);
            index !== -1 ? state.danhSachGheDangDat.splice(index,1) : state.danhSachGheDangDat.push(action.chair);
          
            //Cập nhật lại state
            state.danhSachGheDangDat = [...state.danhSachGheDangDat]
            return {...state};
        }

        case 'HUY_DAT_VE':{
          let index = state.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.maGhe === action.gheDangDat.maGhe);
          console.log(action.gheDangDat)
          if(index !== -1) {
              state.danhSachGheDangDat.splice(index,1);
          }
          return {...state}
        }
        default: return { ...state };
    }
}