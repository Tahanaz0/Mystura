import React, { useEffect, useRef, useState } from 'react';
import './user.css';
import UserAddForm from './UserAddForm';
import UserDelete from './UserDelete';
import { FiEdit, FiTrash, FiX } from 'react-icons/fi';

const User = () => {
  const [users, setUsers] = useState([
    {
      name: 'Daniel',
      email: 'daniel@gmail.com',
      phone: '+92 123456789',
      gender: 'Male',
      userType: 'Admin',
      status: 'Active',
    },
    {
      name: 'Jessica',
      email: 'jessica@gmail.com',
      phone: '+92 123456789',
      gender: 'Female',
      userType: 'User',
      status: 'Moderate',
    },
    {
      name: 'Daniel',
      email: 'daniel@gmail.com',
      phone: '+92 123456789',
      gender: 'Male',
      userType: 'Provider',
      status: 'Decline',
    },
    {
      name: 'Jessica',
      email: 'jessica@gmail.com',
      phone: '+92 123456789',
      gender: 'Female',
      userType: 'User',
      status: 'Moderate',
    },
    {
      name: 'Daniel',
      email: 'daniel@gmail.com',
      phone: '+92 123456789',
      gender: 'Male',
      userType: 'Provider',
      status: 'Decline',
    },
    {
      name: 'Daniel',
      email: 'daniel@gmail.com',
      phone: '+92 123456789',
      gender: 'Male',
      userType: 'Admin',
      status: 'Active',
    },
    {
      name: 'Daniel',
      email: 'daniel@gmail.com',
      phone: '+92 123456789',
      gender: 'Male',
      userType: 'Provider',
      status: 'Decline',
    },
    {
      name: 'Daniel',
      email: 'daniel@gmail.com',
      phone: '+92 123456789',
      gender: 'Male',
      userType: 'Admin',
      status: 'Active',
    },

  ]);

  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // 🔹 Edit states
  const [editIndex, setEditIndex] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleToggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ✅ Add new user
  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  // ✅ Delete user
  const handleDeleteUser = (indexToDelete) => {
    const updatedUsers = users.filter((_, index) => index !== indexToDelete);
    setUsers(updatedUsers);
  };

  // ✅ Start Edit - Open Modal
  const handleEditUser = (index) => {
    setEditIndex(index);
    setEditUser({...users[index]}); // Create a copy of the user object
    setShowEditModal(true);
    setOpenDropdown(null);
  };

  // ✅ Handle input change in modal
  const handleChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  // ✅ Save edited user
  const handleSaveEdit = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = editUser;
    setUsers(updatedUsers);
    setShowEditModal(false);
    setEditIndex(null);
    setEditUser(null);
  };

  // ✅ Close modal without saving
  const handleCloseModal = () => {
    setShowEditModal(false);
    setEditIndex(null);
    setEditUser(null);
  };

  return (
    <>
      <UserAddForm onAddUser={handleAddUser} />

      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr className="th">
              <th>Name</th>
              <th>Email Address</th>
              <th>Phone No</th>
              <th>Gender</th>
              <th>User Type</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.gender}</td>
                <td>{user.userType}</td>
                <td>
                  <span className={`status ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td className="actions-cell">
                  <span
                    className="dots"
                    onClick={() => handleToggleDropdown(index)}
                  >
                    ⋮
                  </span>
                  {openDropdown === index && (
                    <div className="dropdown" ref={dropdownRef}>
                      <button onClick={() => handleEditUser(index)}>
                        <FiEdit /> Edit
                      </button>
                      <UserDelete
                        onDelete={() => {
                          handleDeleteUser(index);
                          setOpenDropdown(null);
                        }}
                      >
                        <FiTrash style={{ color: 'black' }} /> Delete
                      </UserDelete>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="footer">
          <p>Showing 1 to {users.length} of {users.length} entries</p>
          <div className="pagination">
            <button className="prev">◀</button>
            <button className="page active">1</button>
            <button className="page">2</button>
            <button className="page">3</button>
            <button className="next">▶</button>
          </div>
        </div>
      </div>

      {/* Edit User Modal */}
      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Edit User</h2>
              <button className="close-btn" onClick={handleCloseModal}>
                <FiX />
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Name</label>
                <input
                  name="name"
                  value={editUser.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  name="email"
                  value={editUser.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Phone No</label>
                <input
                  name="phone"
                  value={editUser.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select
                  name="gender"
                  value={editUser.gender}
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>User Type</label>
                <select
                  name="userType"
                  value={editUser.userType}
                  onChange={handleChange}
                >
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                  <option value="Provider">Provider</option>
                </select>
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  name="status"
                  value={editUser.status}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Decline">Decline</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={handleCloseModal}>
                Cancel
              </button>
              <button className="btn-save" onClick={handleSaveEdit}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default User;