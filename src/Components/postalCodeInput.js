
// src/PostalCodeInput.js
import React, { useState } from "react";
import "./styles.css"
import { useDispatch, useSelector } from "react-redux";
import {setLocationInfo,clearLocationInfo,setError,setLoading} from "../Store/Reducer"

const PostalCodeInput = () => {
  const [postalCode, setPostalCode] = useState("");
  const dispatch = useDispatch();
  
  const loading = useSelector((state)=>state.location.loading);    
  const error = useSelector((state)=>state.location.error)
  const location = useSelector((state)=>state.location.location)   



  
  const log= useSelector((state)=>state)
  console.log(log)

  const handleFetchLocation = async () => { 



    try {
      dispatch(clearLocationInfo())
      dispatch(setLoading())
      
        

      const response = await fetch(`https://api.zippopotam.us/in/${postalCode}`);

      if (!response.ok) {
        throw new Error("Location not found");
      }

      const data = await response.json();
      console.log(data)
      dispatch(setLocationInfo(data) );
      
    } catch (err) {
      dispatch(setLocationInfo(null));
      dispatch(setError(err.message))
      
    }
  };

  const handleClearLocation = () => {
    dispatch(clearLocationInfo());
    setPostalCode("");
  };

  return (
    <div className="postal-code-input">
      <input
        type="text"
        placeholder="Enter Postal Code"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <button onClick={handleFetchLocation} disabled={loading}>
        Fetch Location
      </button>
      <button onClick={handleClearLocation}>Clear</button>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!error && !loading && !location &&<p>Please enter pincode to see the location details</p> }
    </div>
  );
};

export default PostalCodeInput;
