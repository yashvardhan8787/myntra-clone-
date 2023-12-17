import { createSlice } from '@reduxjs/toolkit';

const fetchStatusSlice = createSlice({
  name: "items",
  initialState: {
    fetchDone: false, // 'false:"PENDING" or true: Done
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice; // Corrected the export
