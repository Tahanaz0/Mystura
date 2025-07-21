import React, { useState } from 'react'
import "./User.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  overflowY: 'auto',
  // boxShadow: 'none',
  border: 'none',
  outline: 'none',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
};
const UserAddForm = () => {
  const [phone, setPhone] = useState('');

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className='add-card'>
        <img className='add-icon' onClick={handleOpen} src="/images/plus.svg" alt="" />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">

            <div className='user-header'>
              <p> Add Users</p>
              <FontAwesomeIcon icon={faXmark} className='close' onClick={handleClose} />
            </div>
          </Typography>

          <div className='main-modal'>
            <div className='modal-input'>
              <p>Full Name</p>
              <input type="text" placeholder='Full Name' />
            </div>

            <div className='modal-input'>
              <p>Email Address</p>
              <input type="password" placeholder='Email Addres' />
            </div>

            <div className='modal-input'>
              <p>Password</p>
              <input type="password" placeholder='Password' />
            </div>

            <div className='modal-input'>
              <p>Confirm password</p>
              <input type="text" placeholder='Confirm password' />
            </div>

            <div className='modal-input'>
              <p>Phone no :</p>
              <PhoneInput
              className='phone-input'
                country={'pk'}
                enableSearch={true}
                inputStyle={{ width: '100%', border: " 2px solid var(--blue)", outline: "none" }}
              />
            </div>
            <div>
              <button onClick={handleClose} className='modal-btn'>Add User</button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default UserAddForm
