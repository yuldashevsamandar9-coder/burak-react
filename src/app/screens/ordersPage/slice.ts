import { createSlice } from "@reduxjs/toolkit";
import { HomePageState, OrdersPageState } from "../../../lib/types/screen";
//import NewDishes from "./NewDishes";

const initialState: OrdersPageState = {
  pausedOrders: [],
  processOrders: [],
  finishedOrders: [],
};

const ordPageSlice = createSlice({
  name: "ordersPage",
  initialState,
  reducers: {
    setPausedOrders: (state, action) => {
      state.pausedOrders = action.payload;
    },
    setProcessOrders: (state, action) => {
      state.processOrders = action.payload;
    },
    setFinishedOrders: (state, action) => {
      state.finishedOrders = action.payload;
    },
  },
});

export const { setPausedOrders, setProcessOrders, setFinishedOrders } =
  ordPageSlice.actions;

const OrdersPageReducer = ordPageSlice.reducer;
export default OrdersPageReducer;
