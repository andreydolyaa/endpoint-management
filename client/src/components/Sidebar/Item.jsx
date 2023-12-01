import Online from "../Online";

const Item = ({ device }) => {
  console.log(device);
  return (
    <div className="device-item">
      {/* <Online className="icon1" isConnected={device.connected} /> */}
      <div className="title">
        <p className="ip">{device.ipAddress}</p>
        {device.connected ? (
          <div className="online"></div>
        ) : (
          <div className="offline"></div>
        )}
      </div>
      <p className="identifier">{device.deviceIdentifier}</p>
    </div>
  );
};

export default Item;
