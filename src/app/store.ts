import { configureStore } from "@reduxjs/toolkit";
import type { ThunkAction, Action } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";
// productsReducer'ni to'g'ri yo'l orqali import qilamiz:
import productsReducer from "./screens/productsPage/slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  // Agar reduxLogger ishlatmoqchi bo'lsangiz, middleware'ni ham ulab qo'yamiz:
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger),
});

// TypeScript turlarini (Types) ham pastidan eksport qilib qo'ying (kerak bo'ladi):
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown, yarn dev
  
  Action<string>
>;
