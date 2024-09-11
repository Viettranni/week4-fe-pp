import React, { useState } from 'react';

const Service = ({item, onDelete}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleText = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    console.log(onDelete);
    onDelete(item.id); // Pass the item's ID to the parent component for deletion
  };
  return (
    <article className="service">
      <span className="service-icon">
        <i className={item.icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{item.title}</h4>
        {expanded && <p className="service-text">{item.text}</p>}
      </div>
      <div className="buttons">
      <button onClick={toggleText}>
        {expanded ? 'Hide Text' : 'Show Text'}
      </button>
      <br />
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
      </div>
    </article>
  );
};
export default Service;
