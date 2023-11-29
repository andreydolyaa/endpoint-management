import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDevices } from "../redux/devices/deviceActions";
import DeviceCard from "./DeviceCard";

const DevicesList = () => {
  const dispatch = useDispatch();
  const { devices, loading, error } = useSelector((state) => state.devices);

  useEffect(() => {
    dispatch(getDevices());
  }, []);

  return (
    <div className="devices-list">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!!devices &&
        devices.map((device) => {
          return <DeviceCard key={device._id} device={device} />;
        })}
    </div>
  );
};

export default DevicesList;
