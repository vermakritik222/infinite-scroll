import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice";

const store = configureStore({
  reducer: {
    newsSlice: newsSlice.reducer,
  },
});

export default store;
