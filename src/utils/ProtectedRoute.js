import React from 'react';
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {

  return (

  props.isLoggedIn ? <Component {...props} /> : <Navigate to="/movies" replace />
  )
}

export default ProtectedRoute;

// const ProtectedRoute = () => {
//   const location = useLocation();
  // console.log(user);

  // if (!user) {
  //   return <Navigate to='/signin' replace />
  // }

  // return children;
// }
//
// export default ProtectedRoute;