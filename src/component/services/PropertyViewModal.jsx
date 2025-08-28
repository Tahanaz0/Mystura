import React from 'react';
import { FaTimes, FaStar, FaFire } from "react-icons/fa";

const PropertyViewModal = ({ showPropertyModal, setShowPropertyModal }) => {
  if (!showPropertyModal) return null;

  return (
    <div className="modal-overlay" onClick={() => setShowPropertyModal(false)}>
      <div className="modal-content-property-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Property View</h2>
          <button className="close-btn" onClick={() => setShowPropertyModal(false)}>
            <FaTimes />
          </button>
        </div>

        <div className="modal-body">
          <div className="rating-section">
            <div className="overall-rating">
              <div className="rating-number">5</div>
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="star-icon filled" />
                ))}
              </div>
              <div className="review-count">(1 review)</div>
            </div>

            <div className="rating-breakdown">
              <div className="rating-bar">
                <span className="star-label">5</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '100%' }}></div>
                </div>
                <span className="rating-count">1</span>
              </div>
              <div className="rating-bar">
                <span className="star-label">4</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '0%' }}></div>
                </div>
                <span className="rating-count">0</span>
              </div>
              <div className="rating-bar">
                <span className="star-label">3</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '0%' }}></div>
                </div>
                <span className="rating-count">0</span>
              </div>
              <div className="rating-bar">
                <span className="star-label">2</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '0%' }}></div>
                </div>
                <span className="rating-count">0</span>
              </div>
              <div className="rating-bar">
                <span className="star-label">1</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '0%' }}></div>
                </div>
                <span className="rating-count">0</span>
              </div>
            </div>
          </div>

          <div className="filter-section">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">
              <div><FaStar style={{ color: "#013B9C" }} /></div>
              <div>5</div>
            </button>
            <button className="filter-btn">
              <div><FaStar style={{ color: "#013B9C" }} /></div>
              <div>4</div>
            </button>
            <button className="filter-btn">
              <div><FaStar style={{ color: "#013B9C" }} /></div>
              <div>3</div>
            </button>
            <button className="filter-btn">
              <div><FaStar style={{ color: "#013B9C" }} /></div>
              <div>2</div>
            </button>
          </div>

          <div className="reviews-section">
            <div className="review-card">
              <div className="review-header">
                <img src="/image/profile.png" alt="Profile" className="profile-pic" />
                <div className="review-info">
                  <div className="reviewer-name">Charollette Hanlin</div>
                  <div className="review-rating">
                    <span className="rating-number">5</span>
                    <FaStar className="star-icon filled" />
                  </div>
                </div>
              </div>
              <div className="review-text">
                As a person who has a hard time picking up a book to read. I very much enjoy this book and definitely wouldn't mind reading it again
              </div>
              <div className="review-footer">
                <span className="review-time">6 month ago</span>
                <div className="review-actions">
                  <FaFire className="fire-icon" />
                  <FaFire className="fire-icon" />
                  <FaFire className="fire-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyViewModal;