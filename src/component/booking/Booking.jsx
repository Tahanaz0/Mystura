import React, { useState } from 'react';
import './booking.css';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
// import { PiGreaterThanThin } from 'react-icons/pi';

const Booking = () => {
    const [selectedDate, setSelectedDate] = useState('2024-09-18');
    const [currentPage, setCurrentPage] = useState(1);

    const timeSlots = [
        {
            time: '08:00 am to 10:00 am',
            bookings: [
                { name: 'Helina', color: '#4CAF50', profile: '👩' },
                { name: 'Ava', color: '#81C784', profile: '👩' },
                { name: 'Chloe', color: '#2196F3', profile: '👩' }
            ]
        },
        {
            time: '10:00 am to 12:00 pm',
            bookings: []
        },
        {
            time: '12:00 pm to 02:00 pm',
            bookings: [
                { name: 'Isla', color: '#9C27B0', profile: '👩' }
            ]
        },
        {
            time: '02:00 pm to 04:00 pm',
            bookings: []
        },
        {
            time: '04:00 pm to 06:00 pm',
            bookings: [
                { name: 'Zoe', color: '#FF9800', profile: '👩' },
                { name: 'Maya', color: '#E91E63', profile: '👩' }
            ]
        },
        {
            time: '06:00 pm to 08:00 pm',
            bookings: []
        },
        {
            time: '08:00 pm to 10:00 pm',
            bookings: [
                { name: 'Luna', color: '#795548', profile: '👩' }
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
                    <span className="calendar-icon">📅</span>
                </div>
                <div className="navigation-links">
                    <button onClick={getPreviousDay} className="nav-btn"><FaLessThan /> Previous Day</button>
                    <button onClick={getNextDay} className="nav-btn">Next Day <FaGreaterThan /></button>
                </div>
            </div>

            <div className="calendar-content">
                <h2>{formatDate(selectedDate)}</h2>
                <h3>Bookings</h3>
                
                <div className="time-slots">
                    {timeSlots.map((slot, index) => (
                        <div key={index} className="time-slot">
                            <div className="time-header">
                                <span className="clock-icon">🕐</span>
                                <span className="time-range">{slot.time}</span>
                            </div>
                            <div className="bookings-container">
                                {slot.bookings.length > 0 ? (
                                    slot.bookings.map((booking, bookingIndex) => (
                                        <div 
                                            key={bookingIndex} 
                                            className="booking-button"
                                            style={{ backgroundColor: booking.color }}
                                        >
                                            <span className="profile-pic">{booking.profile}</span>
                                            <span className="booking-name">{booking.name}</span>
                                        </div>
                                    ))
                                ) : (
                                    <span className="no-bookings">Available</span>
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
                <div className="pagination">
                    <button className="page-btn"></button>
                    <button className="page-btn active">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">3</button>
                    <button className="page-btn"><FaGreaterThan /></button>
                </div>
            </div>
        </div>
    );
};

export default Booking;