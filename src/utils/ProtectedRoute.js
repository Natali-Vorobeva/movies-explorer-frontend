import React from 'react';
import { Routes, Route, Navigate, Fragment } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  console.log(props.isLoggedIn);
  return (
    // console.log(props.isLoggedIn);
    props.isLoggedIn ? <Component {...props} /> : <Navigate to="/" replace/>

  )
}

export default ProtectedRoute;

// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";

// const ProtectedRoute = ({ component: Component, ...props }) => {
//   return (
//     <Routes>
//       <Route>
//         {() =>
//           props.isLoggedIn ? <Component {...props} /> : <Navigate to='/' />
//         }
//       </Route>
//     </Routes>

//   );
// };

// export default ProtectedRoute;

// import React from 'react';
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ element: Component, ...props }) => {
//   return (
//     props.isLoggedIn ? <Component {...props} /> : <Navigate to="/" />
//   )
// };

// export default ProtectedRoute;