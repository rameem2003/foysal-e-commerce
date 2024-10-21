import { configureStore } from "@reduxjs/toolkit";
import LoadAllProductsSlice from "../features/LoadAllProductsSlice";
import CartSlice from "../features/CartSlice";
import AuthSlice from "../features/AuthSlice";

export default configureStore({
  reducer: {
    allProducts: LoadAllProductsSlice,
    cartArray: CartSlice,
    user: AuthSlice,
  },
});
