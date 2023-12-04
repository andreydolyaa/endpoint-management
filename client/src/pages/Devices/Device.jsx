import Badge from "../../components/Badge";
import Online from "../../components/Online";
import { RiComputerLine } from "react-icons/ri";

const Device = ({ device }) => {
  return (
    <div className="device-card border flex shadow-sm text-gray-600 bg-white rounded-md p-5 font-medium">
      <div className="pr-5 border-r">
        <RiComputerLine className="w-5 h-5" />
      </div>
      <div className="pl-5 flex flex-1 flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-sm text-black p-0 m-0">
              {device.deviceIdentifier}
            </p>
            <p className="text-[12px] mt-1 text-gray-400 font-[monospace]">
              {device.ipAddress}
            </p>
          </div>
          <Online connected={device.connected} />
        </div>

        <div className="mt-auto text-[12px] flex items-center flex-wrap">
          <Badge text={device.hostName} color={"#A0B8BD"} tooltip="Host" />
          <Badge
            text={device.userInfo.username}
            color={"#83B5C0"}
            tooltip="Logged User"
          />
          <Badge
            text={device.userInfo?.shell ? device.userInfo.shell : "CMD"}
            color={"#60AFC1"}
            tooltip="Shell"
          />
        </div>
      </div>
    </div>
  );
};

export default Device;
