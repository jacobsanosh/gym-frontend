import React, { useState } from "react";
import "./Login.css";

import { useNavigate } from "react-router-dom";
import MainLayout from "../../components/MainLayout/MainLayout";
import { login } from "../../api";
function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState(localStorage.getItem("email") ?? "");
  const [password, setPassword] = useState(
    localStorage.getItem("password") ?? ""
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function attemptLogin() {
    try {
      setError("");
      setLoading(true);
      const response = await login(username, password, "user");
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 404) {
        setError("User Does not exist");
      } else if (error.response.status === 401) {
        setError("Incorrect Password");
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <MainLayout>
      <div className="Login__main_container">
        <div className="lgn__container">
          <div className="lgn__left"></div>
          <div className="lgn__right">
            <div className="lgn__input">
              <div className="lgn__inputBox">
                <h1>Login</h1>
              </div>
              <div className="lgn__inputBox">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="enter user name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="lgn__inputBox">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="lgn__inputBox">
                <div className="error">{error}</div>
                <input
                  type="submit"
                  value={loading ? "Loading..." : "Login"}
                  disabled={loading}
                  onClick={() => {
                    attemptLogin();
                  }}
                />
              </div>
              <p className="lgn__forget">
                Forgot Password? <a href="/">Click Here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Login;
