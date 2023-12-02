import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, clearError } from "../../redux/user/userActions";
import { FiMail, FiLock, FiAlertCircle } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/Loader";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const emailRef = useRef(null);
  const user = useSelector((state) => state.user.user);
  const error = useSelector((state) => state.user.error);
  const loading = useSelector((state) => state.user.loading);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });


  useEffect(() => {
    emailRef.current.focus();
    if (user) {
      setAuth(user);
      navigate("/home/devices");
    }
  }, [user]);

  useEffect(() => {
    dispatch(clearError());
  }, [credentials.email, credentials.password]);

  const handleCredentials = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const submitLoginForm = (e) => {
    e.preventDefault();
    setCredentials({ email: "", password: "" });
    dispatch(login(credentials));
  };

  return (
    <div className="auth-container">
      <div className="auth">
        <div className="title">
          <h1>
            EMR<span>.</span>
          </h1>
          <p>Endpoint Management & Response</p>
        </div>
        <div className="wrapper">
          <h1>Login</h1>
          <div className="error">
            {error && (
              <div className="animate">
                <FiAlertCircle className="icon" />
                {error}
              </div>
            )}
          </div>
          <form onSubmit={submitLoginForm}>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                ref={emailRef}
                value={credentials?.email}
                onChange={handleCredentials}
              />
              <FiMail className="icon" />
            </div>
            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={credentials?.password}
                onChange={handleCredentials}
              />
              <FiLock className="icon" />
            </div>
            <div className="info">
              <div className="remember">
                <input type="checkbox" className="remember-input" />
                <div>Remember me</div>
              </div>
              <a href="">Forgot Password?</a>
            </div>
            {loading ? (
              <div className="loader">
                <Loader />
              </div>
            ) : (
              <button className="text-3xl">Login</button>
            )}

            <a href="/signup">Don't have an account? Signup!</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
