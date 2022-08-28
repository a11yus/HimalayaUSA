import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Mainpage from "./Mainpage/Mainpage";
import Registration from "./Registration.jsx/Registration";
import { InformationPage } from "./InformationPage";
import ShippingPage from "./ShippingPage";
import PaymentPage from "./PaymentPage";
import UserRoute from "../Components/PrivateRoute";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import BillingPage from "./BillingPage";
import About from "./About/About";

import ProductPage from "./Products/ProductPage";
import CartPage from "./Products/CartPage";
import StoreLocator from "./StoreLocator";
import { setUser } from "../Redux/Authreducer/action";




const AllRoutes = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(setUser(authUser))
      }else{
        dispatch(setUser(null))
      }
    })
  },[])
  return (
    <Routes>
      <Route path="/" element={<Mainpage />}></Route>
      <Route path="/productPage" element={<ProductPage />}></Route>
      <Route path="/cartPage" element={<CartPage />}></Route>
      <Route path="/registration" element={<Registration />}></Route> 
      <Route path="/login" element={<Login />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/storelocator" element={<StoreLocator/>}></Route>
      <Route path="/billing" element={<BillingPage />}></Route>
      <Route
        path="/checkout"
        element={
          // <UserRoute>
            <InformationPage />
          // </UserRoute>
        }
      ></Route>
      <Route
        path="/shipping"
        element={
          // <UserRoute>
            <ShippingPage />
          // </UserRoute>
        }
      ></Route>
      <Route
        path="/payment"
        element={
          // <UserRoute>
            <PaymentPage />
          // </UserRoute>
        }
      ></Route>
    </Routes>
  );
};

export default AllRoutes;
