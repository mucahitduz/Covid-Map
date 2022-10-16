import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  name: "",
};

const countrySlice = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {
    getCountry: (state, action) => {
      state.name = action.payload;
    },
    getCountryData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default countrySlice.reducer;
export const { getCountry, getCountryData } = countrySlice.actions;
