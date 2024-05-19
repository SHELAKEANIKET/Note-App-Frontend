import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContextProvider";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const  user  = JSON.parse(localStorage.getItem("user"));
  console.log(user)
  return user ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
