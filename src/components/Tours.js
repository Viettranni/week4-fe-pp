import { useState } from 'react';
import { tours } from "../data";
import Tour from "./Tour.js";

const Tours = () => {
  const [items, setItems] = useState(tours);

  const handleDeleteItem = (itemId) => {
    // Filter out the item with the specified ID and update the state
    const updatedItems = items.filter((tour) => tour.id !== itemId);
    setItems(updatedItems);
  };


  return (
    <section className="section" id="tour">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>
      <div className="section-center featured-center">
        {items.map((tour) => {
          return <Tour item={tour} key={tour.id} onDelete={handleDeleteItem}/>
        })}
      </div>
    </section>
  );
};

export default Tours;