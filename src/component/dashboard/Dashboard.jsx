import React from "react";
import { BsBriefcase } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import './dashboard.css';
import Barchart from '../barChart/barchart'
// import { BarChart } from "recharts";
const Dashboard = () => {
    return (
        <>
            <div className="dash-container">
                <div className="boxes">
                    <div className="dash-item">
                        <div className="child-item">
                            <p>Total Booking</p>
                            <BsBriefcase  className="box-icon"/>
                        </div>
                        <h2>10</h2>
                    </div>
                    <div className="dash-item">
                        <div className="child-item">
                            <p>Total Incom</p>
                            <CiMoneyBill className="box-icon" />
                        </div>
                        <h2>18</h2>
                    </div>
                    <div className="dash-item">
                        <div className="child-item">
                            <p>Total User</p>
                            <FaRegUser className="box-icon" />
                        </div>
                        <h2>18</h2>
                    </div>
                    <div className="dash-item">
                        <div className="child-item">
                            <p>Total Provider</p>
                            <FaRegUser className="box-icon" />
                        </div>
                        <h2>18</h2>
                    </div>
                </div>
                <div>
                  <Barchart/>  
                </div>
                
            </div>
        </>
    );
};

export default Dashboard;