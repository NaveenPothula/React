
// src/App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./Store/Store";
import LocationInfo from "./Components/locationInfo";
import PostalCodeInput from "./Components/postalCodeInput";


function App() {
  console.log(store)
  return (
    <Provider store={store}>
      <div className="App">
        <PostalCodeInput />
        <LocationInfo />
      </div>
    </Provider>
  );
}

export default App;
