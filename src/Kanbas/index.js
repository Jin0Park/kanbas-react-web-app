// import Nav from "../Nav";
// function Kanbas() {
//  return (
//    <div>
//      <Nav/>
//      <h1>Kanbas</h1>
//    </div>
//  )
// }
// export default Kanbas

import Nav from "../Nav";
import {Link} from "react-router-dom";
import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import CourseNavigation from "./Courses/CourseNavigation";

function Kanbas() {
  return (
    <><div className="d-flex_1" class="row-1">
      <Nav />
    </div><div className="d-flex">
        <KanbasNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
        </Routes>
      </div></>
      
  );
}
export default Kanbas;