import React, { useState } from 'react';


const Tour = ({ item, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    onDelete(item.id); 
  };

  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={item.image} className="tour-img" alt={item.title} />
        <p className="tour-date">{item.date}</p>
        <button onClick={toggleDescription}>
          {expanded ? 'Hide Description' : 'Show Description'}
        </button>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{item.title}</h4>
        </div>
        {expanded && <p className="tour-info">{item.info}</p>}
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map" />
            </span>
            {item.location}
          </p>
          <p>from {item.cost}</p>
          <p>{item.duration} days</p>
          <button onClick={handleDelete} className="delete-button">
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};
export default Tour;
