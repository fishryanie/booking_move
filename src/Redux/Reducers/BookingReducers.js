let gheDaDat = []

    if (localStorage.getItem("danhSachGheDangDat")) {
        gheDaDat = JSON.parse(localStorage.getItem("danhSachGheDangDat"))
    }



const stateDatVe = {
    danhSachGheDangDat:[]
}



export const QuanLyDatVeReducer = (state = stateDatVe, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            //Kiểm tra ghế có trong mảng danhSachGheDangDat => Có xoá, không thì thêm vào
            let index = state.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.maGhe === action.chair.maGhe);
            if(index !== -1) {
                state.danhSachGheDangDat.splice(index,1);
            } else {
                state.danhSachGheDangDat.push(action.chair);
            };
            //Cập nhật lại state
            state.danhSachGheDangDat = [...state.danhSachGheDangDat];
            return {...state};
        }
        case 'HUY_DAT_VE':{
            let index = state.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.maGhe === action.gheDangDat.maGhe);
            if(index !== -1) {
                state.danhSachGheDangDat.splice(index,1);
            }
        }
        default: return { ...state };
    }


}