import axios from "axios"

export const GetListFilm = () => {
    return async(dispatch)=>{
        const result = await axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?maNhom=GP01',
            method:"GET"
        })
        dispatch({
            type:"GET_LIST_FILM",
            mangPhim: result.data
        })
    }
}
export const CinemaSystem = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
                method: 'GET'
            });
            dispatch({
                type:'GET_CinemaSystem',
                CinemaSystem: result.data
            })
        } catch (errors) {
            console.log('errors',errors)
        }
    }
}
export const layThongTinChiTietPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=0${maPhim}`,
                method: 'GET'
            });
            dispatch({
                type:'LAY_CHI_TIET_PHIM',
                detail: result.data
            })
        } catch (errors) {
            console.log('errors',errors)
        }
    }
}
export const layThongTinPhongVeAction = (maLichChieu) => {

    return async (dispatch) =>{
        try{
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method:'GET'
            });

            dispatch({
                type:'LAY_THONG_TIN_PHONG_VE',
                thongTinPhongVe:result.data
            })
        }catch (errors) {
            console.log('errors',errors);
        }
    }
}
export const DeleteFilm = (MaPhim) => {
    axios({
        url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${MaPhim}`,
        method:'DELETE'
    }).then((result) => {
        console.log(result);
        alert('Xóa thành công')
    }).catch((errors) => {
        console.log('errors',errors);
    })
}
