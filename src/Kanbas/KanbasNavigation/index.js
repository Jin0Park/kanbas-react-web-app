import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BiSolidInbox } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { LuMonitorPlay } from "react-icons/lu";
import { FaCreativeCommonsSa } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";

import "./index.css";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio",  "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <BiSolidInbox className="wd-icon" />,
    History: <AiOutlineClockCircle className="wd-icon" />,
    Studio: <LuMonitorPlay className="wd-icon" />,
    Commons: <FaCreativeCommonsSa className="wd-icon" />,
    Help: <AiOutlineQuestionCircle className="wd-icon" />
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 100 }}>
      <img src="images/NU.png" class="card-img-top" alt="..." />
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;