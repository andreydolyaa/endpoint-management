import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/user/userActions";
import store from "../../redux/store";

function Signin() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    email: "mike@gmail.com",
    password: "123",
  });

  // Temporary, Delete later
  store.subscribe(() => {
    console.log(store.getState());
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    dispatch(signIn(formData));
  };

  // const logout = () => {
  //   dispatch(signOut());
  // };

  return (
    <>
      {error && <div>{error}</div>}
      {loading && <div>Loading</div>}
      <form onSubmit={handleSignin}>
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
        <button>Sign In</button>
      </form>
      {/* <button onClick={logout}>sign out</button> */}
    </>
  );
}

export default Signin;
