import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router";
import SmallBoxMenu from "./SideBarMenu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { colors } from "@mui/material";

const Header = () => {
  const location = useLocation();

  const getHeading = (path) => {
    switch (path) {
      case "/":
      case "/dashboard":
        return "Dashboard";
      case "/category":
        return "Categories";
      case "/user":
        return "Users";
      case "/booking":
        return "Bookings";
      case "/services":
        return "Services";
      case "/settings":
        return "Settings";
      default:
        return "";
    }
  };

  const heading = getHeading(location.pathname);
  return (
    <>
      <div className="header-container">
        <div className="header-inner-container">
          <div className="icon">
            <SmallBoxMenu />
            <h2>{heading}</h2>
          </div>
          <div className="text">
            <div className="search-wrapper">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />

              <style>
                {`
                  .custom-input::placeholder {
                   color: #8BA3CB;
                   }
                `}
              </style>

              <input
                type="text"
                placeholder="Search for something....."
                className="custom-input"
                style={{
                  backgroundColor: "#f2f2f2",
                  color: "#8BA3CB",
                  // border: "1px solid \",
                  outline: "1px solid  #F5F7FA",
                  borderRadius: "5px",
                }}
              />
            </div>
            <IoIosNotificationsOutline />

            <img className="avator" src="/image/profile.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
