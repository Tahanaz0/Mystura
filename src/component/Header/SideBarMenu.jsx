// SmallBoxMenu.jsx
import React, { useEffect, useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { GoListUnordered } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { LuReceiptText } from "react-icons/lu";
import { MdOutlineSettings, MdOutlineLogout } from "react-icons/md";

const SmallBoxMenu = () => {
  const [showBox, setShowBox] = useState(false);
  const location = useLocation();

  const toggleBox = () => {
    setShowBox(!showBox);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowBox(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close the sidebar automatically on route change
  useEffect(() => {
    if (showBox) {
      setShowBox(false);
    }
  }, [location.pathname]);

  return (
    <>
      <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleBox} />
      {showBox && (
        <div className="menu-box-overlay" onClick={toggleBox}>
          <div className="menu-box" onClick={(e) => e.stopPropagation()}>
            <div className="box-header">
              <h3 className='Menu'>
                {/* <img src="/images/logo.svg" alt="" /> */}
              </h3>

            </div>
            <ul className="side-bar-list">
              <li>
                <NavLink to="/dashboard" onClick={() => setShowBox(false)} className={({ isActive }) => isActive ? "side-bar-list-item active" : "side-bar-list-item"}>
                  <span className="side-bar-icon-col"><IoMdHome className="side-bar-list-icon" /></span>
                  <span className="side-bar-text-col">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/categories" onClick={() => setShowBox(false)} className={({ isActive }) => isActive ? "side-bar-list-item active" : "side-bar-list-item"}>
                  <span className="side-bar-icon-col"><GoListUnordered className="side-bar-list-icon" /></span>
                  <span className="side-bar-text-col">Categories</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/user" onClick={() => setShowBox(false)} className={({ isActive }) => isActive ? "side-bar-list-item active" : "side-bar-list-item"}>
                  <span className="side-bar-icon-col"><FaRegUser className="side-bar-list-icon" /></span>
                  <span className="side-bar-text-col2">Users</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/booking" onClick={() => setShowBox(false)} className={({ isActive }) => isActive ? "side-bar-list-item active" : "side-bar-list-item"}>
                  <span className="side-bar-icon-col"><TbBrandBooking className="side-bar-list-icon" /></span>
                  <span className="side-bar-text-col">Bookings</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={() => setShowBox(false)} className={({ isActive }) => isActive ? "side-bar-list-item active" : "side-bar-list-item"}>
                  <span className="side-bar-icon-col"><LuReceiptText className="side-bar-list-icon" /></span>
                  <span className="side-bar-text-col">Services</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/setting" onClick={() => setShowBox(false)} className={({ isActive }) => isActive ? "side-bar-list-item active" : "side-bar-list-item"}>
                  <span className="side-bar-icon-col"><MdOutlineSettings className="side-bar-list-icon" /></span>
                  <span className="side-bar-text-col">Settings</span>
                </NavLink>
              </li>
              {/* <li>
          <NavLink to="/logout" className={({ isActive }) => isActive ? "side-bar-logout-item active" : "side-bar-logout-item"}>
            <span className="side-bar-icon-col"><MdOutlineLogout className="side-bar-list-icon" /></span>
            <span className="side-bar-text-col">Logout</span>
          </NavLink>
        </li> */}
            </ul>
            <div className="side-bar-logout2">
              <NavLink to="/logout" onClick={() => setShowBox(false)} className={({ isActive }) => isActive ? "side-bar-logout-item2 active" : "side-bar-logout-item2"}>
                <span className="side-bar-icon-col1"><MdOutlineLogout className="side-bar-list-icon1" /></span>
                <span className="side-bar-text-col1">Logout</span>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SmallBoxMenu;
