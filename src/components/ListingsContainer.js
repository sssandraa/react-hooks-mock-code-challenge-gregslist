import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listingData, killListing }) {

  return (
    <main>
      <ul className="cards">
      {listingData.map(listing =>
        <ListingCard killListing={killListing} id={listing.id} description={listing.description} 
      image={listing.image} location={listing.location}/>)
      }
      </ul>
    </main>
  );
}

export default ListingsContainer;
