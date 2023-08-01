import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginApi from "../../api/AuthApi";

function LoginPage() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (credentials.email.trim() === "" || credentials.password.trim() === "") {
      setErrorMessage(true);
      return;
    }

    try {
      let res = await LoginApi(credentials.email, credentials.password);
      localStorage.setItem("userEmail", res.user.email);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="form">
      <div>
        <h2>Sign In to Move</h2>
        <p>Login to manage your account.</p>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <div className="input-container">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              className="input-field"
              type="email"
              placeholder="john.smith@email.com"
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              value={credentials.email}
            />
          </div>
          {errorMessage && <p className="input-error">Email is required</p>}
          <label>
            Password <span onClick={togglePassword}>Show password</span>
          </label>
          <div className="input-container">
            <FontAwesomeIcon icon={faLock} />
            <input
              className="input-field"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              value={credentials.password}
            />
          </div>
          {errorMessage && <p className="input-error">Password is required</p>}
          <input type="submit" value="Sign In" />
        </form>
        <p className="register-login">
          Do not have an account?{" "}
          <span onClick={() => navigate("/register")}>Sign Up</span>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
