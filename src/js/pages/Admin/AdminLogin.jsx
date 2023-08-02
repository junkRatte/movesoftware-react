import { useState } from "react";
import LoginApi from "../../api/AuthApi";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let res = await LoginApi(credentials.email, credentials.password);
      localStorage.setItem("userEmail", res.user.email);
      navigate("/admin-dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="admin__login form">
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <div className="input-container">
          <input
            className="input-field"
            type="email"
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            value={credentials.email}
          />
        </div>
        <label>Password</label>
        <div className="input-container">
          <input
            className="input-field"
            type="password"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            value={credentials.password}
          />
        </div>
        <input type="submit" value="Sign In" />
      </form>
    </section>
  );
}

export default AdminLogin;
