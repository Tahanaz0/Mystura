import React from "react";
import { NavLink } from "react-router-dom";
import './sideBar.css';
import { IoMdHome } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { GoListUnordered } from "react-icons/go";
import { LuReceiptText } from "react-icons/lu";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineSettings, MdOutlineLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="side-bar-main-container">
      <div className="side-bar-container">
        <img src="/image/icon1.png" alt="Logo" className="side-bar-logo" />
        <h1 className="side-bar-heading">MYSTURA</h1>
        <p className="side-bar-pera">FOR THE PEOPLE BY THE PEOPLE</p>
      </div>
      <ul className="side-bar-list">
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "side-bar-list-item active" : "side-bar-list-item"}>
            <span className="side-bar-icon-col"><IoMdHome className="side-bar-list-icon" /></span>
            <span className="side-bar-text-col">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" className={({ isActive }) => isActive ? "side-bar-list-item active" : "side-bar-list-item"}>
            <span className="side-bar-icon-col"><GoListUnordered className="side-bar-list-icon" /></span>
            <span className="side-bar-text-col">Categories</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/user" className={({ isActive }) => isActive ? "side-bar-list-item active" : "side-bar-list-item"}>
            <span className="side-bar-icon-col"><FaRegUser className="side-bar-list-icon" /></span>
            <span className="side-bar-text-col2">Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/booking" className={({ isActive }) => isActive ? "side-bar-list-item active" : "side-bar-list-item"}>
            <span className="side-bar-icon-col"><TbBrandBooking className="side-bar-list-icon" /></span>
            <span className="side-bar-text-col">Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => isActive ? "side-bar-list-item active" : "side-bar-list-item"}>
            <span className="side-bar-icon-col"><LuReceiptText className="side-bar-list-icon" /></span>
            <span className="side-bar-text-col">Services</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => isActive ? "side-bar-list-item active" : "side-bar-list-item"}>
            <span className="side-bar-icon-col"><MdOutlineSettings className="side-bar-list-icon" /></span>
            <span className="side-bar-text-col">Settings</span>
          </NavLink>
        </li>
      </ul>
      <div className="side-bar-logout">
        <NavLink to="/logout" className={({ isActive }) => isActive ? "side-bar-logout-item active" : "side-bar-logout-item"}>
          <span className="side-bar-icon-col"><MdOutlineLogout className="side-bar-list-icon" /></span>
          <span className="side-bar-text-col">Logout</span>
        </NavLink>
      </div>
      
    </div>
  );
};

export default Sidebar;
