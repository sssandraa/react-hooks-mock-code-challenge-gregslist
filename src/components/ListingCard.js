import React from "react";
import { useState, useEffect } from "react";


function ListingCard({ id, description, image, location, killListing }) {

  const [favorite, setFavorite] = useState(false)
  const toggleFavorite = () => setFavorite(!favorite)



  return (
    <li className="card" id={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">

        {favorite ? (
          <button onClick={toggleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>

        <button onClick={() => killListing(id)} className="emoji-button delete">🗑</button>

      </div>
    </li>
  );
}

export default ListingCard;
