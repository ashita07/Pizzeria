import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/User/userSlice';
import cartReducer from './features/Cart/CartSlice';
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
