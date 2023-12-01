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

  const sortByConnection = (a, b) => {
    return b.connected - a.connected;
  };
  return (
    <div className="home">
      <TopBar />
      <SideBar devices={devices.sort(sortByConnection)} />
      <div className="main">main</div>
    </div>
  );
};

export default Home;
