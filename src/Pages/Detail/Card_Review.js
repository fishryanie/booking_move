import React from 'react'
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';
export default function Card_Review(props) {
  const { item } = props
  const StyledRating = withStyles({
    iconFilled: {
      color: '#ff3d47',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);

  return (
    <section className="card_review px-3">
      <div className="row p-2 mt-5 pb-4 justify-content-between" style={{borderBottom: '1px dashed #102651'}}>
        {/* INFO */}
        <div className="col-sm-5 row">
          <div className="col-md-3">
            <div className="rounded-circle avata p-1">
              <img className="rounded-circle w-100 h-100" src={item.avata} alt={item.avata} />
            </div>
          </div>
          <div className="col-md-9">
            <span className="d-block p-1 date">13 Days Ago</span>
            <h6 className="text-uppercase p-1" >{item.tenNguoiDung}</h6>
            <p><i class='bx bx-check pr-1'></i><span className="date">Verified Review</span></p>
          </div>
        </div>
        {/* COMMENT */}
        <div className="col-sm-7">
          <StyledRating name="read-only" precision={0.5} value={item.rating}  icon={<FavoriteIcon  fontSize="inherit"/>} readOnly  />
          <h6>Awesome Movie</h6>
          <p style={{color:'#bdcaf3'}}>{item.noiDung}</p>
          {/* LIKE */}
          <div className="d-flex mt-4">
            <div className="px-3">
              <i className='bx bx-like pr-1' style={{fontSize:'25px',color:'#31d7a9',cursor:'pointer'}}></i>
              <span className="date">(8)</span>
            </div>
            <div className="px-3">
              <i className='bx bx-dislike text-danger pr-1' style={{fontSize:'25px',cursor:'pointer'}}></i>
              <span className="date">(8)</span>
            </div>
            <div className="px-3"><span style={{cursor:'pointer'}}>Report Abuse</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
