import React, { useState } from "react";
import { BsBriefcase, BsCheckCircleFill } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import './dashboard.css';
import Barchart from '../barChart/barchart'
// import { BarChart } from "recharts";
const Dashboard = () => {
    const [isNotifOpen, setIsNotifOpen] = useState(false);
    const notifications = [
        { id: 1, title: 'Notification received', time: 'Today | 09:24 AM', body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' },
        { id: 2, title: 'Notification received', time: 'Today | 09:24 AM', body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' },
        { id: 3, title: 'Notification received', time: 'Today | 09:24 AM', body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' },
        { id: 4, title: 'Notification received', time: 'Today | 09:24 AM', body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' },
        { id: 5, title: 'Notification received', time: 'Today | 09:24 AM', body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' },
    ];
    return (
        <>
            <div className="dash-container">
                <div className="dash-actions">
                    <button className="notif-btn" onClick={() => setIsNotifOpen(true)}>
                        Notifications
                    </button>
                </div>
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
            {/* old button removed; using top-right button */}

            {isNotifOpen && (
                <div className="modal-overlay" onClick={() => setIsNotifOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Notifications</h3>
                            <button className="modal-close" onClick={() => setIsNotifOpen(false)}>×</button>
                        </div>
                        <div className="notif-list">
                            {notifications.map(n => (
                                <div key={n.id} className="notif-item">
                                    <div className="notif-icon"><BsCheckCircleFill 
                                    style={{color: '#013B9C'}}
                                    /></div>
                                    <div className="notif-body">
                                        <div className="notif-title-row">
                                            <span className="notif-title">{n.title}</span>
                                            <span className="notif-time">{n.time}</span>
                                        </div>
                                        <div className="notif-text">{n.body}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="modal-footer">
                            <button className="btn-show-all1">Show all</button>
                        </div>
                    </div>
                </div>
            )}
           
        </>
    );
};

export default Dashboard;