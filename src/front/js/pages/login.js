import "./sign_up.css";
import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";
import axios from "axios";
import { BackendURL } from "../component/backendURL";
const API_URL = process.env.BACKEND_URL;


const Login = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});


  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://cuddly-disco-jpg4457g7x92pjq4-3001.app.github.dev/api/login`, formData);
      sessionStorage.setItem('token', response.data.token);
      navigate("/")

    } catch (error) {
      console.error('There was an error!', error);
    }
  };


  return (
    <>
      <form
        onSubmit={(e) => {
          console.log("Save button clicked");
          handleCreate(e);
        }}
      >
        <div className="form-sign-up">
          <div className="container d-flex justify-content-center">
            <h1 className="display-4">Login</h1>
          </div>
          <div className="email-password container-fluid p-1">
            <div>
              <label htmlFor="formEmail" className="form-label">
                {" "}
                Email{" "}
              </label>
              <input
                className="form-control full-input m-1"
                type="email"
                id="formEmail"
                placeholder="JaneDoe@gmail.com"
                value={formData.email}
                onChange={(e) => {
                  console.log("Email changed:", e.target.value);
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="formPassword" className="form-label">
                {" "}
                Password{" "}
              </label>

              <input
                className="form-control me-1 full-input m-1"
                type="password"
                id="formPassword"
                placeholder="**********"
                value={formData.password}
                onChange={(e) => {
                  console.log("Password:", e.target.value);
                  setFormData({ ...formData, password: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="container-fluid d-flex justify-content-center p-1">
            <button className="signUp-btn btn submit" type="submit">
              {" "}
              Login{" "}
            </button>
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-center container-fluid">
        <NavLink to="/signUp">
          Don't have an account? SignUp in here!
        </NavLink>
      </div>
    </>
  );
};

export default Login;
