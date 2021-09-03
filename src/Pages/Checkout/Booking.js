import React, {useEffect} from 'react'
import styled from "styled-components"
import Checkout from './Checkout'
import ChairList from'./ChairList'
import { useSelector, useDispatch } from "react-redux"
import {layThongTinPhongVeAction} from '../../Redux/Actions/FilmAction'

export default function Booking(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        let { id } = props.match.params
        dispatch(layThongTinPhongVeAction(id))
    }, [])
    
    const Background = styled.section`
        background: rgba(0, 0, 0, 0.8);
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 150px;
        padding-bottom: 50px;
    `
    const Screen = styled.div`
        border-bottom: 30px solid rgb(255, 159, 95);
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        height: 20px;
        width: 80%;
        margin: 0px auto;
        filter: drop-shadow(4px 30px 20px rgba(255,255,255,0.5));
        font-size: 25px;
        color: #fff;
    `

    return (
        <Background>
            <section className="container-fluid">
                <section className="row">
                    <section className="col-md-8 text-white">
                        <h4 className="text-center text-white">Màn hình</h4>
                        <Screen/>
                        <ChairList/>
                    </section>
                    <section className="col-md-4 text-light"><Checkout></Checkout></section>
                </section>
            </section>
        </Background>
    )
}
