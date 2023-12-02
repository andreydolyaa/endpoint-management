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

  const sortByConnection = (a, b) => {
    return b.connected - a.connected;
  };
  return (
    // <div className="h-full grid grid-rows-13 grid-cols-12">
    //   <div className="border row-start-1 row-end-2 col-start-3 col-span-full">
    //     <TopBar />
    //   </div>
    //   <div className="border border-blue-400 row-start-1 row-end-13 col-start-1 col-end-3">
    //     <SideBar />
    //   </div>
    //   <div className="border border-red-400 row-start-2 row-end-13 col-start-3 col-end-13">
    //     <Main />
    //   </div>
    // </div>
    <div className="home">
        <TopBar />
        <SideBar />
        <Main />
    </div>
  );
};

export default Home;
