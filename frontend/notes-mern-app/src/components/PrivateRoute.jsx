import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const  user  = localStorage.getItem("token");
  console.log(user)
  return user ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
