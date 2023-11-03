
import React from "react";
import { useSelector } from "react-redux";
import "./styles.css"; // Import the CSS file

const LocationInfo = () => {
  const location = useSelector((state) => state.location.location);
  const log = useSelector((state)=> state.location.loading)



  console.log(location)
  console.log(log)


  if (!location) return null;

  const {
    "post code": postalCode,
    country,
    "country abbreviation": countryAbbreviation,
    places,
  } = location;

  return (
    <div className="location-info">
      <h2>Location Information</h2>
      <p>Postal Code: {postalCode}</p>
      <p>Country: {country}</p>
      <p>Country Abbreviation: {countryAbbreviation}</p>
      <h3>Places:</h3>
      <ul>
        {places && Array.isArray(places) ? (
          places.map((place, index) => (
            <li key={index}>
              <p>Place Name: {place["place name"]}</p>
              <p>Longitude: {place.longitude}</p>
              <p>State: {place.state}</p>
              <p>State Abbreviation: {place["state abbreviation"]}</p>
              <p>Latitude: {place.latitude}</p>
            </li>
          ))
        ) : (
          <li>No places found</li>
        )}
      </ul>
    </div>
  );
};

export default LocationInfo;
