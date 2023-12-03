import Online from "../../components/Online";
import { RiComputerLine } from "react-icons/ri";
import PreviewChart from "./PreviewChart";

const Device = ({ device }) => {
  return (
    <div className="h-[350px] border flex shadow-sm text-gray-600 bg-white rounded-md p-5">
      <div className="pr-5 border-r">
        <RiComputerLine className="w-5 h-5" />
      </div>
      <div className="pl-5 flex flex-1 flex-col">
        <div className="border flex items-center justify-between">
          <p className="ip text-sm font-medium">{device.ipAddress}</p>
          <Online connected={device.connected} />
        </div>
        <div className="border h-full">
          <PreviewChart point={device.cpuUsage.user} />
        </div>
      </div>
    </div>
  );
};

export default Device;
