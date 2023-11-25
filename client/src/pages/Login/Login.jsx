import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, clearError } from "../../redux/user/userActions";

function Login() {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const error = useSelector((state) => state.user.error);
  const loading = useSelector((state) => state.user.loading);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    emailRef.current.focus();
  }, []);

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
    <div className="auth">
      <div className="wrapper">
        <h1>Login</h1>
        <form onSubmit={submitLoginForm}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            ref={emailRef}
            value={credentials?.email}
            onChange={handleCredentials}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={credentials?.password}
            onChange={handleCredentials}
          />
          <div className="info">
            <div className="remember">
              <input type="checkbox" className="remember-input" />
              <div>Remember me</div>
            </div>
            <a href="">Forgot Password?</a>
          </div>
          <button className="text-3xl">Login</button>
          <div className="no-account">Don't have an account? Register!</div>
          {loading && <div className="loading">Loading...</div>}
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default Login;
