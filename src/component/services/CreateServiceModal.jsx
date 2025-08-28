import React from 'react';
import { FaTimes, FaPlus, FaCamera, FaMapMarkerAlt } from "react-icons/fa";

const CreateServiceModal = ({ 
  showCreateServiceModal, 
  closeCreateServiceModal, 
  formData, 
  handleInputChange, 
  additionalServices, 
  newService, 
  setNewService, 
  handleAddService, 
  handleRemoveService, 
  handleSubmit 
}) => {
  if (!showCreateServiceModal) return null;

  return (
    <div className="modal-overlay" onClick={closeCreateServiceModal}>
      <div className="modal-content-create-service-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Create Service</h2>
          <button className="close-btn" onClick={closeCreateServiceModal}>
            <FaTimes />
          </button>
        </div>

        <div className="modal-body">
          <form className="create-service-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Select Provider</label>
              <select
                className="form-select"
                value={formData.provider}
                onChange={(e) => handleInputChange('provider', e.target.value)}
              >
                <option value="">Choose Provider</option>
                <option value="Provider 1">Provider 1</option>
                <option value="Provider 2">Provider 2</option>
              </select>
            </div>

            <div className="form-group">
              <label>Photos</label>
              <div className="photo-upload-section">
                <button type="button" className="photo-upload-btn">
                  <FaCamera />
                  Photo
                </button>
                <div className="photo-thumbnails">
                  <div className="photo-thumbnail">
                    <img src="/image/servic.png" alt="Service" />
                  </div>
                  <div className="photo-thumbnail">
                    <img src="/image/pett.png" alt="Service" />
                  </div>
                  <div className="photo-thumbnail">
                    <img src="/image/paint.png" alt="Service" />
                  </div>
                  <div className="photo-thumbnail">
                    <img src="/image/landScap.png" alt="Service" />
                  </div>
                  <div className="photo-thumbnail add-more">
                    <span>+5</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Category</label>
              <select
                className="form-select"
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
              >
                <option value="">Select Service category</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Landscaping">Landscaping</option>
                <option value="Pet Care">Pet Care</option>
              </select>
            </div>

            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-input"
                placeholder="Title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-textarea"
                placeholder="Enter property description"
                rows="4"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
              ></textarea>
            </div>

            <div className="form-group">
              <label>Price</label>
              <div className="price-input">
                <span className="currency-symbol">$</span>
                <input
                  type="number"
                  className="form-input price-field"
                  placeholder="0.00"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Additional Services (Optional)</label>
              <div className="additional-services-input">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Service name"
                  value={newService.name}
                  onChange={(e) => setNewService(prev => ({ ...prev, name: e.target.value }))}
                />
                <div className="price-input">
                  <span className="currency-symbol">$</span>
                  <input
                    type="number"
                    className="form-input price-field"
                    placeholder="0..."
                    step="0.01"
                    value={newService.price}
                    onChange={(e) => setNewService(prev => ({ ...prev, price: e.target.value }))}
                  />
                </div>
              </div>
              <button type="button" className="add-service-btn" onClick={handleAddService}>
                <FaPlus />
                Add Service
              </button>

              {additionalServices.length > 0 && (
                <div className="added-services">
                  {additionalServices.map((service, index) => (
                    <div key={index} className="added-service-item">
                      <span>{service.name} - ${service.price}</span>
                      <button
                        type="button"
                        className="remove-service-btn"
                        onClick={() => handleRemoveService(index)}
                      >
                        <FaTimes />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Discount (Optional)</label>
              <input
                type="number"
                className="form-input"
                placeholder="0%"
                min="0"
                max="100"
                value={formData.discount}
                onChange={(e) => handleInputChange('discount', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                className="form-input"
                placeholder="Location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Map</label>
              <div className="map-container">
                <div className="map-placeholder">
                  <FaMapMarkerAlt />
                  <span>Map showing location</span>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="modal-footer">
          <button type="button" className="create-service-btn">Create Service</button>
        </div>
      </div>
    </div>
  );
};

export default CreateServiceModal;