import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import BuildIcon from '@material-ui/icons/Build';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarExport, GridToolbarDensitySelector,} from '@mui/x-data-grid';
import { NavLink } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)((theme) => ({
  badge: {
    backgroundColor: '#44b700', color: '#44b700', boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      content: '""', position: 'absolute',top: 0,left: 0,  animation: '$ripple 1.2s infinite ease-in-out',
      width: '100%', height: '100%', borderRadius: '50%', border: '1px solid currentColor',
    },
  },
  '@keyframes ripple': {
    '0%': { transform: 'scale(.8)', opacity: 1 },
    '100%': { transform: 'scale(2.4)', opacity: 0 },
  },
}));



export default function Toolbar(props) {
  const account = useSelector(state => state.UserReducer.account);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openNote, setOpenNote] = useState(false);
  const [openModal, setOpenModal] = useState('');

 
  useEffect(() => props.selectionRow == '' ?  setOpenModal('') : setOpenModal('modal'), [props.selectionRow])

  const handelOpenNote =()=> props.selectionRow == '' ? setOpenNote(true) : setOpenNote(false)



    
  

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const dispatch = useDispatch();
  // React.useEffect(() => { if(account === '') {window.location.reload()}},[account])

  
  
  const RenderAccount = () => {
    return(
      <React.Fragment>
        <StyledBadge className="me-1" overlap="circular" variant="dot" anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
          <Avatar style ={{width:'30px', height:'30px'}} alt="Remy Sharp" src="https://br-art.vn/wp-content/uploads/2018/01/chia-se-preset-va-stock-anh-chan-dung-cua-nag-manh-cuong-3.jpg" />
        </StyledBadge>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>{account?.hoTen}<i class='bx bxs-chevron-down ms-2'></i></Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}  keepMounted >
          <MenuItem onClick={() => setAnchorEl(null)}>
            <NavLink className="text-decoration-none text-dark" to='/'><i className='bx bx-home fs-5 me-2'></i>Home</NavLink>
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}><i class='bx bx-user-pin fs-5 me-2' ></i>My account</MenuItem>
          <MenuItem onClick={()=>{dispatch({type:'LOG_OUT'});setAnchorEl(null)}}>
            <NavLink className="text-decoration-none text-dark" to='/login'><i className='bx bx-log-out fs-5 me-2' ></i>Logout</NavLink>
          </MenuItem>
        </Menu>
      </React.Fragment>
    )
  }


  return (
    <aticle>
      <GridToolbarContainer className="d-flex justify-content-between">
      <section>
          <GridToolbarColumnsButton className ="me-2"/>
          <GridToolbarFilterButton className ="me-2"/>
          <GridToolbarDensitySelector className ="me-2"/>
          <GridToolbarExport className ="me-2"/>
          <ClickAwayListener>
            <Tooltip title="Bạn chưa chọn item"
              open={openNote}
              PopperProps={{ disablePortal: true}}
              disableFocusListener
              disableHoverListener
              disableTouchListener
            >
              <Button onClick={handelOpenNote} onBlur={()=> setOpenNote(false)} className ="me-2" color="primary" data-bs-toggle={openModal} data-bs-target="#exampleModal" ><BuildIcon className="fs-6 me-2"/>Edit</Button>     
            </Tooltip>
          </ClickAwayListener>
         
          <Button className ="me-3" color="primary"><DeleteOutlineIcon className="fs-5 me-2"/>Delete</Button>
          <Button data-bs-toggle="modal" data-bs-target="#exampleModal" size="small" variant="outlined" color="primary">
            <KeyboardArrowRightIcon fontSize="small" />{props.btn}
          </Button>
        </section>
        <section>{account !== '' ? RenderAccount() : null}</section>
      </GridToolbarContainer>
    </aticle>
    
  )
}
