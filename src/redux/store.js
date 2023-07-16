import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/ProductSlice";

const store = configureStore({
    reducer: {
        productReducer: productReducer
    }
});

export default store;