import React, { useState } from 'react';

const Service = ({id, icon, title, text, onDelete}) => {
  const [expanded, setExpanded] = useState(true);

  const toggleText = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    console.log(onDelete);
    onDelete(id); // Pass the item's ID to the parent component for deletion
  };
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        {expanded && <p className="service-text">{text}</p>}
        <button onClick={toggleText}>
          {expanded ? 'Hide Text' : 'Show Text'}
        </button>&nbsp;
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
      </div>
    </article>
  );
};
export default Service;
