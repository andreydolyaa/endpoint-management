import { FiWifi, FiWifiOff } from "react-icons/fi";

const Online = ({ isConnected }) => {
  return isConnected ? <FiWifi className="icon1"/> : <FiWifiOff className="icon1"/>;
};

export default Online;
