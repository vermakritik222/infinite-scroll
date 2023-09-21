import { createSlice } from "@reduxjs/toolkit";
import { setNews } from "./reducers";

const initialState = {};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews,
  },
});

export const newsActions = newsSlice.actions;

export default newsSlice;
