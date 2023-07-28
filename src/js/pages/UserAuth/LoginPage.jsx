import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailEmpty(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setIsEmailEmpty(true);
    }

    if (password.trim() === "") {
      setIsPasswordEmpty(true);
    }
  };

  return (
    <section className="form">
      <div>
        <h2>Sign In to Move</h2>
        <p>Login to manage your account.</p>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <div className="input-container">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              className="input-field"
              type="email"
              placeholder="john.smith@email.com"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          {isEmailEmpty && <p className="input-error">Email is required</p>}
          <label>
            Password <span onClick={togglePassword}>Show password</span>
          </label>
          <div className="input-container">
            <FontAwesomeIcon icon={faLock} />
            <input
              className="input-field"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          {isPasswordEmpty && (
            <p className="input-error">Password is required</p>
          )}
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
