import {combineReducers, createStore, applyMiddleware} from "redux"
import { FilmReducers } from "./Reducers/FilmReducers"
import reduxThunk from 'redux-thunk'
const RootReducers = combineReducers({
    FilmReducers
})
export const store = createStore(RootReducers, applyMiddleware(reduxThunk));