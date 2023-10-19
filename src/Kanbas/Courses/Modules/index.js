import ModuleList from "./ModuleList";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

function Modules() {
  return (
    <div className="wd-course-content">
      <div className="row-1">
        <h2>Modules</h2>
      </div>
      <div className="row-1">
        <Link
          key={"plus"}
          to={`#`}
          className="btn btn-outline-secondary button"
        >
          {<BsThreeDotsVertical className="wd-icon" />}
        </Link>
        
        <Link
          key={"module"}
          to={`#`}
          className="btn btn-danger button"
        >
          {"Module"}
        </Link>
        
        <Link
          key={"publishAll"}
          to={`#`}
          className="btn btn-outline-secondary button"
        >
          {"Publish all"}
        </Link>

        <Link
          key={"viewProgress"}
          to={`#`}
          className="btn btn-outline-secondary button"
        >
          {"View Progress"}
        </Link>

        <Link
          key={"collpaseAll"}
          to={`#`}
          className="btn btn-outline-secondary button"
        >
          {"Collapse All"}
        </Link>

      </div>
      <div className="wd-module-content">
        <hr/>
        <ModuleList />
      </div>
      </div>
  );
}
export default Modules;