import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

const UserRoute = ({ children, ...rest }) => {
  const currentUser = useSelector((store) => store.AuthReducer.currentUser);
  // return currentUser ? <Route {...rest} /> : <LoadingToRedirect/>
  const navigate = useNavigate()
  useEffect(() => {
    if(!currentUser){
      navigate("/login")
    }
  }, [navigate,currentUser])
  return children
};

export default UserRoute;