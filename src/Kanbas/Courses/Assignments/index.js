import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import assignmentReducer from "./assignmentReducer";
import { addAssignment, deleteAssignment, updateAssignment, setAssignment  } from "./assignmentReducer";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="wd-course-content">
      <h2>Assignments for course {courseId}</h2>
      <input class="form-control mt-2 mb-2 wd-assignment-textbox" type="text" placeholder="Search for Assignment"></input>

      <Link
          key={"plus"}
          to={`#`}
          className="btn btn-outline-secondary button"
        >
          {<BsThreeDotsVertical className="wd-icon" />}
        </Link>
        
        <Link
          key={"newAssignment"}
          to={`/Kanbas/Courses/${courseId}/Assignments/${courseAssignments.title}`}
          className="btn btn-danger button"
        >
          {<AiOutlinePlus className="wd-icon me-2" />}{"Assignment"}
        </Link>
        
        <Link
          key={"newGroup"}
          to={`#`}
          className="btn btn-outline-secondary button"
        >
          {<AiOutlinePlus className="wd-icon me-2" />}{"Group"}
        </Link>

      <div className="list-group wd-assignment-content">
      <li class="list-group-item list-group-item-action list-group-item-light">
        {<PiDotsSixVerticalBold className="wd-icon" />} <b>ASSIGNMENTS</b>
        <div className="home_icon">
          <span class="badge bg-secondary rounded-pill me-3 assignment-header-badge">40% of Total</span>
          {<AiOutlinePlus className="wd-icon me-3" />}
          {<BsThreeDotsVertical className="wd-icon" />}
        </div>
        </li>
        {courseAssignments.map((assignment) => (
        <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item assignment-border">
              <div className="row wd-assignment-subcontent">
                <div className="col-1">
                  {<PiDotsSixVerticalBold className="wd-icon me-2" />}{<TfiWrite className="wd-icon home_check_icon" />}
                </div>
                <div className="col-10">
                  {assignment.title}
                  <br></br>
                  <div className="wd-assignment-subcontent-subtitle">
                    <a className="red">Multiple Modules</a><a> | Due Dec 12 at 11:59pm | 100pts</a>
                  </div>
                </div>
                <div className="col-1">
                  <div className="home_icon">
                  <button onClick={deleteAssignment} className="btn btn-danger">
                    Delete
                  </button>
                    {<BsFillCheckCircleFill className="wd-icon home_check_icon me-3" />}
                    {<BsThreeDotsVertical className="wd-icon" />}
                  </div>
                </div>
              </div>
          </Link>

        // <li> 
        //     {<PiDotsSixVerticalBold className="wd-icon" />} Week 0 - INTRO
        //     <div className="home_icon">
        //       {<BsFillCheckCircleFill className="wd-icon home_check_icon" />}&nbsp;&nbsp;
        //       {<AiOutlinePlus className="wd-icon" />}&nbsp;&nbsp;
        //       {<BsThreeDotsVertical className="wd-icon" />}
        //    </div>
        //   </li>
          
         
        ))}
      </div>
    </div>
  );
}
export default Assignments;