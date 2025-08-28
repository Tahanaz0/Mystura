import React from 'react';
import { MdCall } from "react-icons/md";
import { FaTimes, FaRegHeart,  FaComments, FaMapMarkerAlt, FaShare, FaStar } from "react-icons/fa";

const ServiceDetailModal = ({ selectedService, showModal, closeModal, openBookingForm }) => {
  if (!showModal || !selectedService) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content-service-full" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Service Full View</h2>
          <button className="close-btn" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>

        <div className="modal-body">
          <div className="service-image-section">
            <div className="service-image-container">
              <img src={selectedService.img} alt={selectedService.name} />
              <div className="discount-badge">10% OFF</div>
              <div className="favorite-btn">
                <FaRegHeart style={{ color: "#FFFFFF" }} />
              </div>
            </div>

            <div className="image-navigation">
              <div className="pagination-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <div className="action-btn">
              <MdCall style={{ color: "#013B9C", width: "30px" }} />
              <span>Call</span>
            </div>
            <div className="action-btn">
              <FaComments style={{ color: "#013B9C", width: "30px" }} />
              <span>Chat</span>
            </div>
            <div className="action-btn">
              <FaMapMarkerAlt style={{ color: "#013B9C", width: "30px" }} />
              <span>Direction</span>
            </div>
            <div className="action-btn">
              <FaShare style={{ color: "#013B9C", width: "30px" }} />
              <span>Share</span>
            </div>
            <div className="action-btn">
              <FaStar style={{ color: "#013B9C", width: "30px" }} />
              <span>Reviews</span>
            </div>
          </div>

          <div className="service-info">
            <div className="service-title">
              <h1>{selectedService.name}</h1>
              {selectedService.subtitle && (
                <h2 className="service-subtitle">{selectedService.subtitle}</h2>
              )}
            </div>

            <div className="service-description">
              <p>{selectedService.description}</p>
            </div>

            <div className="service-price">
              <span className="price">{selectedService.price}</span>
            </div>

            <div className="additional-services">
              <h2>Additional Services</h2>
              <div className="service-options">
                {selectedService.additionalServices.map((service, idx) => (
                  <div key={idx} className="service-option">
                    <input type="checkbox" id={`service-${idx}`} defaultChecked />
                    <label htmlFor={`service-${idx}`} className="service-option-label">
                      <div>{service.name}</div>
                      <div>({service.price})</div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-location">
              <div className="location-info">
                <div>
                  <h3>Address</h3>
                  <p className="address-text">{selectedService.address}</p>
                  <button className="directions-btn">
                    <FaMapMarkerAlt /> Get Directions
                  </button>
                </div>
              </div>
              <div className="map-snippet">
                <div className="map-placeholder">
                  <FaMapMarkerAlt />
                  <span>Map</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="booking-btn" onClick={openBookingForm}>Booking</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;