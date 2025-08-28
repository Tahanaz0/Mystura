import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './service.css'
import { FaRegStar, FaPlus, FaRegHeart } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
import { MdCall } from "react-icons/md";

// Import modal components
import ServiceDetailModal from "./ServiceDetailModal";
import PropertyViewModal from "./PropertyViewModal";
import CreateServiceModal from "./CreateServiceModal";
import ViewBookingModal from "./ViewBookingModal";
import BookingFormModal from "./BookingFormModal";

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

            {/* Modal Components */}
            <ServiceDetailModal
                selectedService={selectedService}
                showModal={showModal}
                closeModal={closeModal}
                openBookingForm={openBookingForm}
            />

            <PropertyViewModal
                showPropertyModal={showPropertyModal}
                setShowPropertyModal={setShowPropertyModal}
            />

            <CreateServiceModal
                showCreateServiceModal={showCreateServiceModal}
                closeCreateServiceModal={closeCreateServiceModal}
                formData={formData}
                handleInputChange={handleInputChange}
                additionalServices={additionalServices}
                newService={newService}
                setNewService={setNewService}
                handleAddService={handleAddService}
                handleRemoveService={handleRemoveService}
                handleSubmit={handleSubmit}
            />

            <ViewBookingModal
                showViewBookingModal={showViewBookingModal}
                setShowViewBookingModal={setShowViewBookingModal}
            />

            <BookingFormModal
                showBookingFormModal={showBookingFormModal}
                closeBookingForm={closeBookingForm}
                selectedService={selectedService}
                bookingDateIndex={bookingDateIndex}
                setBookingDateIndex={setBookingDateIndex}
                bookingTime={bookingTime}
                setBookingTime={setBookingTime}
                selectedAddOns={selectedAddOns}
                setSelectedAddOns={setSelectedAddOns}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                computeTotals={computeTotals}
            />
        </>
    )
}

export default Services;