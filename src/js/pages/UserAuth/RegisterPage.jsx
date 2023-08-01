import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterAPI } from "../../api/AuthApi";

function RegisterPage() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleButton = () => {
    setIsButtonEnabled(!isButtonEnabled);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (credentials.email.trim() === "" || credentials.password.trim() === "") {
      setErrorMessage(true);
      return;
    }

    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      localStorage.setItem("userEmail", res.user.email);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="form">
      <div onSubmit={handleRegister}>
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
              placeholder="Must contain at least 6 characters"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              value={credentials.password}
            />
          </div>
          {errorMessage && <p className="input-error">Password is required</p>}
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
