
export const setLocationInfo = (location) => ({
    type: "SET_LOCATION_INFO",
    location,
  });
  
  export const setLoading = (loading) => ({
    type: "SET_LOADING",
    loading,
  });
  
  export const setError = (error) => ({
    type: "SET_ERROR",
    error,
  });
  
  export const clearLocationInfo = () => ({
    type: "CLEAR_LOCATION_INFO",
  });
  