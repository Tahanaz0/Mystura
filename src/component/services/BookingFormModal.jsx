import React from 'react';
import { FaTimes } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";

const BookingFormModal = ({ 
  showBookingFormModal, 
  closeBookingForm, 
  selectedService, 
  bookingDateIndex, 
  setBookingDateIndex, 
  bookingTime, 
  setBookingTime, 
  selectedAddOns, 
  setSelectedAddOns, 
  paymentMethod, 
  setPaymentMethod, 
  computeTotals 
}) => {
  if (!showBookingFormModal || !selectedService) return null;

  const toggleAddOn = (name) => {
    setSelectedAddOns(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]);
  };

  return (
    <div className="modal-overlay" onClick={closeBookingForm}>
      <div className="modal-content-booking-form-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Booking</h2>
          <button className="close-btn" onClick={closeBookingForm}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <div className="booking-form">
            <div className="booking-card">
              <div className="service-summary">
                <img src={selectedService.img} alt="service" />
                <div>
                  <div className="service-subtitle-small">{selectedService.subtitle || selectedService.name}</div>
                  <div className="service-desc-small">{selectedService.description?.slice(0, 120)}...</div>
                </div>
              </div>
              <div className="section">
                <div className="section-title">Select Date</div>
                <div className="date-pills">
                  {[0, 1, 2, 3].map((i) => (
                    <button key={i} className={`pill ${bookingDateIndex === i ? 'active' : ''}`} onClick={() => setBookingDateIndex(i)}>
                      <div className="pill-top">{['Today', 'Tomorrow', 'Wed', 'Thu'][i]}</div>
                      <div className="pill-bottom">{15 + i} Sep</div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="section">
                <div className="section-title">Select Time</div>
                <div className="time-grid">
                  {['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'].map(t => (
                    <button key={t} className={`time-btn ${bookingTime === t ? 'active' : ''}`} onClick={() => setBookingTime(t)}>{t}</button>
                  ))}
                </div>
              </div>
              <div className="section">
                <div className="section-title">Additional Services</div>
                <div className="addons-list">
                  {(selectedService.additionalServices || []).map((s, idx) => (
                    <label key={idx} className="addon-item">
                      <div className="addon-item-content">
                        <div className="addon-name">
                          <CiGrid41 style={{ color: "#DDDDDDC", width: "20px" }} />  {s.name}</div>
                        <div className="price-tag">{s.price}</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedAddOns.includes(s.name)}
                        onChange={() => toggleAddOn(s.name)}
                      />
                    </label>
                  ))}
                </div>
              </div>
              <div className="section totals">
                {(() => {
                  const { base, addOnsTotal, total } = computeTotals(); 
                  return (
                    <>
                      <div className="row"><span>Base price</span><span>${base}</span></div>
                      <div className="row"><span>Add-ons</span><span>${addOnsTotal}</span></div>
                      <div className="row total"><span>Total Price</span><span>${total}</span></div>
                    </>
                  )
                })()}
              </div>
              <div className="section">
                <div className="section-title">Payment Method</div>
                <div className="payment-list">
                  <label className="payment-item">
                    <div className="payment-item-content">
                      <img src="/image/doller.png" alt="cash" width={60} height={70} />
                      <span>Cash</span>
                    </div>
                    <input type="checkbox" name="pm" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} />
                  </label>
                  <label className="payment-item">
                    <div className="payment-item-content-wallet">
                      <img src="/image/wallet.png" alt="cash" width={50} height={50} />
                      <span>Wallet</span>
                    </div>
                    <input type="checkbox" name="pm" checked={paymentMethod === 'wallet'} onChange={() => setPaymentMethod('wallet')} />
                  </label>
                  <label className="payment-item">
                  <div className="payment-item-content-visa">
                      <img src="/image/visa.png" alt="cash" width={50} height={40} />
                      <span>Visa - 0987</span>
                    </div>
                   
                    <input type="checkbox" name="pm" checked={paymentMethod === 'visa'} onChange={() => setPaymentMethod('visa')} />
                  </label>
                </div>
              </div>
            </div>
            <button className="create-booking-btn">Create Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingFormModal;