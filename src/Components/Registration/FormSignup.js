import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import validation from "../Registration/ValidateInfo";
import useForm from "./useForm";

import "./Form.css";

const FormSignup = () => {
  const { handleSubmit, handleChange, errors, values } = useForm(validation);
  // const { handleChange, handleSubmit, values, errors } = useForm(
  //   submitForm,
  //   validation
  // );

  return (
    <div>
      <div>
        <div className="canary-head">
          <div>
            <div className="align-head">
              <div className="company-logo">
                <img
                  className="logo"
                  height="50px"
                  width="130px"
                  src={logo}
                  alt="logo"
                />
              </div>
              <div className="form-content-right">
                <form onSubmit={handleSubmit} className="forms" noValidate>
                  <div className="">
                    <h1 className="register"> Register </h1>
                    <p>Get your account set up in a few minutes </p>
                    <br />
                    <div className="form-inputs">
                      <label className="title">First Name</label>
                      <input
                        className="form-input"
                        type="text"
                        // name="Organization Name"
                        name="firstName"
                        placeholder="First Name"
                        value={values.organizationname}
                        onChange={handleChange}
                        className={
                          errors.firstName === undefined ? "" : "danger"
                        }
                      />
                      {errors.firstName && (
                        <p className="errors"> {errors.firstName}</p>
                      )}
                    </div>
                    <div className="form-inputs">
                      <label className="title">Last Name</label>
                      <input
                        className="form-input"
                        type="text"
                        // name="username"
                        name="lastName"
                        placeholder="Last Name"
                        value={values.username}
                        onChange={handleChange}
                        className={
                          errors.lastName === undefined ? "" : "danger"
                        }
                      />
                      {errors.lastName && (
                        <p className="errors"> {errors.lastName}</p>
                      )}
                    </div>
                    <div className="form-inputs">
                      <label className="title">Email</label>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="mail@email.com"
                        value={values.email}
                        onChange={handleChange}
                        className={errors.email === undefined ? "" : "danger"}
                      />
                      {errors.email && (
                        <p className="errors"> {errors.email}</p>
                      )}
                    </div>

                    <div className="form-inputs">
                      <label className="title">Phone Number</label>
                      <input
                        className="form-input"
                        type="tel"
                        // name="contact"
                        name="phoneNumber"
                        placeholder="070*****"
                        value={values.contact}
                        onChange={handleChange}
                        className={
                          errors.phoneNumber === undefined ? "" : "danger"
                        }
                      />
                      {errors.phoneNumber && (
                        <p className="errors"> {errors.phoneNumber}</p>
                      )}
                    </div>
                    <div className="form-inputs">
                      <label className="title">Password</label>
                      <input
                        className="form-input"
                        type="password"
                        // name="password"
                        name="password1"
                        placeholder="********"
                        value={values.password}
                        onChange={handleChange}
                        className={
                          errors.password1 === undefined ? "" : "danger"
                        }
                      />
                      {errors.password1 && (
                        <p className="errors"> {errors.password1}</p>
                      )}
                    </div>
                    <div className="form-inputs">
                      <label className="title">Re-type Password</label>
                      <input
                        className="form-input"
                        type="password"
                        // name="password2"
                        name="confirmPassword"
                        placeholder="********"
                        value={values.password2}
                        onChange={handleChange}
                        className={
                          errors.confirmPassword === undefined ? "" : "danger"
                        }
                      />
                      {errors.confirmPassword && (
                        <p className="errors"> {errors.confirmPassword}</p>
                      )}
                    </div>

                    <div className="content">
                      <div className="checkbox">
                        <input type="checkbox" id="remember-me" />
                      </div>
                      <div className="signup-link">
                        I agree to the <a href="#">Terms and conditions</a>
                      </div>
                    </div>

                    <Link to="/login">
                      <button className="form-input-btn" type="submit">
                        Register
                      </button>
                    </Link>
                    <div className="content">
                      <div className="checkbox">
                        <label className="remember-me" htmlfor="remember-me">
                          Already have an account?
                        </label>
                      </div>
                      <Link to="/login">
                        <div className="pass-link">
                          <a className="conditions" href="#">
                            Login
                          </a>
                        </div>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="footer-registration"></div>
      </div>
    </div>
  );
};

export default FormSignup;
