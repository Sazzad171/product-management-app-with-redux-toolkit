import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Home from "../pages/Home";
import AddProduct from "../features/product/AddProduct";
import EditProduct from "../features/product/EditProduct";

const Index = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add-product' element={<AddProduct />} />
            <Route path='/edit-product' element={<EditProduct />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Index;