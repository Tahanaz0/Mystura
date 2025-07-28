import React from 'react';
import './user.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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
  border: 'none',
  outline: 'none',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
};

const UserDelete = ({ onDelete }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    onDelete();      // 👈 yahan delete function call ho raha
    handleClose();   // 👈 modal band bhi ho jaye
  };

  return (
    <>
      <div onClick={handleOpen}>
        <div>Delete</div>
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
              <p>Delete User</p>
              <FontAwesomeIcon icon={faXmark} className='close' onClick={handleClose} />
            </div>

            <div className='delete-container'>
              <div className='inner-delete'>
                <img className='delete-icon' src="/images/delete.svg" alt="" />
                <h2 className='h2-delete'>Delete User</h2>
                <p className='para-delete'>
                  Are you sure you want to delete this <br />
                  user? <br />
                  This action cannot be undone.
                </p>
              </div>

              <div className='delete-btns'>
                <button onClick={handleClose}>Cancel</button>
                <button onClick={handleDelete}>Delete</button> {/* ✅ Actual delete */}
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default UserDelete;
