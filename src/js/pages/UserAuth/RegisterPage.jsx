import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

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

  const handleButton = () => {
    setIsButtonEnabled(!isButtonEnabled);
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
      <div onSubmit={handleSubmit}>
        <h2>Create your account</h2>
        <p>Made with love for designers & developers.</p>
        <form>
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
              placeholder="Must contain at least 6 characters"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          {isPasswordEmpty && (
            <p className="input-error">Password is required</p>
          )}
          <div className="input-terms">
            <input type="checkbox" onClick={handleButton} />
            <span>I agree to the Terms & Conditions</span>
          </div>
          <input
            type="submit"
            value="Create my account"
            disabled={!isButtonEnabled}
          />
        </form>
        <p className="register-login">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Sign In</span>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;
