import React from 'react';
import { FaTimes } from "react-icons/fa";

const ViewBookingModal = ({ showViewBookingModal, setShowViewBookingModal }) => {
  if (!showViewBookingModal) return null;

  return (
    <div className="modal-overlay" onClick={() => setShowViewBookingModal(false)}>
      <div className="modal-content-view-booking-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="close-btn" onClick={() => setShowViewBookingModal(false)}>
            <FaTimes />
          </button>
        </div>

        <div className="modal-body">
          <div className="booking-success-illustration">
            <div className="illustration-bg">
              <img src="/image/booked.png" alt="" />
            </div>
          </div>

          <div className="booking-success-message">
            <h2>Your Booking Has Been Created</h2>
          </div>
        </div>

        <div className="modal-footer">
          <button className="view-booking-btn">View Booking</button>
        </div>
      </div>
    </div>
  );
};

export default ViewBookingModal;