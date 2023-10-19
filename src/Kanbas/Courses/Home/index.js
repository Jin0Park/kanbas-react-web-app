import ModuleList from "../Modules/ModuleList";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Home() {
  return (
    <div className="row wd-course-content">
        <div className="col-9">
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
          {<AiOutlinePlus className="wd-icon me-2" />}{"Module"}
        </Link>
        
        <Link
          key={"publishAll"}
          to={`#`}
          className="btn btn-outline-secondary button"
        >
          {<AiOutlineCheckCircle className="wd-icon home_check_icon me-2" />}{"Publish all"}
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
        <div className="wd-module-content">
          <hr/>
        </div>


        <div>
          <ul class="list-group">
              <li class="list-group-item list-group-item-action list-group-item-secondary">
              {<PiDotsSixVerticalBold className="wd-icon" />} Week 0 - INTRO
              <div className="home_icon">
                {<BsFillCheckCircleFill className="wd-icon home_check_icon me-3" />}
                {<AiOutlinePlus className="wd-icon me-3" />}
                {<BsThreeDotsVertical className="wd-icon" />}
              </div>
              </li>
              <li class="list-group-item list-group-item-action">
              {<PiDotsSixVerticalBold className="wd-icon" />} LEARNING OBJECTIVES
              <div className="home_icon">
                {<BsFillCheckCircleFill className="wd-icon home_check_icon me-3" />}
                {<AiOutlinePlus className="wd-icon me-3" />}
                {<BsThreeDotsVertical className="wd-icon" />}
              </div>
              </li>
              <div>
                  <li class="list-group-item list-group-item-action">
                    <a className="home_subcontent"></a>
                    {<PiDotsSixVerticalBold className="wd-icon" />} <a className="black">Introduction to the course</a>
                    <div className="home_icon">
                      {<BsFillCheckCircleFill className="wd-icon home_check_icon me-3" />}
                      {<AiOutlinePlus className="wd-icon me-3" />}
                      {<BsThreeDotsVertical className="wd-icon" />}
                    </div>
                  </li>
                  <li class="list-group-item list-group-item-action">
                  <a className="home_subcontent"></a>
                  {<PiDotsSixVerticalBold className="wd-icon" />} <a className="black">Learn what is Web Development</a>
                  <div className="home_icon">
                      {<BsFillCheckCircleFill className="wd-icon home_check_icon me-3" />}
                      {<AiOutlinePlus className="wd-icon me-3" />}
                      {<BsThreeDotsVertical className="wd-icon" />}
                  </div>
                  </li>
                  <li class="list-group-item list-group-item-action">
                  <a className="home_subcontent"></a>
                  {<PiDotsSixVerticalBold className="wd-icon" />} <a className="black">Creating a development environment</a>
                  <div className="home_icon">
                      {<BsFillCheckCircleFill className="wd-icon home_check_icon me-3" />}
                      {<AiOutlinePlus className="wd-icon me-3" />}
                      {<BsThreeDotsVertical className="wd-icon" />}
                  </div>
                  </li>
                  <li class="list-group-item list-group-item-action">
                  <a className="home_subcontent"></a>
                  {<PiDotsSixVerticalBold className="wd-icon" />} <a className="black">Creating a Web Application</a>
                  <div className="home_icon">
                      {<BsFillCheckCircleFill className="wd-icon home_check_icon me-3" />}
                      {<AiOutlinePlus className="wd-icon me-3" />}
                      {<BsThreeDotsVertical className="wd-icon" />}
                  </div>
                  </li>
                  <li class="list-group-item list-group-item-action">
                  <a className="home_subcontent"></a>
                  {<PiDotsSixVerticalBold className="wd-icon" />} <a className="black">Getting started with the 1st assignment</a>'
                  <div className="home_icon">
                      {<BsFillCheckCircleFill className="wd-icon home_check_icon me-3" />}
                      {<AiOutlinePlus className="wd-icon me-3" />}
                      {<BsThreeDotsVertical className="wd-icon" />}
                  </div>
                  </li>
                  <li class="list-group-item list-group-item-action">
                  <a className="home_subcontent"></a>
                      {<PiDotsSixVerticalBold className="wd-icon" />} <a className="black">Introduction to the course</a>
                      <div className="home_icon">
                      {<BsFillCheckCircleFill className="wd-icon home_check_icon me-3" />}
                      {<AiOutlinePlus className="wd-icon me-3" />}
                      {<BsThreeDotsVertical className="wd-icon" />}
                    </div>
                  </li>
              </div>
            </ul>
            </div>





        </div>
        <div className="col-3">
          <Link
          key={"import"}
          to={`#`}
          className="btn btn-outline-secondary flex-wrap-button"
        >
          {"Import Existing Content"}
        </Link>
        <br></br>

        <Link
          key={"importCommons"}
          to={`#`}
          className="btn btn-outline-secondary flex-wrap-button"
        >
          {"Import from Commons"}
        </Link>
        <Link
          key={"Choose"}
          to={`#`}
          className="btn btn-outline-secondary flex-wrap-button"
        >
          {"Choose Home Page"}
        </Link>
        <Link
          key={"view"}
          to={`#`}
          className="btn btn-outline-secondary flex-wrap-button"
        >
          {"View Course Stream"}
        </Link>
        <Link
          key={"announcement"}
          to={`#`}
          className="btn btn-outline-secondary flex-wrap-button"
        >
          {"New Announcement"}
        </Link>
        <Link
          key={"analytics"}
          to={`#`}
          className="btn btn-outline-secondary flex-wrap-button"
        >
          {"New Analytics"}
        </Link>
        <Link
          key={"notifications"}
          to={`#`}
          className="btn btn-outline-secondary flex-wrap-button"
        >
          {"New Course Notifications"}
        </Link>
        <br></br>
        <br></br>
        <h4>To Do</h4>
        <hr/>
        <div>
          <div class="mt-1">
              <b className="home_todo_heading" href="#">Lecture</b>
              <div>
                  <a>CS4550.12631.202410</a>
                  <a>7 at 11:45am</a>  
              </div>
              <br></br>

              <b className="home_todo_heading" href="#">Lecture</b>
              <div>
                  <a>CS4550.12631.202410</a>
                  <a>Sep 11 at 11:45am</a>
              </div>
              <br></br>

              <b className="home_todo_heading" href="#">CS5610 06 SP23 Lecture</b>
              <div>
                  <a>Sep 11 at 6pm</a>
              </div>
          </div>
        

        </div>
      </div>
      </div>
  );
}
export default Home;