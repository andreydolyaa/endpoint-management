const Device = ({ device }) => {
  return (
    <div className="h-[350px] border shadow-sm text-gray-600 bg-white rounded-md p-5">
      <p className="ip text-center text-xl font-[monospace]">
        {device.ipAddress}
      </p>
      {/* <button className="bg-gray-400 w-full text-white text-sm p-2 rounded-md">
        View Device
      </button> */}
    </div>
  );
};

export default Device;
