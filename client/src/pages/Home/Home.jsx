import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "../../components/TopBar";
import SideBar from "../../components/Sidebar/Sidebar";
import { getDevices } from "../../redux/devices/deviceActions";
import store from "../../redux/store";
import {
  connectWebSocket,
  disconnectWebSocket,
} from "../../redux/websocket/websocketActions";
import Main from "../../components/Main";

const Home = () => {
  const dispatch = useDispatch();
  const devices = useSelector((state) => state.devices.devices);

  useEffect(() => {
    dispatch(getDevices());
    store.dispatch(connectWebSocket());
    return () => {
      store.dispatch(disconnectWebSocket());
    };
  }, []);

  return (
    <div className="home">
      <TopBar />
      <SideBar />
      <Main />
    </div>
  );
};

export default Home;
