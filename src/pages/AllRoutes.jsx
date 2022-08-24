import React from 'react'
import {Routes, Route} from "react-router-dom"
import Login from './Login/Login'
import Mainpage from './Mainpage/Mainpage'
import Registration from './Registration.jsx/Registration'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} ></Route>
      <Route path="/registration" element={<Registration />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
    </Routes>
  )
}

export default AllRoutes