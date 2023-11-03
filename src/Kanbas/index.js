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
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>

    <><div className="d-flex_1" class="row-1">
      <Nav />
    </div><div className="d-flex">
        <KanbasNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={
            <Dashboard 
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}
            />} />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
        </Routes>
      </div></>
      </Provider>
  );
}
export default Kanbas;