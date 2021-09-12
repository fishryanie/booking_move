import React,{useState,useEffect,Fragment} from 'react'
import { useSelector, useDispatch } from "react-redux"
import InputMask from "react-input-mask";
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import barcode from '../../Assets/Images/barcode_PNG.png'
import CreditCard from './CreditCard';
import UIchekout from './Uicheckout';
import LogoCreditCard from './LogoCreditCard'

import CircularProgress from '@material-ui/core/CircularProgress';
import '../../Scss/Checkout.scss'


export default function Checkout() {
  const {danhSachGheDangDat} = useSelector(state => state.QuanLyDatVeReducer);
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expires, setExpires] = useState('');
  const [cvv, setCvv] = useState('');
  const [rotate, setRotate] = useState('')
  const [onMouse, setOnMouse] = useState({glasses:'', eye: '', wink:'', mouth: '', hand:''})
  const [randomCard, setRanDomCard] = useState(0)
  const [styleCreditCard, setStyleCreditCard] = useState({color: 'lime', logo:LogoCreditCard.visa_single, logoInput:LogoCreditCard.visa})
  const [notification, setNotification] = useState({open: false, severity:'' , message: '', opacity:'1', visibility:'visible'});

  const handleNumberCard = ({ target: { value } }) => setCardNumber(value);
  const handleCardHolder = ({ target: { value } }) => setCardHolder(value);
  const handleExpires = ({ target: { value } }) => setExpires(value);
  const handleCvv = ({ target: { value } }) => setCvv(value);
  const handleMouseEvent= (glasses, eye, wink, mouth, hand) => setOnMouse((onMouse) => ({...onMouse, glasses:glasses, eye:eye, wink:wink, mouth:mouth, hand:hand}));
  const handleRanDomCard = (color, logo, logoInput) => setStyleCreditCard((styleCreditCard) => ({...styleCreditCard, color:color,logo:logo, logoInput:logoInput}))
  
  const tongTien =()=> danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => tongTien += gheDangDat.giaVe, 0);

  const showCard = (randomCard) => {
    switch (randomCard) {
      case 0:handleRanDomCard('red', LogoCreditCard.jcb_single, LogoCreditCard.jcb); break;
      case 1:handleRanDomCard('green', LogoCreditCard.amex_single, LogoCreditCard.amex); break;
      case 2:handleRanDomCard('orange', LogoCreditCard.diners_single, LogoCreditCard.diners); break;
      case 3:handleRanDomCard('yellow', LogoCreditCard.maestro_single, LogoCreditCard.maestro); break;
      case 4:handleRanDomCard('purple', LogoCreditCard.discover_single, LogoCreditCard.discover); break;
      case 5:handleRanDomCard('cyan', LogoCreditCard.unionpay_single, LogoCreditCard.unionpay); break;
      case 6:handleRanDomCard('lightblue', LogoCreditCard.mastercard_single, LogoCreditCard.mastercard); break;
      case 7:handleRanDomCard('lime', LogoCreditCard.visa_single, LogoCreditCard.visa); break;
      default:break;
    }
  }
   
   

    const onSubmit = () => {
      setSuccess(false);
      if(cardNumber === '' || cardHolder === '' || expires === '' || cvv === '') {
        setNotification((notification)=> ({
          ...notification, open:true, severity: 'error',
          message: 'Bạn chưa điền thông tin thẻ thanh toán',opacity:'0', visibility:'hidden', 
        }))
      }else {
        setNotification((notification)=> ({
          ...notification, open:true, opacity:'1', visibility:'visible', severity:'warning',
          message: `Bạn chắc chẵn muốn thanh toán <b>${(tongTien()*10/100 + tongTien()).toLocaleString() +" đ"}</b> từ Thẻ: <b>${cardNumber}</b> ?`
        }))
      }
    }

 

  const infoCards = { 
    color:styleCreditCard.color,
    logo:styleCreditCard.logo,
    cardHolder:cardHolder, 
    cardNumber:cardNumber, 
    expires:expires, 
    rotate:rotate, 
    cvv:cvv
    
  }
 
  // const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = React.useRef();

 

  React.useEffect(() => clearTimeout(timer.current),[])

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        setNotification((notification)=> ({
          ...notification, open:true, opacity:'0', visibility:'hidden', severity:'success',
          message: `Đặt ghế thành công`
        }))
      }, 2500);
    }
  };

  
 


  
 
  

  const Payment = () => {
    return (
      <section className='payment'>
        <div className="row rounded">
          <div className="col-7 payment_holder p-0">
            <div className="payment_title px-5">
              <h6 className="m-0">CHECKOUT - YOUR CREDIT CARD</h6>
            </div>
            <form className="d-flex justify-content-between payment_from bg-white p-3" >
              <div className="col-8">
                <div className="mb-3">
                  <label htmlFor="">Card holder</label>
                  <input className="w-100"placeholder="Enter your card holdel" maxLength="20" type="text" 
                   
                    onFocus={()=>{setRotate('')}} onChange={handleCardHolder}/>
                    
                  </div>
                <div className="mb-2 ipNumberCard position-relative">
                  <label>Card number</label>
                  <InputMask 
                    // {...register('cardNumber')}
                    className="w-100"
                    maskChar={null}
                    value={cardNumber} 
                    mask='9999 9999 9999 9999' 
                    placeholder = '0000 0000 0000 0000'
                    onChange={handleNumberCard} 
                    onFocus={()=>{setRotate('')}}/>
                  <svg id="ccicon" className="ccicon" width={750} height={471} viewBox="0 0 750 471" version="1.1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    dangerouslySetInnerHTML={{__html: styleCreditCard.logoInput}}/>
                  
                </div>
              </div>
              <div className="col-3">
                <div className="mb-3">
                  <label htmlFor="">Expires</label>
                  <InputMask 
                    // {...register('expires')}
                    className="w-100" 
                    mask='99/9999'
                    value={expires} 
                    maskChar={null} 
                    placeholder="mm/yyyy"  
                    onChange={handleExpires} 
                    onFocus={()=>{setRotate('')}}/>
                    {/* {errors.expires && <span className="text-danger ">{errors.expires.message}<i class='bx bx-message-error mx-2'></i></span>} */}
                </div>
                <div className="mb-2 ipCvv">
                  <label>CVV</label>
                  <InputMask 
                    // {...register('cvv')}
                    className="w-100" 
                    mask='999' 
                    value={cvv}
                    maskChar={null} 
                    placeholder="***"  
                    onChange={handleCvv} 
                    onFocus={()=>{setRotate('flipped')}}/>
                    {/* {errors.cvv && <span className="text-danger ">{errors.cvv.message}<i class='bx bx-message-error mx-2'></i></span>} */}
                </div>
              </div>
            </form>
            <button className="payment_holder_footer position-relative w-100" 
              onClick={()=>{setRanDomCard(randomCard >= 7 ? 0 : randomCard + 1); 
              showCard(randomCard)
              }}><i className ="far fa-hand-point-right bx-fade-right fs-4 position-absolute start-0"></i> 
              With the card type
            </button>
          </div>
          <div className="col-5 payment_total p-0">
            <div className="payment_title text-light px-5">
              <h6 className="m-0">YOUR BALANCE</h6>
            </div>
            <div className="d-flex bg-white payment_total_body">
            <div className="col-9 p-0 ps-4">
              <div className="d-flex justify-content-between pt-3">
                <div className="col-5">
                  <label htmlFor="">Subtota</label>
                </div>
                <div className="col-7">
                  <h5>{tongTien().toLocaleString() +" đ"}</h5></div>
              </div>
              <div className="d-flex justify-content-between pt-2 pb-2 vat">
                <div className="col-5">
                  <label htmlFor="">VAT</label>
                </div>
                <div className="col-7">
                  <h5>10%</h5>
                </div>
              </div>
              <div className="d-flex justify-content-between pt-2 sumTotal">
                <div className="col-5">
                  <label htmlFor="">Total</label>
                </div>
                <div className="col-7">
                  <h4>{(tongTien()*10/100 + tongTien()).toLocaleString() +" đ"}</h4>
                </div>
              </div>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center p-0">
              <img className="barcode" width="60%" src={barcode} alt="" />
            </div>
          </div>
            <button className="col-12 btnPayment bg" 
              onClick={()=>{onSubmit()}}
              onMouseMove={()=>{handleMouseEvent('translateY(-40px)','','','translateY(-10px)','')}}
              onMouseLeave={()=>{handleMouseEvent('','','','')}} 
              onMouseDown={()=>{handleMouseEvent('translateY(-40px)','none','block','translateY(-10px)','translateX(10px)')}}
              onMouseUp={()=>{handleMouseEvent('translateY(-40px)','block','none','translateY(-10px)','')}}>
              Purchase now
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="checkout">
      <div className="modal fade " id="checkout" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-transparent">
            <div className="modal-header w-100 col-12">

              <Collapse className="col-12 position-relative" in={notification.open}>
                <Alert severity={notification.severity} action={
                  <IconButton aria-label="close" color="inherit" size="small">
                    <CloseIcon fontSize="inherit" onClick={()=> setNotification((notification)=> ({...notification, open:false}))}/>
                  </IconButton>   
                }>
                  <span dangerouslySetInnerHTML={{__html: notification.message}}></span>
               
     


                { 
                  success ? <Button className ="btnAlert" color="inherit" variant="outlined" size="small" 
                    data-bs-dismiss="modal"
                    onClick={()=> setNotification((notification)=> ({...notification, open:false}))}>
                    Trở lại</Button> : 
                  <Button className = "btnAlert" disabled={loading} style={notification}
                    color="inherit" variant="outlined" size="small"
                    onClick={handleButtonClick}> Xác nhận
                  </Button> 
                }
                {loading && <CircularProgress size={24} className="position-absolute" style={{right:'200px',top:'25%'}} />}
                </Alert>
              </Collapse>
            </div>



            <div className="modal-body positison-relative rounded">
              <div className="d-flex">               
                <CreditCard infoCard={infoCards} />
                <UIchekout onMouse={onMouse}/>
              </div>
              {Payment()}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
