import React from 'react'
import {Routes, Route} from "react-router-dom"
import Login from './Login/Login'
import Mainpage from './Mainpage/Mainpage'
import Registration from './Registration.jsx/Registration'
import {InformationPage} from "./InformationPage"
import ShippingPage from "./ShippingPage"
import PaymentPage from './PaymentPage'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} ></Route>
      <Route path="/registration" element={<Registration />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/checkout" element={<InformationPage />} ></Route>
      <Route path="/shipping" element={<ShippingPage />} ></Route>
      <Route path="/payment" element={<PaymentPage/>}> </Route>
    </Routes>
  )
}

export default AllRoutes