import { useEffect } from "react";
import TopBar from "../../components/TopBar";
import SideBar from "../../components/Sidebar/Sidebar";
import store from "../../redux/store";
import {
  connectWebSocket,
  disconnectWebSocket,
} from "../../redux/websocket/websocketActions";
import Main from "../../components/Main";

const Home = () => {
  useEffect(() => {
    store.dispatch(connectWebSocket());
    return () => {
      store.dispatch(disconnectWebSocket());
    };
  }, []);

  return (
    <div className="home">
      <div className="wrapper ">
        <TopBar />
        <SideBar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
