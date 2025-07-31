import React from "react";
import './service.css'
import { FaRegStar } from "react-icons/fa";
const Services = () => {
    const servicesData = [
        {
            img: "/image/servic.png",
            name: "Elite Machine Services",
            rating: 4.3,
            address: "47B R.Block Morden, London"
        },
        {
            img: "/image/cleann.png",
            name: "Fresh Home Cleaning Service",
            rating: 4.3,
            address: "47B R.Block Morden, London"
        },
        {
            img: "/image/servic.png",
            name: "Elite Machine Services",
            rating: 4.3,
            address: "47B R.Block Morden, London"
        },
        {
            img: "/image/landScap.png",
            name: "Green Yard Landscaping",
            rating: 4.3,
            address: "47B R.Block Morden, London"
        },
        {
            img: "/image/paint.png",
            name: "Pro Painters Crew",
            rating: 4.3,
            address: "47B R.Block Morden, London"
        },
        {
            img: "/image/landScap.png",
            name: "Green Yard Landscaping",
            rating: 4.3,
            address: "47B R.Block Morden, London"
        },
        {
            img: "/image/pett.png",
            name: "Happy Paws Pet Care",
            rating: 4.3,
            address: "47B R.Block Morden, London"
        },
        {
            img: "/image/makeover.png",
            name: "Glow Up Makeover Services",
            rating: 4.3,
            address: "47B R.Block Morden, London"
        },
        {
            img: "/image/pett.png",
            name: "Happy Paws Pet Care",
            rating: 4.3,
            address: "47B R.Block Morden, London"
        }
    ];
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
                            <div className="service-img">
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
        </>
    )

}
export default Services