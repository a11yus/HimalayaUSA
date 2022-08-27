import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from './CartPage'
import ProductPage from './ProductPage'

function AllRoutes() {
  return (
    <div>
        <Routes>  
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        </Routes>
    </div>
  )
}

export default AllRoutes