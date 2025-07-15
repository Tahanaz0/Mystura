import React, { useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { FiEdit, FiTrash } from "react-icons/fi";
import "./Category.css";

const categories = [
    { title: "Mechanic", icon: "/image/mechanic.png" },
    { title: "Tutoring", icon: "/image/tutoring.png" },
    { title: "Gardening Landscaping", icon: "/image/gardening.png" },
    { title: "Pet Care", icon: "/image/pet.png" },
    { title: "Cooking", icon: "/image/cooking.png" },
    { title: "Childcare", icon: "/image/child.png" },
    { title: "Painting", icon: "/image/painting.png" },
    { title: "Labourer/Construction workers", icon: "/image/worker.png" },
    { title: "Seamstress", icon: "/image/Steamstress.png" },
    { title: "Locksmith", icon: "/image/lock.png" },
    { title: "Practical Lessons", icon: "/image/practical.png" },
    { title: "Handy Man", icon: "/image/man.png" },
    { title: "Make-up Artist", icon: "/image/artist.png" },
    { title: "Junk  Removal", icon: "/image/junk.png" },
    { title: "Renovation", icon: "/image/renovation.png" },
    { title: "House Cleaning", icon: "/image/clean.png" },
 
];

const CategoryCard = ({ title, icon }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="category-card">
      <div className="dots" onClick={() => setShowMenu(!showMenu)}>
        <MdMoreVert size={20} />
        {showMenu && (
          <div className="dropdown-menu">
            <div><FiEdit /> Edit</div>
            <div><FiTrash /> Delete</div>
          </div>
        )}
      </div>
      <div className="circle-icon">
        <img src={icon} alt={title} />
      </div>
      <div className="category-title">{title}</div>
    </div>
  );
};

const CategoryGrid = () => {
  return (
    <div className="category-grid">
      {categories.map((item, index) => (
        <CategoryCard key={index} title={item.title} icon={item.icon} />
      ))}
    </div>
  );
};

export default CategoryGrid;
