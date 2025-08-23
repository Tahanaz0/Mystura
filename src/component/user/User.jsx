import React, { useEffect, useRef, useState } from 'react';
import './user.css';
import UserAddForm from './UserAddForm';
import UserDelete from './UserDelete';
import { FiEdit, FiTrash } from 'react-icons/fi';

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

  // ✅ Start Edit
  const handleEditUser = (index) => {
    setEditIndex(index);
    setEditUser(users[index]);
    setOpenDropdown(null);
  };

  // ✅ Handle input change
  const handleChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  // ✅ Save edited user
  const handleSaveEdit = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = editUser;
    setUsers(updatedUsers);
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
                {editIndex === index ? (
                  <>
                    <td>
                      <input
                        name="name"
                        value={editUser.name}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="email"
                        value={editUser.email}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="phone"
                        value={editUser.phone}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="gender"
                        value={editUser.gender}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="userType"
                        value={editUser.userType}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="status"
                        value={editUser.status}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <button onClick={handleSaveEdit}>Save</button>
                      <button onClick={() => setEditIndex(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
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
                              handleDeleteUser(index);   // ✅ remove item
                              setOpenDropdown(null);     // ✅ close menu after delete
                            }}
                          >
                            <FiTrash style={{ color: 'black' }} /> Delete
                          </UserDelete>
                        </div>
                      )}
                    </td>
                  </>
                )}
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
    </>
  );
};

export default User;
