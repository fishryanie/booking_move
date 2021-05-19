import {combineReducers, createStore, applyMiddleware} from "redux"
import { FilmReducers } from "./Reducers/FilmReducers"
import { UserReducer } from './Reducers/UserReducers'
import { QuanLyDatVeReducer } from './Reducers/BookingReducers'
import reduxThunk from 'redux-thunk'
const RootReducers = combineReducers({
    FilmReducers,
    UserReducer,
    QuanLyDatVeReducer
})
export const store = createStore(RootReducers, applyMiddleware(reduxThunk));