import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import "./LoginForm.css"
import { Redirect } from 'react-router-dom'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser) 
  return (
    <Redirect to="/" />
  )
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };
  const demologin =  () => (
    <button className="demo"
      onClick ={(e) => {
        setCredential("demo@user.io");
        setPassword("password");
      }}
      >
      Demo User Login
    </button>
  )

  return (
    <div className="login">
    <div className="left_page">
    <div className="logo">
      <p className="eventfind_logo">eventfind</p>
      <h1>Log in form</h1>
      </div>
    <form onSubmit={handleSubmit}>
      <ul className="input_list">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Email Address
        <div className="form_detail">
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
          </div>
      </label>
      <label>
        Password
        <div className="form_detail">        
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
      </label>
      <button type="submit" className="login-button">Log In</button>
      {demologin()}
    </form>
      </div>
      </div>      
  );
}

export default LoginForm;