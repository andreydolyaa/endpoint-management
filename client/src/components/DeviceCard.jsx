const DeviceCard = ({ device }) => {
  return (
    <div className="device-card">
      <p className="connected">
        {device.connected ? "Connected" : "Disconnected"}
      </p>
      <p className="identifier">{device.deviceIdentifier}</p>
      <p className="host-name">{device.hostName}</p>
      <p className="user-info">{device.userInfo.username}</p>
      <p className="up-time">up time: {device.upTime}</p>

      <p>CPU USER: {device.cpuUsage?.user}</p>
      <p>CPU SYSTEM: {device.cpuUsage?.system}</p>

      <div>{device.ipAddress}</div>
    </div>
  );
};

export default DeviceCard;
