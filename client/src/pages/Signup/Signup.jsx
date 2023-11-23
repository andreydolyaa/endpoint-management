import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/signup/signupActions";

function Signup() {
  const dispatch = useDispatch();
  const { status, loading, error } = useSelector((state) => state.signup);
  const [formData, setFormData] = useState({
    name: "mike",
    email: "mike@mail.com",
    password: "123",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signUp(formData));
  };

  return (
    <>
      {error && <div>{error}</div>}
      {status && <div>{status}</div>}
      {loading && <div>Loading</div>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button>Sign Up</button>
      </form>
    </>
  );
}

export default Signup;
