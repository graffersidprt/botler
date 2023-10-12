import React from "react";
import { Route, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  path: string;
  element: React.ReactElement;
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  path,
  element,
  isAuthenticated,
}) => {
  console.log("isAuthenticated", isAuthenticated, path, element)
  // return isAuthenticated ? (
  //   <Route path={path} element={element} />
  // ) : (
  //   <Navigate to="/sign-in" />
  // );
  return (
    <div> PrivateRoute </div>
  );
};

export default PrivateRoute;
