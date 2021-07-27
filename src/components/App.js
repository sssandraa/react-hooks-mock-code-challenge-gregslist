import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useEffect } from "react"
import { useState } from "react"


function App() {

  const [listingData, setListingData] = useState([])
  
  useEffect(() => {

    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => {
        setListingData(data)
    })
  }, []);

  function killListing(idOfListingToDie){
    console.log("deathrow id", idOfListingToDie)

    let newListingData = [...listingData]
    
    newListingData.filter(trashListing => console.log(trashListing.idOfListingToDie ))

    setListingData(newListingData)
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer killListing={killListing} listingData={listingData}/>
    </div>
  );
}

export default App;