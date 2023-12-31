import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
    console.log(credentials);
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <div className="input-container">
        <input
            value={credentials.username}
            onChange={(e) => setCredentials({
            ...credentials,
            username: e.target.value })} />
        <input
            value={credentials.password}
            onChange={(e) => setCredentials({
            ...credentials,
            password: e.target.value })} />
        <button className="btn btn-primary ms-2" onClick={signup}>
            Signup
        </button>
        </div>
      </div>

  );
}
export default Signup;