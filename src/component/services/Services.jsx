import React, { useState } from "react";
import './service.css'
import { FaRegStar, FaTimes, FaPhone, FaComments, FaMapMarkerAlt, FaShare, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdCall } from "react-icons/md";
const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [showModal, setShowModal] = useState(false);
    
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
                                    }}/>
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
                                    }}/>
                                    <span>Reviews</span>
                                </div>
                            </div>

                            <div className="service-info">
                                <div className="service-title">
                                    <h3>{selectedService.name}</h3>
                                    {selectedService.subtitle && (
                                        <p className="service-subtitle">{selectedService.subtitle}</p>
                                    )}
                                </div>

                                <div className="service-description">
                                    <p>{selectedService.description}</p>
                                </div>

                                <div className="service-price">
                                    <span className="price">{selectedService.price}</span>
                                </div>

                                <div className="additional-services">
                                    <h4>Additional Services</h4>
                                    <div className="service-options">
                                        {selectedService.additionalServices.map((service, idx) => (
                                            <div key={idx} className="service-option">
                                                <input type="checkbox" id={`service-${idx}`} defaultChecked />
                                                <label htmlFor={`service-${idx}`}>
                                                    {service.name} ({service.price})
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="service-location">
                                    <div className="location-info">
                                        <FaMapMarkerAlt className="location-icon" />
                                        <div>
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
                            <button className="booking-btn">Booking</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )

}
export default Services