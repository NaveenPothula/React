
import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./Reducer";

const store = configureStore({
  reducer: {
    location: locationReducer,
  },
});

export default store;
