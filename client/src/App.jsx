import { Provider } from "react-redux";
import store from "./redux/store";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";

function App() {
  return (
    <Provider store={store}>
      <Signup />
      <Signin />
    </Provider>
  );
}

export default App;
