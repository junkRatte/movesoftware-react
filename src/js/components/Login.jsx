import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import Loader from "./Loader";
import LoginPage from "../pages/UserAuth/LoginPage";

function Login() {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  });

  return loading ? <Loader /> : <LoginPage />;
}

export default Login;
