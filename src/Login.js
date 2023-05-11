import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handlelogin = () => {
    if (email.includes(person.email)) {
      if (password.includes(person.passowrd)) {
        console.log("login success");
        navigate("/Employee")
      } else {
        console.log("login unsuccessfull");
      }
    } else {
      console.log("login unsuccessfull");
    }
  };

  const person = {
    email: 'arpit456123@gmail.com',
    passowrd: "uk08m1020"
  }

  return (
    <>
      <NavBar />
      <div className="login-main-div">
        <section className="login-form-design">
          <h3 className="single-form">Login</h3>
          <form type="submit">
            <input
              type="email"
              required
              class="form-control single-form"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              required
              class="form-control single-form"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="button" className="btn btn-primary single-form" onClick={handlelogin}>
              Submit
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Login;
