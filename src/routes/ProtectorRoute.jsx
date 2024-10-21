import React from "react";
import { Navigate } from "react-router-dom";

const ProtectorRoute = ({ isLoggedin, children }) => {
  if (!isLoggedin) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
};

export default ProtectorRoute;
