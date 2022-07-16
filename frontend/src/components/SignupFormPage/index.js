import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = []
    if (!email)
      validationErrors.push("Please enter your email")
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) ) 
      validationErrors.push("Please enter a valid email address")
    if (!username)
      validationErrors.push("Please enter your username")
      if (!password)
      validationErrors.push("Please enter your password")
      if (!confirmPassword)
      validationErrors.push("Please enter your password again")
      if(password !== confirmPassword)
      validationErrors.push("Passwords field must match confirm password field")
      if (validationErrors.length > 0) {
        setErrors(validationErrors)
        return
      };
      if (password === confirmPassword) {
        const data = await dispatch(sessionActions.signup(email, username, password, confirmPassword));
        if (data) {
          setErrors(data)
        }
      }
    };   

  return (
      <div className="signups">
        <div className="containers">
          <div className="container_signups">
            <p>eventfind</p>
            <h1>Create an Account</h1>
          </div>
    <form onSubmit={handleSubmit}>
      <ul className="form_lists">
        {errors.map((error, idx) => <li key={idx} className="signup-errors">{error}</li>)}
      </ul>
      <label>
        Email
        <div className="form_details">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}          
        />
        </div>
      </label>
      <label>
        Username
        <div className="form_details">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}          
        />
        </div>
      </label>
      <label>
        Password
        <div className="form_details">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}          
        />
        </div>
      </label>
      <label>
        Confirm Password
        <div className="form_details">
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}          
        />
        </div>
      </label>
      <button type="submit" className="signup_buttons">Sign Up</button>
    </form>
    </div>
    </div>
  );
}

export default SignupFormPage;