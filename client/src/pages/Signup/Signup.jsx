import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/signup/signupActions";

function Signup() {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleUserDetails = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(userDetails));
  };

  return (
    <div className="auth">
      <div className="wrapper">
        {/* <div className="blur">d</div> */}
        <h1>Signup</h1>
        <form onSubmit={handleSignupSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="input"
            value={userDetails.name}
            onChange={handleUserDetails}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="input"
            value={userDetails.email}
            onChange={handleUserDetails}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="input"
            value={userDetails.password}
            onChange={handleUserDetails}
          />
          <button className="button">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
