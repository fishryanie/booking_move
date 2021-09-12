import axios from "axios";

export const GetListFilm = () => {
  return async (dispatch) => {
    dispatch({ type: 'openLoading' })
    setTimeout(async ()=>{
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?maNhom=GP01",
        method: "GET",
      });
      dispatch({ type: "GET_LIST_FILM", mangPhim: result.data });
      dispatch({ type:'closeLoading' }) 
    },500)
  };
};


export const CinemaSystem = () => {
  return async (dispatch) => {
    dispatch({type: 'openLoading'})
    setTimeout(async()=>{
      try {
        let result = await axios({
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
          method: "GET",
        });
        dispatch({type: "GET_CinemaSystem", CinemaSystem: result.data});
        dispatch({type:'closeLoading'}) 
      } catch (errors) { console.log("errors:", errors) }
    },500)
  };
};

export const layThongTinChiTietPhimAction = (maPhim) => {
  return async (dispatch) => {
    dispatch({type: 'openLoading'})
    try {
      let result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=0${maPhim}`,
        method: "GET",
      });
      dispatch({type: "LAY_CHI_TIET_PHIM", detail: result.data,});
      dispatch({type:'closeLoading'}) 
    } catch (errors) { console.log("errors", errors) }
  };
};

export const layThongTinPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    
    
      try {
        let result = await axios({
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
          method: "GET",
        });
        dispatch({ type: "LAY_THONG_TIN_PHONG_VE", thongTinPhongVe: result.data });
       
      } catch (errors) { console.log("errors", errors) }
    
  };
};

export const DeleteFilm = (MaPhim) => {
  axios({
    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${MaPhim}`,
    method: "DELETE",
  })
  .then((result) => {
    console.log(result);
    alert("Xóa thành công");
  })
  .catch((errors) => {
    console.log("errors", errors);
  });
};
