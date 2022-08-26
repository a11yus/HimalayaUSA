import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './Login/Login'
import Mainpage from './Mainpage/Mainpage'
import Registration from './Registration.jsx/Registration'
import { InformationPage } from "./InformationPage"
import ShippingPage from "./ShippingPage"
import PaymentPage from './PaymentPage'
import UserRoute from '../Components/PrivateRoute'
import { useDispatch } from 'react-redux'
import { auth } from '../firebase'


const AllRoutes = () => {
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   auth.onAuthStateChanged((authUser))
  // },[])
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} ></Route>
      <Route path="/registration" element={<Registration />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/checkout" element={
         <UserRoute>
          <InformationPage />
         </UserRoute>
      } ></Route>
      <Route path="/shipping" element={
         <UserRoute>
          <ShippingPage />
         </UserRoute> 
      } ></Route>
      <Route path="/payment" element={
       <UserRoute>
          <PaymentPage />
         </UserRoute>
      }> </Route>
    </Routes>
  )
}

export default AllRoutes