import React, { useRef, useState } from 'react';
import { FaTimes, FaPlus, FaCamera, FaMapMarkerAlt } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '250px'
};

const center = {
  lat: 24.8607, // Karachi latitude
  lng: 67.0011  // Karachi longitude
};

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
  const [photos, setPhotos] = useState([]);
  const fileInputRef = useRef(null);

  if (!showCreateServiceModal) return null;

  // 📌 File select or drop handle
  const handleFiles = (files) => {
    const newPhotos = Array.from(files).map(file => URL.createObjectURL(file));
    setPhotos(prev => [...prev, ...newPhotos]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

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

            {/* 🔹 Select Provider */}
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

            {/* 🔹 Photos with Drag & Drop */}
            <div className="form-group">
              <label>Photos</label>
              <div
                className="photo-upload-section"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              >
                {/* Hidden input */}
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={(e) => handleFiles(e.target.files)}
                />

                {/* Button for file picker */}
                <button
                  type="button"
                  className="photo-upload-btn"
                  onClick={() => fileInputRef.current.click()}
                >
                  <FaCamera /> Upload Photos
                </button>

                {/* Show selected thumbnails */}
                <div className="photo-thumbnails">
                  {photos.map((src, idx) => (
                    <div key={idx} className="photo-thumbnail">
                      <img src={src} alt="Service" />
                    </div>
                  ))}
                </div>

                <p className="drag-text">Drag & Drop photos here</p>
              </div>
            </div>

            {/* 🔹 Category */}
            <div className="form-group">
              <label>Category</label>
              <select
                className="form-select"
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
              >
                <option value="" disabled hidden>
                  Select Service category
                </option>
                <option value="Cleaning">Cleaning</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Landscaping">Landscaping</option>
                <option value="Pet Care">Pet Care</option>
              </select>
            </div>


            {/* 🔹 Title */}
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

            {/* 🔹 Description */}
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

            {/* 🔹 Price */}
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

            {/* 🔹 Additional Services */}
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

            {/* 🔹 Discount */}
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

            {/* 🔹 Location */}
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

            {/* 🔹 Map Placeholder */}
            <div className="form-group">
              <label>Map</label>
              <div className="map-container">
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_API_KEY">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                  >
                    <Marker position={center} />
                  </GoogleMap>
                </LoadScript>
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
