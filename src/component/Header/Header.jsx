import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router";
import SideBarMenu from "./SideBarMenu";
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
            <SideBarMenu />
            <h2>{heading}</h2>
          </div>
          <div className="text">
            <div className="search-wrapper">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />

              <style>
                {`
                  .custom-input::placeholder {
                   color: #008080;
                   }
                `}
              </style>

              <input
                type="text"
                placeholder="Search for something....."
                className="custom-input"
                style={{
                  backgroundColor: "#f2f2f2",
                  color: "black",
                  // border: "1px solid \",
                  outline: "none",
                  borderRadius: "5px",
                }}
              />
            </div>

            <img className="avator" src="/images/avator.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
