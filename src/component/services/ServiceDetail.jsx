import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaRegStar, FaArrowLeft, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import './serviceDetail.css';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock data - in a real app, this would come from an API
    const servicesData = [
        {
            id: 0,
            img: "/image/servic.png",
            name: "Elite Machine Services",
            rating: 4.3,
            address: "47B R.Block Morden, London",
            description: "Professional machine maintenance and repair services for all types of industrial and commercial equipment. Our expert technicians ensure your machines run at peak efficiency.",
            phone: "+44 20 7123 4567",
            email: "info@elitemachines.com",
            category: "Industrial Services",
            experience: "15+ years",
            availability: "24/7 Emergency Service"
        },
        {
            id: 1,
            img: "/image/cleann.png",
            name: "Fresh Home Cleaning Service",
            rating: 4.3,
            address: "47B R.Block Morden, London",
            description: "Comprehensive home cleaning services including deep cleaning, regular maintenance, and specialized cleaning for kitchens, bathrooms, and living areas.",
            phone: "+44 20 7123 4568",
            email: "hello@freshhome.com",
            category: "Home Services",
            experience: "8+ years",
            availability: "Monday - Saturday, 8 AM - 6 PM"
        },
        {
            id: 2,
            img: "/image/landScap.png",
            name: "Green Yard Landscaping",
            rating: 4.3,
            address: "47B R.Block Morden, London",
            description: "Professional landscaping services including garden design, lawn maintenance, tree care, and outdoor space transformation.",
            phone: "+44 20 7123 4569",
            email: "contact@greenyard.com",
            category: "Landscaping",
            experience: "12+ years",
            availability: "Monday - Friday, 7 AM - 5 PM"
        },
        {
            id: 3,
            img: "/image/paint.png",
            name: "Pro Painters Crew",
            rating: 4.3,
            address: "47B R.Block Morden, London",
            description: "Expert painting services for residential and commercial properties. Interior and exterior painting with premium quality materials.",
            phone: "+44 20 7123 4570",
            email: "info@propainters.com",
            category: "Painting",
            experience: "10+ years",
            availability: "Monday - Saturday, 8 AM - 6 PM"
        },
        {
            id: 4,
            img: "/image/pett.png",
            name: "Happy Paws Pet Care",
            rating: 4.3,
            address: "47B R.Block Morden, London",
            description: "Comprehensive pet care services including grooming, walking, sitting, and veterinary care coordination for all types of pets.",
            phone: "+44 20 7123 4571",
            email: "care@happypaws.com",
            category: "Pet Services",
            experience: "6+ years",
            availability: "Daily, 7 AM - 8 PM"
        },
        {
            id: 5,
            img: "/image/makeover.png",
            name: "Glow Up Makeover Services",
            rating: 4.3,
            address: "47B R.Block Morden, London",
            description: "Professional beauty and makeover services including makeup, hairstyling, skincare treatments, and personal grooming.",
            phone: "+44 20 7123 4572",
            email: "beauty@glowup.com",
            category: "Beauty Services",
            experience: "9+ years",
            availability: "Tuesday - Sunday, 10 AM - 8 PM"
        }
    ];

    const service = servicesData.find(s => s.id === parseInt(id));

    if (!service) {
        return (
            <div className="service-detail-container">
                <div className="service-not-found">
                    <h2>Service not found</h2>
                    <button onClick={() => navigate('/services')} className="back-btn">
                        <FaArrowLeft /> Back to Services
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="service-detail-container">
            <div className="service-detail-header">
                <button onClick={() => navigate('/services')} className="back-btn">
                    <FaArrowLeft /> Back to Services
                </button>
                <h1>Service Details</h1>
            </div>

            <div className="service-detail-content">
                <div className="service-detail-image">
                    <img src={service.img} alt={service.name} />
                </div>

                <div className="service-detail-info">
                    <div className="service-detail-title">
                        <h2>{service.name}</h2>
                        <div className="service-rating">
                            <FaRegStar className="star-icon" />
                            <span>{service.rating}</span>
                        </div>
                    </div>

                    <div className="service-category">
                        <span className="category-tag">{service.category}</span>
                    </div>

                    <div className="service-description">
                        <p>{service.description}</p>
                    </div>

                    <div className="service-details-grid">
                        <div className="detail-item">
                            <FaMapMarkerAlt className="detail-icon" />
                            <div>
                                <strong>Address:</strong>
                                <p>{service.address}</p>
                            </div>
                        </div>

                        <div className="detail-item">
                            <FaPhone className="detail-icon" />
                            <div>
                                <strong>Phone:</strong>
                                <p>{service.phone}</p>
                            </div>
                        </div>

                        <div className="detail-item">
                            <FaEnvelope className="detail-icon" />
                            <div>
                                <strong>Email:</strong>
                                <p>{service.email}</p>
                            </div>
                        </div>

                        <div className="detail-item">
                            <div>
                                <strong>Experience:</strong>
                                <p>{service.experience}</p>
                            </div>
                        </div>

                        <div className="detail-item">
                            <div>
                                <strong>Availability:</strong>
                                <p>{service.availability}</p>
                            </div>
                        </div>
                    </div>

                    <div className="service-actions">
                        <button className="contact-btn">
                            <FaPhone /> Contact Now
                        </button>
                        <button className="book-btn">
                            Book Service
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail; 