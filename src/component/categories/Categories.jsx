import React, { useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { FiEdit, FiTrash } from "react-icons/fi";
import "./Category.css";

const initialCategories = [
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

const CategoryGrid = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  const handleDelete = (index) => {
    const updated = [...categories];
    updated.splice(index, 1);
    setCategories(updated);
  };

  const handleEdit = (index, title) => {
    setEditingIndex(index);
    setEditedTitle(title);
  };

  const handleSave = () => {
    const updated = [...categories];
    updated[editingIndex].title = editedTitle;
    setCategories(updated);
    setEditingIndex(null);
    setEditedTitle("");
  };

  const handleCloseModal = () => {
    setEditingIndex(null);
    setEditedTitle("");
  };

  return (
    <>
      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <CategoryCard
              title={item.title}
              icon={item.icon}
              onDelete={() => handleDelete(index)}
              onEdit={() => handleEdit(index, item.title)}
            />
          </div>
        ))}
      </div>

      {editingIndex !== null && (
        <div className="edit-modal-overlay">
          <div className="edit-modal">
            <h3>Edit Category</h3>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCloseModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const CategoryCard = ({ title, icon, onDelete, onEdit }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="dots" onClick={() => setShowMenu(!showMenu)}>
        <MdMoreVert size={20} />
        {showMenu && (
          <div className="dropdown-menu">
            <div onClick={onEdit}>
              <FiEdit /> Edit
            </div>
            <div onClick={onDelete}>
              <FiTrash /> Delete
            </div>
          </div>
        )}
      </div>
      <div className="circle-icon">
        <img src={icon} alt={title} />
      </div>
      <div className="category-title">{title}</div>
    </>
  );
};

export default CategoryGrid;
