import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDevices } from "../../redux/devices/deviceActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import Empty from "../../components/Empty";
import Device from "./Device";

const Devices = () => {
  const dispatch = useDispatch();
  const { devices, loading, error } = useSelector((state) => state.devices);

  useEffect(() => {
    dispatch(getDevices());
  }, []);

  if (loading) return <Loading />;
  else if (error) return <ErrorMessage error={error} />;
  else if (!devices.length) return <Empty type={"Devices"} />;
  return (
    <div className="devices-cards">
      {devices.map((device) => {
        return <Device key={device._id} device={device} />;
      })}
    </div>
  );
};

export default Devices;
