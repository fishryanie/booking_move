const stateDefault = {
    ArrayFilm :[],
    DetailFilm:{tenPhim:'default',heThongRapChieu:[]},
    CinemaSystem:[],
    thongTinPhongVe:{}
}
export const FilmReducers = (state = stateDefault,  action) => {
    switch (action.type) {
        case "GET_LIST_FILM":{  state.ArrayFilm = [...action.mangPhim]; return {...state}}
        case 'GET_CinemaSystem': { state.CinemaSystem = [...action.CinemaSystem]; return {...state};}
        case 'LAY_CHI_TIET_PHIM': { state.DetailFilm = action.detail; return {...state};}
        case 'LAY_THONG_TIN_PHONG_VE': { state.thongTinPhongVe = action.thongTinPhongVe; return{...state}}
        default: return {...state}
    }
}