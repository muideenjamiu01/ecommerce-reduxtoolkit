
import authSlice from "./authSlice"
import cartSlice from "./cartSlice"
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
})

export default store
