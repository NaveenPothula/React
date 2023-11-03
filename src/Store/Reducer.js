
import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: null,
    loading: false,
    error: null,
  },
  reducers: {
    setLocationInfo: (state, action) => {
      state.location = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearLocationInfo: (state) => {
      state.location = null;
      state.error = null;
      state.loading= false
    },
  },
});

export const {
  setLocationInfo,
  setLoading,
  setError,
  clearLocationInfo,
} = locationSlice.actions;

export default locationSlice.reducer;
