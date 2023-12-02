import Signin from "../project/users/signin";
import Account from "../project/users/account";
import UserTable from "../project/users/tables";
import Navigation from "../project/navigation";
import Signup from "../project/users/signup";
import { Routes, Route, Navigate } from "react-router-dom";
function Project() {
  return (
    <div className="row">
      <div className="col-2">
        <Navigation />
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/Project/home" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/signup" element={<Signup />} />
          
        </Routes>
      </div>
    </div>
  );
}
export default Project;