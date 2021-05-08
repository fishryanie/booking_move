const stateDefault = {
    ArrayFilm :[],
    DetailFilm:{tenPhim:'default',heThongRapChieu:[]}
}
export const FilmReducers = (state = stateDefault,  action) => {
    switch (action.type) {
        case "GET_LIST_FILM":{
            state.ArrayFilm = [...action.mangPhim]
            return {...state}
        }

        case "LAY_CHI_TIET_PHIM":{
            state.DetailFilm = action.chiTietPhim
            console.log(state.DetailFilm)
            return {...state}
        }

        default: return {...state}
    }
}