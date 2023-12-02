import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Project/account");
  };
  return (
    <div>
      <h1>Signin</h1>
      <div className="input-container">
        <input value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
        <input value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
        <button className="btn btn-primary ms-2" onClick={signin}> Signin </button>

      </div>
    </div>
  );
}
export default Signin;
