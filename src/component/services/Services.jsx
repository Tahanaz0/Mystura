import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './service.css'
import { FaRegStar, FaTimes, FaPhone, FaComments, FaMapMarkerAlt, FaShare, FaStar, FaChevronLeft, FaChevronRight, FaPlus, FaFire, FaCamera } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdCall } from "react-icons/md";
const Services = () => {
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showPropertyModal, setShowPropertyModal] = useState(false);
    const [showCreateServiceModal, setShowCreateServiceModal] = useState(false);
    const [showViewBookingModal, setShowViewBookingModal] = useState(false);
    const [showBookingFormModal, setShowBookingFormModal] = useState(false);

    // Booking form state
    const [bookingDateIndex, setBookingDateIndex] = useState(0);
    const [bookingTime, setBookingTime] = useState('10:00 AM');
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState('cash');

    // Form state for Create Service
    const [formData, setFormData] = useState({
        provider: '',
        category: '',
        title: '',
        description: '',
        price: '',
        discount: '',
        location: ''
    });

    const [additionalServices, setAdditionalServices] = useState([]);
    const [newService, setNewService] = useState({ name: '', price: '' });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleAddService = () => {
        if (newService.name && newService.price) {
            setAdditionalServices(prev => [...prev, { ...newService }]);
            setNewService({ name: '', price: '' });
        }
    };

    const handleRemoveService = (index) => {
        setAdditionalServices(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceData = {
            ...formData,
            additionalServices,
            id: Date.now(),
            img: "/image/servic.png", // Default image
            rating: 4.3, // Default rating
            address: formData.location
        };
        
        console.log('New Service Data:', serviceData);
        // Here you would typically send the data to your backend
        // For now, we'll just close the modal
        setShowCreateServiceModal(false);
        
        // Reset form
        setFormData({
            provider: '',
            category: '',
            title: '',
            description: '',
            price: '',
            discount: '',
            location: ''
        });
        setAdditionalServices([]);
        setNewService({ name: '', price: '' });
    };

    const resetForm = () => {
        setFormData({
            provider: '',
            category: '',
            title: '',
            description: '',
            price: '',
            discount: '',
            location: ''
        });
        setAdditionalServices([]);
        setNewService({ name: '', price: '' });
    };

    const closeCreateServiceModal = () => {
        setShowCreateServiceModal(false);
        resetForm();
    };

    const servicesData = [
        {
            id: 0,
            img: "/image/servic.png",
            name: "Elite Machine Services",
            rating: 4.3,
            address: "47B R.Block Morden, London",
            description: "Professional machine maintenance and repair services for all types of industrial and commercial equipment.",
            price: "$89",
            additionalServices: [
                { name: "Preventive Maintenance", price: "$29" },
                { name: "Emergency Repair", price: "$49" },
                { name: "Parts Replacement", price: "$39" }
            ]
        },
        {
            id: 1,
            img: "/image/cleann.png",
            name: "House Cleaning",
            subtitle: "Fresh Home Cleaning Service",
            rating: 4.3,
            address: "47B R.Block Morden, London, Greater London, United Kingdom",
            description: "Get your home professionally cleaned with eco-friendly supplies and trusted cleaners. Book your service with just one tap and enjoy a sparkling clean space.",
            price: "$39",
            additionalServices: [
                { name: "Kitchen Cleaning", price: "$9" },
                { name: "Electric Board Fixing", price: "$6" },
                { name: "Pet Care", price: "$9" },
                { name: "Window Washing", price: "$7" }
            ]
        },
        {
            id: 2,
            img: "/image/servic.png",
            name: "Elite Machine Services",
            rating: 4.3,
            address: "47B R.Block Morden, London",
            description: "Professional machine maintenance and repair services for all types of industrial and commercial equipment.",
            price: "$89",
            additionalServices: [
                { name: "Preventive Maintenance", price: "$29" },
                { name: "Emergency Repair", price: "$49" }
            ]
        },
        {
            id: 3,
            img: "/image/landScap.png",
            name: "Green Yard Landscaping",
            rating: 4.3,
            address: "47B R.Block Morden, London",
            description: "Professional landscaping services including garden design, lawn maintenance, and outdoor space transformation.",
            price: "$129",
            additionalServices: [
                { name: "Garden Design", price: "$49" },
                { name: "Lawn Maintenance", price: "$29" }
            ]
        },
        {
            id: 4,
            img: "/image/paint.png",
            name: "Pro Painters Crew",
            rating: 4.3,
            address: "47B R.Block Morden, London",
            description: "Expert painting services for residential and commercial properties with premium quality materials.",
            price: "$79",
            additionalServices: [
                { name: "Interior Painting", price: "$39" },
                { name: "Exterior Painting", price: "$59" }
            ]
        },
        {
            id: 5,
            img: "/image/landScap.png",
            name: "Green Yard Landscaping",
            rating: 4.3,
            address: "47B R.Block Morden, London",
            description: "Professional landscaping services including garden design, lawn maintenance, and outdoor space transformation.",
            price: "$129",
            additionalServices: [
                { name: "Garden Design", price: "$49" },
                { name: "Lawn Maintenance", price: "$29" }
            ]
        },
        {
            id: 6,
            img: "/image/pett.png",
            name: "Happy Paws Pet Care",
            rating: 4.3,
            address: "47B R.Block Morden, London",
            description: "Comprehensive pet care services including grooming, walking, sitting, and veterinary care coordination.",
            price: "$45",
            additionalServices: [
                { name: "Pet Grooming", price: "$25" },
                { name: "Pet Walking", price: "$15" },
                { name: "Pet Sitting", price: "$35" }
            ]
        },
        {
            id: 7,
            img: "/image/makeover.png",
            name: "Glow Up Makeover Services",
            rating: 4.3,
            address: "47B R.Block Morden, London",
            description: "Professional beauty and makeover services including makeup, hairstyling, skincare treatments, and personal grooming.",
            price: "$89",
            additionalServices: [
                { name: "Makeup Application", price: "$39" },
                { name: "Hair Styling", price: "$49" },
                { name: "Skincare Treatment", price: "$29" }
            ]
        },
        {
            id: 8,
            img: "/image/pett.png",
            name: "Happy Paws Pet Care",
            rating: 4.3,
            address: "47B R.Block Morden, London",
            description: "Comprehensive pet care services including grooming, walking, sitting, and veterinary care coordination.",
            price: "$45",
            additionalServices: [
                { name: "Pet Grooming", price: "$25" },
                { name: "Pet Walking", price: "$15" }
            ]
        }
    ];

    const handleServiceClick = (service) => {
        setSelectedService(service);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedService(null);
    };

    // Booking form helpers
    const toggleAddOn = (name) => {
        setSelectedAddOns(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]);
    };

    const resetBookingForm = () => {
        setBookingDateIndex(0);
        setBookingTime('10:00 AM');
        setSelectedAddOns([]);
        setPaymentMethod('cash');
    };

    const openBookingForm = () => {
        if (!selectedService) {
            const fallback = servicesData[1] || servicesData[0] || null;
            if (fallback) setSelectedService(fallback);
        }
        setShowBookingFormModal(true);
    };

    const closeBookingForm = () => {
        setShowBookingFormModal(false);
        resetBookingForm();
    };

    const parsePrice = (priceStr) => {
        if (!priceStr) return 0;
        const n = Number(String(priceStr).replace(/[^0-9.]/g, ''));
        return isNaN(n) ? 0 : n;
    };

    const computeTotals = () => {
        const base = parsePrice(selectedService?.price);
        const addOnsTotal = (selectedService?.additionalServices || [])
            .filter(s => selectedAddOns.includes(s.name))
            .reduce((sum, s) => sum + parsePrice(s.price), 0);
        const total = base + addOnsTotal;
        return { base, addOnsTotal, total };
    };
    return (
        <>
            <div className="service-main">
                <div>
                    <div className="service-btn">
                        <button className="btn1"
                            style={{
                                backgroundColor: "#013B9C",
                                color: "white",
                            }}>Active</button>
                        <button className="btn1">Modrate</button>
                        <button className="btn1">Pending</button>
                    </div>
                </div>

                <div className="service-mid">
                    {servicesData.map((service, idx) => (
                        <div key={idx} className="service-card" >
                            <div className="service-img" onClick={() => handleServiceClick(service)}>
                                <img src={service.img} alt="Service" />
                            </div>
                            <div className="service-text">
                                <div className="service-name">{service.name}</div>
                                <div>
                                    <FaRegStar
                                        style={{
                                            color: "#013B9C",
                                            marginRight: "5px"
                                        }} />{service.rating}
                                </div>
                            </div>
                            <div className="address">{service.address}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Booking Button - Opens Booking Form Modal */}
            <div className="view-booking" onClick={openBookingForm} style={{
                margin: '30px auto',
                padding: '20px 40px',
                fontSize: '18px',
                border: '3px solid #013B9C',
                backgroundColor: '#013B9C',
                color: 'white',
                borderRadius: '30px',
                cursor: 'pointer',
                display: 'block',
                width: 'fit-content',
                textAlign: 'center',
                fontWeight: 'bold',
                boxShadow: '0 8px 25px rgba(1, 59, 156, 0.4)'
            }}>Booking</div>

            {/* View Booking Button - Opens Success/summary modal */}
            <div className="view-booking" onClick={() => setShowViewBookingModal(true)} style={{
                margin: '10px auto 30px',
                padding: '20px 40px',
                fontSize: '18px',
                border: '3px solid #013B9C',
                backgroundColor: '#013B9C',
                color: 'white',
                borderRadius: '30px',
                cursor: 'pointer',
                display: 'block',
                width: 'fit-content',
                textAlign: 'center',
                fontWeight: 'bold',
                boxShadow: '0 8px 25px rgba(1, 59, 156, 0.4)'
            }}>VIEW BOOKING</div>

            {/* Service Detail Modal */}
            {showModal && selectedService && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
                                        <FaRegHeart style={{
                                            color: "#FFFFFF",
                                            // width: "60px",
                                        }} />
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
                                    <MdCall
                                        style={{
                                            color: "#013B9C",
                                            width: "30px",
                                        }} />
                                    <span>Call</span>
                                </div>
                                <div className="action-btn">
                                    <FaComments
                                        style={{
                                            color: "#013B9C",
                                            width: "30px",
                                        }} />
                                    <span>Chat</span>
                                </div>
                                <div className="action-btn">
                                    <FaMapMarkerAlt
                                        style={{
                                            color: "#013B9C",
                                            width: "30px",
                                        }} />
                                    <span>Direction</span>
                                </div>
                                <div className="action-btn">
                                    <FaShare
                                        style={{
                                            color: "#013B9C",
                                            width: "30px",
                                        }} />
                                    <span>Share</span>
                                </div>
                                <div className="action-btn">
                                    <FaStar
                                        style={{
                                            color: "#013B9C",
                                            width: "30px",
                                        }} />
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
                                        {/* <FaMapMarkerAlt className="location-icon" /> */}
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
            )}

            {/* Property View Button */}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <button className="property-view-btn" onClick={() => setShowPropertyModal(true)}>Property View</button>
            </div>

            {/* Floating Action Button */}
            <div className="fab-container">
                <button className="fab-button" onClick={() => setShowCreateServiceModal(true)}>
                    <FaPlus />
                </button>
            </div>

            {/* Property View Modal */}
            {showPropertyModal && (
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
                                    <div><FaStar
                                        style={{
                                            color: "#013B9C",
                                        }} /></div>
                                    <div>5</div>
                                </button>
                                <button className="filter-btn">
                                    <div><FaStar
                                    style={{
                                        color: "#013B9C",
                                    }} /></div>
                                    <div>4</div>
                                </button>
                                <button className="filter-btn">
                                    <div><FaStar
                                    style={{
                                        color: "#013B9C",
                                    }}
                                     /></div>
                                    <div>3</div>
                                </button>
                                <button className="filter-btn">
                                    <div><FaStar 
                                    style={{
                                        color: "#013B9C",
                                    }} /></div>
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
            )}

            {/* Create Service Modal */}
            {showCreateServiceModal && (
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
                                {/* Select Provider */}
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

                                {/* Photos Section */}
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

                                {/* Category */}
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

                                {/* Title */}
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

                                {/* Description */}
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

                                {/* Price */}
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

                                {/* Additional Services */}
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
                                    
                                    {/* Display added services */}
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

                                {/* Discount */}
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

                                {/* Location */}
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

                                {/* Map */}
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
            )}

            {/* View Booking Modal */}
            {showViewBookingModal && (
                <div className="modal-overlay" onClick={() => setShowViewBookingModal(false)}>
                    <div className="modal-content view-booking-modal" onClick={(e) => e.stopPropagation()}>

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
            )}

            {/* Booking Form Modal */}
            {showBookingFormModal && selectedService && (
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
                                            {[0,1,2,3].map((i) => (
                                                <button key={i} className={`pill ${bookingDateIndex===i?'active':''}`} onClick={() => setBookingDateIndex(i)}>
                                                    <div className="pill-top">{['Today','Tomorrow','Wed','Thu'][i]}</div>
                                                    <div className="pill-bottom">{15+i} Sep</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="section">
                                        <div className="section-title">Select Time</div>
                                        <div className="time-grid">
                                            {['10:00 AM','12:00 PM','2:00 PM','4:00 PM'].map(t => (
                                                <button key={t} className={`time-btn ${bookingTime===t?'active':''}`} onClick={() => setBookingTime(t)}>{t}</button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="section">
                                        <div className="section-title">Additional Services</div>
                                        <div className="addons-list">
                                            {(selectedService.additionalServices||[]).map((s,idx) => (
                                                <label key={idx} className="addon-item">
                                                    <input type="checkbox" checked={selectedAddOns.includes(s.name)} onChange={() => setSelectedAddOns(prev => prev.includes(s.name) ? prev.filter(n => n !== s.name) : [...prev, s.name])} />
                                                    <span>{s.name}</span>
                                                    <span className="price-tag">{s.price}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="section totals">
                                        {(() => { const { base, addOnsTotal, total } = computeTotals(); return (
                                            <>
                                                <div className="row"><span>Base price</span><span>${base}</span></div>
                                                <div className="row"><span>Add-ons</span><span>${addOnsTotal}</span></div>
                                                <div className="row total"><span>Total Price</span><span>${total}</span></div>
                                            </>
                                        )})()}
                                    </div>
                                    <div className="section">
                                        <div className="section-title">Payment Method</div>
                                        <div className="payment-list">
                                            <label className="payment-item">
                                                <input type="radio" name="pm" checked={paymentMethod==='cash'} onChange={() => setPaymentMethod('cash')} />
                                                <span>Cash</span>
                                            </label>
                                            <label className="payment-item">
                                                <input type="radio" name="pm" checked={paymentMethod==='wallet'} onChange={() => setPaymentMethod('wallet')} />
                                                <span>Wallet</span>
                                            </label>
                                            <label className="payment-item">
                                                <input type="radio" name="pm" checked={paymentMethod==='visa'} onChange={() => setPaymentMethod('visa')} />
                                                <span>Visa - 0987</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button className="create-booking-btn">Create Booking</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )

}
export default Services