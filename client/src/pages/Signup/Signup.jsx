import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSignupError, signUp } from "../../redux/signup/signupActions";
import { FiMail, FiLock, FiAlertCircle, FiUser } from "react-icons/fi";

function Signup() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.signup.error);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch(clearSignupError());
  }, [userDetails.email, userDetails.password, userDetails.name]);

  const handleUserDetails = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(userDetails));
    setUserDetails({ name: "", email: "", password: "" });
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
          <h1>Signup</h1>
          <div className="error">
            {error && (
              <div className="animate">
                <FiAlertCircle className="icon" />
                {error}
              </div>
            )}
          </div>
          <form onSubmit={handleSignupSubmit}>
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="input"
                value={userDetails.name}
                onChange={handleUserDetails}
              />
              <FiUser className="icon" />
            </div>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="input"
                value={userDetails.email}
                onChange={handleUserDetails}
              />
              <FiMail className="icon" />
            </div>
            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="input"
                value={userDetails.password}
                onChange={handleUserDetails}
              />
              <FiLock className="icon" />
            </div>
            <button className="button">Signup</button>
            <a className="info-login" href="/login">Login</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
