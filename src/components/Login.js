import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE } from '../api/index';
import { storeCurrentUser } from '../auth';
import './Login.css';

export const Login = props => {
  const [usernameLogin, setUsernameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  let navigate = useNavigate();

  const loginUser = async () => {
    const data = await axios.post(`/api/users/login`, {
      username: usernameLogin,
      password: passwordLogin,
    });
    storeCurrentUser(data);
    props.setIsLoggedIn(data.data.user);
    props.setIsAdmin(data.data.user.isAdmin);
    window.location.reload(true);
    return data;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    loginUser();
    navigate('/');
  };

  return (
    <div id="login-page">
      <div id="login-form">
        <h2>Please Sign In</h2>
        <form className="input-container" onSubmit={handleSubmit}>
          <div className="form-input">
            <label>Username</label>
            <input
              className="input-bar"
              type="text"
              placeholder="Username"
              value={usernameLogin}
              onChange={event => {
                setUsernameLogin(event.target.value);
              }}
              minLength={7}
              required
            ></input>
          </div>
          <div className="form-input">
            <label>Password</label>
            <input
              className="input-bar"
              type="password"
              placeholder="Password"
              value={passwordLogin}
              onChange={event => {
                setPasswordLogin(event.target.value);
              }}
              minLength={7}
              required
            ></input>
          </div>
          <div className="button-container">
            <button id="login-button" type="submit">
              LOGIN
            </button>
          </div>
        </form>
        <br />
        <Link to="/register">
          Not a registered user? Click here to sign up!
        </Link>
      </div>
    </div>
  );
};
