import React from "react";
import { Link } from "react-router-dom";


function Navigation() {
  // const { currentUser } = useSelector((state) => state.userReducer);
  return (
    <>
      <div className="list-group">
        <Link to="/project/" className="list-group-item">
          Home
        </Link>
        <Link to="/project/signin" className="list-group-item">
          Signin
        </Link>
        <Link to="/project/account" className="list-group-item">
          Account
        </Link>
        <Link to="/project/signup" className="list-group-item">
          Signup
        </Link>
        <Link to="/project/admin/users" className="list-group-item">
          Search
        </Link>
        {/* <Link to="/project/details" className="list-group-item">
        Details
      </Link> */}
      </div>
    </>
  );
}

export default Navigation;