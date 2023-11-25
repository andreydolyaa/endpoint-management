import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <Provider store={store}>
      {/* <Signup /> */}
      <Login />
    </Provider>
  );
}

export default App;
