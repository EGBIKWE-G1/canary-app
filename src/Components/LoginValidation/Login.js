import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";
import validation from "./validation";

export const Login = () => {
  const { handleFormSubmit, handleChange, errors, values } = useLogin(
    validation
  );
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="container-login">
      <div className="header">
        <h3>Login</h3>
      </div>
      <form
        action="backend.php"
        className="main-form"
        onSubmit={handleFormSubmit}
      >
        <div className="form">
          <label htmlFor="email" className="label-text">
            Email
          </label>
          <input
            type="email"
            placeholder="mail@mail.com"
            value={values.email}
            name="email"
            onChange={handleChange}
            className={errors.email === undefined ? "" : "danger"}
          />
          {errors.email && <p className="errors"> {errors.email}</p>}
        </div>
        <div className="form">
          <label htmlFor="password" className="label-text">
            Password
          </label>
          {passwordShown ? (
            <i
              onClick={togglePasswordVisiblity}
              className="fas fa-eye label-text show-password"
            ></i>
          ) : (
            <i
              className="far fa-eye-slash label-text show-password"
              onClick={togglePasswordVisiblity}
            ></i>
          )}
          <input
            className={errors.password1 === undefined ? "" : "danger"}
            type={passwordShown ? "text" : "password"}
            placeholder="Enter your password"
            value={values.password1}
            name="password1"
            onChange={handleChange}
          />
          {errors.password1 && <p className="errors"> {errors.password1}</p>}
        </div>

        <button className="login-btn">Login</button>
        <div className="forget-password-container">
          <a href="/forget-password">Forget password ?</a>
        </div>
        <div className="not_account_yet_container">
          <p>
            {" "}
            Don't have an account?{" "}
            <Link to="/register">
              <span>Register here</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
