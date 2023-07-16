import { createSlice } from "@reduxjs/toolkit";

// image import
import Mobile from '../../assets/img/mobile.jpg';

// initial product data
const initialProducts = [
    {
        id: 1,
        name: "Mobile",
        price: 2000,
        image: Mobile
    },
    {
        id: 2,
        name: "Laptop",
        price: 3000,
        image: Mobile
    }
]

const ProductSlice = createSlice({
    name: "product",
    initialState: initialProducts,
    reducers: {
        showProducts: state => state,
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        editProduct: (state, action) => {
            const prodId = action.payload.id;
            state.map((item) => {
                if (item.id === prodId) {
                    item.name = action.payload.name,
                    item.price = action.payload.price,
                    item.image = action.payload.image
                }
            });
        },
        deleteProducts: (state, action) => {
            const id = action.payload;
            return state.filter((item) => item.id !== id);
        }
    }
});

export const { 
    showProducts, 
    addProduct,
    editProduct,
    deleteProducts
} = ProductSlice.actions;

export default ProductSlice.reducer;