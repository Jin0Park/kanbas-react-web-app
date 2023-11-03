import db from "../Database";
import { React, useState } from "react";
import { Link } from "react-router-dom";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) {
  //[courses, setCourses] = useState(db.courses);
  // [course, setCourse] = useState({
  //   name: "New Course",      number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // });
  // updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  // addNewCourse = () => {
  //   setCourses([...courses,
  //             { ...course,
  //               _id: new Date().getTime() }]);
  // };
  // deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  // const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input value={course.name} className="form-control"
      onChange={(e) => setCourse({ ...course, name: e.target.value }) } />

      <input value={course.number} className="form-control"
      onChange={(e) => setCourse({ ...course, number: e.target.value }) } />

      <input value={course.startDate} className="form-control" type="date"
      onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>

      <input value={course.endDate} className="form-control" type="date"
      onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

      <button className="btn btn-success me-2 mt-2" onClick={addNewCourse} >
        Add
      </button>
      <button className="btn btn-primary mt-2" onClick={updateCourse} >
        Update
      </button>

      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          {courses.map((course, index) => (
            <div class="card h-20 dashboard_card">
              <img src="images/desert.jpeg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{course.name}</h5>

                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  // className="btn btn-primary"
                >
                <button className="btn btn-warning me-2" onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}>
                Edit
                </button>
                <button className="btn btn-danger me-2" onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}>
                Delete
                </button>
                <button className="btn btn-primary">
                {course.name}

                </button>
                </Link>
                <p class="card-text">
                  {course.number + " " + course._id + " " + course.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
