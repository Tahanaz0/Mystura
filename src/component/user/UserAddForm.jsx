import React, { useState } from 'react'
import "./user.css"
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
const UserAddForm = (props) => {
  // const [phone, setPhone] = useState('');

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [phone, setPhone] = useState('');
  const handleAddUser = () => {
    console.log('form submit')
    if (!email || !password || !confirmPassword || !fullName || !gender || !role || !phone) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newUser = {
      name: fullName,
      email,
      phone,
      gender,
      userType: role,
      status: 'Active',
    };

    props.onAddUser(newUser); // 👈 Parent ko new user bhej raha hai
    alert("User added successfully!");

    // Clear form
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFullName('');
    setGender('');
    setRole('');
    setPhone('');

    handleClose(); // 👈 Form band karein
  };
  


  return (
    <>
      <div className='add-card'>
        <img className='add-icon' onClick={handleOpen} src="/image/add.png" alt="" />
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

          <div className="modal-form-container">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            </div>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="number" placeholder="Phone Name" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Gender</label>

              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="form-group">
              <label>Role</label>

              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Service category</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Provider">Provider</option>
              </select>
            </div>

            <button className="submit-btn" onClick={handleAddUser}>Add User</button>
          </div>

        </Box>
      </Modal>
    </>
  )
}

export default UserAddForm
