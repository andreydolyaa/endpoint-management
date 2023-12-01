
import Logo from "../Logo";
import Item from "./Item";

const Sidebar = ({ devices }) => {
  console.log(devices);
  return (
    <div className="side-bar">
      <div className="container">
        <Logo />
        {devices.length > 0 &&
          devices.map((device) => {
            return <Item key={device._id} device={device} />;
          })}
      </div>
    </div>
  );
};

export default Sidebar;
