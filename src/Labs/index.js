// import Nav from "../Nav";
// import Assignment3 from "./a3";
// import Assignment4 from "./a4";
// import {Routes, Route, Navigate}
//   from "react-router";
// import store from "./store";
// import { Provider } from "react-redux";
// import { useMemo } from "react";


// function Labs() {
//   const {pathname} = useLocation();
  
//  return (
//   <Provider store={store}>
//     <div className="container">
//       <h1>Labs</h1>
//      <Routes>
//        <Route path="/"
//         element={<Navigate
//                   to="a3"/>}/>
//        <Route path="a3"
//         element={<Assignment3/>}/>
//        <Route path="a4"
//         element={<Assignment4/>}/>
//      </Routes>
//    </div>
//    </Provider>
//  );
// }

// export default Labs;


import { Route, Routes, Link, useLocation, Navigate } from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import store from "./store";
import { Provider } from "react-redux";
import Nav from "../Nav";

function Labs() {
  const { pathname } = useLocation();
  // const { pathname } = location;
  return (
    <Provider store={store}>
    <Nav/>

      <div className="container">
        <h1>Labs</h1>
        <div className="nav nav-pills">
          <Link
            to="/Labs/a3"
            className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}
          >
            Assignment 3
          </Link>
          <Link
            to="/Labs/a4"
            className={`nav-link ${pathname.includes("a4") ? "active" : ""}`}
          >
            Assignment 4
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="a4" />} />
          <Route path="a3/*" element={<Assignment3 />} />
          <Route path="a4/*" element={<Assignment4 />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default Labs;
