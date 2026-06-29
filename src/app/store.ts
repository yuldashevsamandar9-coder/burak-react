import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { HomePage } from "../app/screens/homePage";
import { ProductsPage } from "../app/screens/productsPage";
import { OrdersPage } from "../app/screens/ordersPage";
import reduxLogger from "redux-logger";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    // @ts-ignore
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePage,
    productsPage: ProductsPage,
    ordersPage: OrdersPage,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
