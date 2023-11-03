import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setAssignment } from "./assignmentReducer";
import PointVariable from "./PointVariable";
import DateStateVariable from "./DateStateVairable";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);
  const dispatch = useDispatch();

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("In later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    
    <div className= "wd-course-content">
        <Link
          key={"plus"}
          to={`#`}
          className="btn btn-outline-secondary button"
        >
        {<BsThreeDotsVertical className="wd-icon" />}

        </Link>
        <div className="green home_icon me-4">
          {<BsFillCheckCircleFill className="wd-icon me-2" />}{"Published"}
        </div>
        
      <h2>Assignment Name</h2>
      <input value={assignment}
             className="form-control mb-2" />

      <textarea className="new_assignment_textbox w-50 p-3"
            value={assignment}
            onChange={(e) =>
            dispatch(setAssignment({ ...assignment }))
            }/>
      <div>
      <a>Point</a>
      <PointVariable></PointVariable>
      </div>

      <div>
      <a>Assign</a>
      <div class="card w-50 p-5">
      <div class="card-body">
        <div class="row-6">
          <b>Due</b>
          <DateStateVariable></DateStateVariable>
        </div>
        <div class="row mt-5">
          <div class="col-6">
            <b>Available From</b>
            <DateStateVariable></DateStateVariable>
          </div>
          <div class="col">
            <b>Until</b>
            <DateStateVariable></DateStateVariable>
          </div>
        </div>

      </div>
      </div>
      </div>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-outline-secondary home_icon me-4">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-danger home_icon">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;