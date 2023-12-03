import axios from "axios";
// const request = axios.create({
//   withCredentials: true,
// });

// export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const BASE_API = "https://kanbas-node-server-app-jfzp.onrender.com";
console.log(BASE_API);
export const USERS_API = `${BASE_API}/api/users`;
export const signin = async (credentials) => {
  //console.log(request);
  axios.defaults.withCredentials = true
  const response = await axios.post( `${USERS_API}/signin`, credentials );
  return response.data;
};
export const account = async () => {
    axios.defaults.withCredentials = true
    console.log("in account");
    const response = await axios.post(`${USERS_API}/account`);
    console.log(response);
    return response.data;
};
export const updateUser = async (user) => {
  axios.defaults.withCredentials = true
  const response = await axios.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};
export const findAllUsers = async () => {
  axios.defaults.withCredentials = true
  const response = await axios.get(`${USERS_API}`);
  return response.data;
};
export const createUser = async (user) => {
  axios.defaults.withCredentials = true
  const response = await axios.post(`${USERS_API}`, user);
  return response.data;
};
export const findUserById = async (id) => {
  axios.defaults.withCredentials = true
  const response = await axios.get(`${USERS_API}/${id}`);
  console.log(response);
  return response.data;
};
export const deleteUser = async (user) => {
  axios.defaults.withCredentials = true
  const response = await axios.delete(
    `${USERS_API}/${user._id}`);
  return response.data;
};
export const signup = async (credentials) => {
  axios.defaults.withCredentials = true
  const response = await axios.post(
    `${USERS_API}/signup`, credentials);
  return response.data;
};
export const signout = async () => {
  axios.defaults.withCredentials = true
  const response = await axios.post(`${USERS_API}/signout`);
  return response.data;
};
