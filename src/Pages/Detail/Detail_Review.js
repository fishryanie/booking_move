import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useForm } from "react-hook-form";
import IconButton from '@material-ui/core/IconButton';
import { Alert, AlertTitle } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import avata_user from '../../Assets/Images/ImgUser/avata-user.png'
import Card_Review from './Card_Review'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



export default function Detail_Review() {
  const account = useSelector(state => state.UserReducer.account);
  const binhLuan = useSelector(state => state.UserReducer.comment);
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset} = useForm();
  if(open === true) setTimeout(()=>{ setOpen(false) }, 5000);
  

  const onSubmit = (comment,e) => { 
    e.target.reset();
    let objComment = {
      tenNguoiDung: account?.taiKhoan,
      rating: value,
      noiDung: comment.noiDung,
      avata: avata_user
    }
    console.log(objComment);
    dispatch({ 
      type:'COMMENT', 
      objComment 
    },setValue(0))
    
  }

  return (
    <section className="detail_review">
      {/* ALERT ERR */}
      <Collapse className="mt-2" in={open}>
        <Alert severity="error" action = { 
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => {setOpen(false)}}>
            <CloseIcon fontSize="inherit" />  
          </IconButton>
        }> Bạn chưa <b>đắng nhập</b> ! Hãy <b>đăng nhập</b> để sử dụng chức năng này
        </Alert>
      </Collapse>         
      <form className="d-flex p-2 justify-content-between mt-5 rounded" style={{border: '2px solid rgba(255,255,255,0.1)'}} onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div className="rounded-circle avata p-1">
            <img className="rounded-circle w-100 h-100 p-1" src={avata_user} alt={avata_user} />
          </div>
        </div>
        <div className="col-sm-5 col-md-6">
          <input className="h-100 w-100 px-3 bg-transparent text-white " disabled={open} 
            onClick={() => { setOpen(account === '' ? true : false) }} 
            placeholder="Bạn nghĩ gì về phim này" 
            {...register('noiDung', { required: true })} />
        </div>
        <div className="d-flex align-items-center justify-content-center text-center">
          <div>
            <h6>Đánh giá</h6>
            <Rating precision={0.5} value={value} onChange={(event, newValue) => { setValue(newValue)}}  />
          </div>
        </div>
        {/* SUBMIT COMMENT */}
        <div className="col-sm-1 d-flex justify-content-center align-items-center">
          <button className="px-2 btn_send" type='submit'><i class='bx bx-send'></i></button>
        </div>  
      </form>
      {/* RENDER COMMENT ITEM */}
      {binhLuan.map(item => <Card_Review item={item} /> )}
    </section>
  )
}
