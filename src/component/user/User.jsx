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
      userType: 'Provider',
      status: 'Decline',
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
      userType: 'Provider',
      status: 'Decline',
    },
    {
      name: 'Daniel',
      email: 'daniel@gmail.com',
      phone: '+92 123456789',
      gender: 'Male',
      userType: 'Provider',
      status: 'Decline',
    },

  ]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

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
  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };
  const handleDeleteUser = (indexToDelete) => {
    const updatedUsers = users.filter((_, index) => index !== indexToDelete);
    setUsers(updatedUsers);
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
                      <button>
                        <FiEdit /> Edit
                      </button>
                      <UserDelete onDelete={() => handleDeleteUser(index)}>
                        <FiTrash style={{
                          color:'black'
                        }}/> Delete
                      </UserDelete>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="footer">
          <p>Showing 1 to {users.length} of 12 entries</p>
          <div className="pagination">
            <button className="prev">◀</button>
            <button className="page active">1</button>
            <button className="page">2</button>
            <button className="page">3</button>
            <button className="next">▶</button>
          </div>
        </div>
      </div>

      {/* Floating Plus Button */}
      {/* <div className="add-card">
        <img className="add-icon" src="/image/add.png" alt="plus" />
      </div> */}
    </>
  );
};

export default User;
