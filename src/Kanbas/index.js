import Nav from "../Nav";
import {Link} from "react-router-dom";
import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import CourseNavigation from "./Courses/CourseNavigation";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

const baseURL = "https://kanbas-node-server-app-jfzp.onrender.com"

function Kanbas() {
  const [courses, setCourses] = useState([]);
    const URL = baseURL + "/api/courses";

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses, { ...course, _id: new Date().getTime().toString() }
    ]);
    setCourse({ name: "" });
  };


  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const deleteCourse = async (courseId) => {
    console.log (courseId)
    const response = await axios.delete(
        `${URL}/${courseId}`
    );
    setCourses(courses.filter((c) => c._id !== courseId));
};

  // const deleteCourse = async (course) => {
  //   const response = await axios.delete(
  //     `${URL}/${course._id}`
  //   );
  //   setCourses(courses.filter(
  //     (c) => c._id !== course._id));
  // };


  const updateCourse = async() => {
    //console.log(courseId)

    const response = await axios.put(
        `${URL}/${course._id}`,
        course
    );
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

  // const updateCourse = async (courseId) => {
  //   const response = await axios.put(
  //     `${URL}/${courseId}`,
  //     course
  //   );
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === courseId) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  //   setCourse({ name: ""})
  // };

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