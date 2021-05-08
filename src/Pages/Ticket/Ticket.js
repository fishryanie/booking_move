import React from 'react'
import iconticket from "../../Assets/img/icon-ticket.png"
import "./Ticket.css"
export default function Ticket() {
    return (
        <section className="ticketComponent">
            <div className="container">
                <div className="row">
                    <div className="col-5 d-flex">
                        <img src={iconticket} alt=""/>
                        <h1>Mua vé <br/> online</h1>
                    </div>
                    <div className="col-7">
                        <div className ="row p-3">
                            <div className="col-6">
                                <select className="d-block w-100 option" name="" id="" >
                                    <option className="px-5" value="">Chọn phim</option>
                                </select>
                                <select className="d-block w-100 option2" name="" id="">
                                    <option value="">Chọn ngày</option>
                                </select>
                            </div>
                            <div className="col-6">
                            <select className="d-block w-100 option3" name="" id="">
                                    <option value="">Chọn rap</option>
                                </select>
                                <select className="d-block w-100 option4" name="" id="">
                                    <option value="">Chọn xuất chiếu</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
