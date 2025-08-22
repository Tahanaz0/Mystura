import React, { useState } from 'react';
import './booking.css';
import {  FaRegClock } from 'react-icons/fa';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
// import { PiGreaterThanThin } from 'react-icons/pi';

const Booking = () => {
    const [selectedDate, setSelectedDate] = useState('2024-09-18');
    const [currentPage, setCurrentPage] = useState(1);

    const timeSlots = [
        {
            time: '08:00 am to 10:00 am',
            bookings: [
                { name: 'Helina', color: '#619C01', profile: '/image/bookingp.png' },
                { name: 'Ava', color: '#33D3D4', profile: '/image/bookingp.png' },
                { name: 'Chloe', color: '#5E9AFF', profile: '/image/bookingp.png' }
            ]
        },
        {
            time2: '10:00 am to 12:00 pm',
            bookings: [
            ]
        },
        {
            time: '12:00 pm to 02:00 pm',
            bookings: [
                { name: 'Isla', color: '#AC39D4', profile: '/image/bookingp.png' }
            ]
        },
        {
            time2: '02:00 pm to 04:00 pm',
            bookings: []
        },
        {
            time: '04:00 pm to 06:00 pm',
            bookings: [
                { name: 'Zoe', color: '#FF9A6C', profile: '/image/bookingp.png' },
                { name: 'Maya', color: '#E13A95', profile: '/image/bookingp.png' }
            ]
        },
        {
            time2: '06:00 pm to 08:00 pm',
            bookings: []
        },
        {
            time: '08:00 pm to 10:00 pm',
            bookings: [
                { name: 'Luna', color: '#AE7461', profile: '/image/bookingp.png' }
            ]
        }
    ];

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const getPreviousDay = () => {
        const date = new Date(selectedDate);
        date.setDate(date.getDate() - 1);
        setSelectedDate(date.toISOString().split('T')[0]);
    };

    const getNextDay = () => {
        const date = new Date(selectedDate);
        date.setDate(date.getDate() + 1);
        setSelectedDate(date.toISOString().split('T')[0]);
    };

    return (
        <div className='booking-main-container'>
            <div className="booking-header">
                <h1>Booking Calendar</h1>
                <div className="date-selector">
                    <input 
                        type="date" 
                        value={selectedDate} 
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="date-input"
                    />
                    {/* <span className="calendar-icon">📅</span> */}
                </div>
                <div className="navigation-links">
                    <button onClick={getPreviousDay} className="nav-btn"><FaAngleLeft
                    style={{
                        color:'#013B9C'
                    }}/> Previous Day</button>
                    <button onClick={getNextDay} className="nav-btn">Next Day <FaAngleRight 
                    style={{
                        color:'#013B9C'
                    }}/></button>
                </div>
            </div>

            <div className="calendar-content">
                <h2>{formatDate(selectedDate)}</h2>
                <h3>Bookings</h3>
                
                <div className="time-slots">
                    {timeSlots.map((slot, index) => (
                        <div key={index} className={`time-slot ${slot.time2 ? 'alt' : ''}`}>
                            <div className="time-header">
                                <span className="clock-icon"><FaRegClock /></span>
                                {slot.time && <span className="time-range">{slot.time}</span>}
                                {slot.time2 && <span className="time-range1">{slot.time2}</span>}
                            </div>
                            
                            <div className="bookings-container">
                                {slot.bookings.length > 0 ? (
                                    slot.bookings.map((booking, bookingIndex) => (
                                        <div 
                                            key={bookingIndex} 
                                            className="booking-button"
                                            style={{ backgroundColor: booking.color }}
                                        >
                                            
                                            <span className="booking-name">{booking.name}</span>
                                            <span className="profile-pic"><img src={booking.profile} alt={booking.name} />
                                            </span>
                                        </div>
                                    ))
                                ) : (
                                    <span className="no-booking"></span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pagination-section">
                <div className="entries-info">
                    Showing 1 to 3 of 12 entries
                </div>
                <div className="pagination-booking">
                    <button className="page-btn2"><FaAngleLeft 
                    style={{
                        marginTop:'3px'
                    }} /></button>
                    <button className="page-btn active">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">3</button>
                    <button className="page-btn2"><FaAngleRight 
                    style={{
                        marginTop:'3px'
                    }}/></button>
                </div>
            </div>
        </div>
    );
};

export default Booking;