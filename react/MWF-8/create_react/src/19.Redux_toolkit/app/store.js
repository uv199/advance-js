import { configureStore } from "@reduxjs/toolkit";

import countReducer from "../fetures/count/countSlice";
import amountReducer from "../fetures/amount/amountslice";

export const store = configureStore({
  reducer: {
    COUNT: countReducer,
    AMOUNT: amountReducer,
  },
});