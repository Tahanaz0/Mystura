import React from 'react'
import './User.css'

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
    // boxShadow: 'none',
    border: 'none',
    outline: 'none',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
        display: 'none'
    }
};

const UserDelete = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>

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
                                <p className='para-delete'>Are you sure you want to delete this <br />User?
                                    <br />
                                    This action cannot be undone.</p>
                            </div>

                            <div className='delete-btns'>
                                <button>Cancel</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    </Typography>

                </Box>
            </Modal>
        </div>
    );
}

export default UserDelete
