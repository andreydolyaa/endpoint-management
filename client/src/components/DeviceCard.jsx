const DeviceCard = ({ device }) => {
  return (
    <div className="device-card">
      <p className="connected">
        {device.connected ? "Connected" : "Disconnected"}
      </p>
      <p className="identifier">{device.deviceIdentifier}</p>
      <p className="host-name">{device.hostName}</p>
      <p className="user-info">{device.userInfo.username}</p>
      <div>{device.ipAddress}</div>
    </div>
  );
};

export default DeviceCard;
