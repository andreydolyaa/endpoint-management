import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import Missing from "./pages/Missing/Missing";
import Auth from "./components/Auth";

function App() {
  return (
    <Provider store={store}>
      <Routes path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* protected routes */}
        <Route element={<Auth />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* wrong path */}
        <Route path="*" element={<Missing />} />
      </Routes>
    </Provider>
  );
}

export default App;
