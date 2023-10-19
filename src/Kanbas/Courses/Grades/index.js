import db from "../../Database";
import { Link, useParams } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import { BiImport } from "react-icons/bi";
import { BiExport } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FiFilter } from "react-icons/fi";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className= "wd-course-content">
      <div className="row-1">
        <div className="wd-grade-dropdown">
          <div className="btn-group">
            <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown">
              <a class="red">Gradebook</a>
            </button>
          </div>
        </div>
        <Link
          key={"plus"}
          to={`#`}
          className="btn btn-outline-secondary button"
        >
          {<AiFillSetting className="wd-icon" />}
        </Link>
        
        <Link
          key={"module"}
          to={`#`}
          className="btn btn-outline-secondary button"
        >
          {<BiExport className="wd-icon me-2" />}{"Export"}
        </Link>
        
        <Link
          key={"publishAll"}
          to={`#`}
          className="btn btn-outline-secondary button"
        >
          {<BiImport className="wd-icon me-2" />}{"Import"}
        </Link>
      </div>
      <div className="row-1">
        <div className="row">
          <div className="col wd-grade-col">
            <b>Student Names</b>
            <br></br>
              <div className="wd-grade-dropdown">
                <div className="btn-group grades_search_dropdown">
                  <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown">
                  {<HiMagnifyingGlass className="wd-icon me-2" />} Search Students
                  </button>
                </div>
              </div>
          </div>
          <div className="col wd-grade-col">
          <b>Assignment Names</b>
          <br></br>
              <div className="wd-grade-dropdown grades_search_dropdown">
                <div className="btn-group grades_search_dropdown">
                  <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown">
                  {<HiMagnifyingGlass className="wd-icon me-2" />} Search Assignments
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="row-1 wd-grade-col">
        {<FiFilter className="wd-icon me-2" />}{"Apply Filters"}
      </div>
      <div className="row">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <th>Student Name</th>
              {assignments.map((assignment) => (<th>{assignment.title}</th>))}
            </thead>
            <tbody>
              {enrollments.map((enrollment) => {
                const user = db.users.find((user) => user._id === enrollment.user);
                return (
                  <tr>
                      <td><a className="red">{user.firstName} {user.lastName} </a></td>
                    {assignments.map((assignment) => {
                      const grade = db.grades.find(
                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                        return (<td>{grade?.grade || ""}</td>);})}
                  </tr>);
              })}
            </tbody></table>
        </div>
      </div>


</div>);
}
export default Grades;