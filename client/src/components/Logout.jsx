import useLogout from "../hooks/useLogout";

const Logout = () => {
  const signout = useLogout();
  return <button onClick={signout}>Logout</button>;
};

export default Logout;
