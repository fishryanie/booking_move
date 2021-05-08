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
export const LayThongTinPhimAction = (maPhim) => {
    return async (dispatch) => {
       try{
        let result = await axios({
            url:  `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method:'GET'
        });
        // sau khi lát dl từ api về ta đưa dl lên reducer = dispatch
        dispatch({
            type: 'LAY_CHI_TIET_PHIM',
            chiTietPhim: result.data
        })
       }catch(errors){
            console.log(errors.data)
       }
    }
}