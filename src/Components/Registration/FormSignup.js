import React from "react";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import validate from "../Registration/ValidateInfo";
import useForm from "./useForm";

import "./Form.css";
  

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );    

  return (  
    <div>
    <div>
    <div className="canary-head">
    <div>   
    <div className="align-head">
    <div className="company-logo">
     <img className="logo" height="50px" width="130px" src={logo} alt="logo" />
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
            name="Organization Name"
            placeholder="First Name"
            value={values.organizationname}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label className="title">Last Name</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Last Name"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
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
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
       
        <div className="form-inputs">
          <label className="title">Phone Number</label>
          <input
            className="form-input"
            type="tel"
            name="contact"
            placeholder="070*****"
            value={values.contact}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label className="title">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="********"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="title">Re-type Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="********"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <div className="content">
        <div className="checkbox">
          <input type="checkbox" id="remember-me" />
        </div>
        <div className="signup-link">
        I agree to the <a href="#">Terms and conditions</a></div>
        </div>


  

        <Link to="/login">
          <button className="form-input-btn" type="submit">
            Register
          </button> 
          </Link>
          <div className="content">
        <div className="checkbox">
          <label className="remember-me" htmlfor="remember-me">Already have an account?</label>
        </div>
        <Link to="/login">
        <div className="pass-link">
          <a className="conditions" href="#">Login</a></div>
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
     
    <div className="footer-registration">

    </div>
    </div>
    </div>
  );
};  

export default FormSignup;


