import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

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
      <input value={assignment.title}
             className="form-control mb-2" />
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-outline-secondary home_icon me-4">
        Cancel
      </Link>
      {/* <Link onClick={handleSave}
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-success me-2">
        Save
      </Link> */}
      <button onClick={handleSave} className="btn btn-danger home_icon">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;