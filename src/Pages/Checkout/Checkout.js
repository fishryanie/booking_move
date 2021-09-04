import React from 'react'
import '../../Scss/Checkout.scss'
import barcode from '../../Assets/Images/barcode_PNG.png'
export default function Checkout() {
  






  const payment = () => {
    return (
      <section className='payment'>
        <div className="row rounded">
          <div className="col-7 payment_holder p-0">
            <div className="payment_title px-5">
              <h6 className="m-0">CHECKOUT - YOUR CREDIT CARD</h6>
            </div>
            <form className="d-flex justify-content-between payment_from bg-white p-3">
              <div className="col-8 p-0">
                <div className="mb-3">
                  <label htmlFor="">Card holder</label>
                  <input className="w-100" type="text" /></div>
                <div className="mb-2">
                  <label htmlFor="">Card number</label>
                  <input className="w-100" type="text" />
                </div>
              </div>
              <div className="col-4 mb-3">
                <div className="mb-3">
                  <label htmlFor="">Expires</label>
                  <input className="w-100" type="text" /></div>
                <div className="mb-2">
                  <label htmlFor="">CVV</label>
                  <input className="w-100" type="text" />
                </div>
              </div>
            </form>
            <div className="payment_holder_footer"></div>

          </div>
          <div className="col-5 payment_total p-0">
            <div className="payment_title text-light px-5">
              <h6 className="m-0">YOUR BALANCE</h6>
            </div>
            <div className="d-flex bg-white" style={{paddingBottom:'27px', borderLeft:'1px  dashed rgba(0, 0, 0, 0.1)'}}>
            <div className="col-9 p-0 pl-4">
              <div className="d-flex justify-content-between pt-3">
                <div className="col-5">
                  <label htmlFor="">Subtota</label>
                </div>
                <div className="col-7">
                  <h4>699,00$</h4>
                </div>
              </div>
              <div className="d-flex justify-content-between pt-3 ">
                <div className="col-5">
                  <label htmlFor="">VAT</label>
                </div>
                <div className="col-7">
                  <h4>10%</h4>
                </div>
              </div>
              <div className="d-flex justify-content-between pt-3" style={{borderTop:'1px solid rgba(0, 0, 0, 0.2)'}}>
                <div className="col-5">
                  <label htmlFor="">Total</label>
                </div>
                <div className="col-7">
                  <h4>718,00$</h4>
                </div>
              </div>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center p-0">
              <img className="barcode" width="60%" src={barcode} alt="" />
            </div>
          </div>
            
            <button className="col-12 btnPayment bg">Purchase now</button>
          </div>
        </div>
      </section>

    )
  }








  return (
    <section className="checkout">
      <div className="modal fade" id="checkout" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-transparent">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body rounded p-0">
              {payment()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
