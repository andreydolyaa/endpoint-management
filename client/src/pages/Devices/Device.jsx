import Online from "../../components/Online";

const Device = ({ device }) => {
  return (
    <div className="h-[350px] border shadow-sm text-gray-600 bg-white rounded-md p-5">
      <div className="flex items-center justify-between">
        <p className="ip text-sm font-[monospace]">{device.ipAddress}</p>
        <Online connected={device.connected} />
      </div>
    </div>
  );
};

export default Device;
