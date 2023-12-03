import {
  RiComputerLine,
  RiSettings2Line,
  RiLogoutBoxRLine,
  RiShieldLine,
  RiPieChartLine,
} from "react-icons/ri";

import { Link, NavLink, useMatch } from "react-router-dom";

const Item = ({ linkName }) => {
  const match = useMatch(`/home/${linkName}`);

  const iconsMap = {
    devices: RiComputerLine,
    response: RiShieldLine,
    data: RiPieChartLine,
    settings: RiSettings2Line,
    logout: RiLogoutBoxRLine,
  };

  const IconComponent = iconsMap[linkName];

  return (
    <NavLink
      to={linkName}
      className="capitalize relative lg:static h-14 lg:h-11 group text-gray-400  text-[14px] sidebar-item transition duration-300 flex items-center justify-center lg:justify-normal cursor-pointer hover:bg-gray-400 hover:text-white  hover:bg-opacity-10"
    >
      <div className="flex items-center lg:pl-5">
        <IconComponent className="icon lg:mr-3" />
        <span className="hidden lg:flex">{linkName}</span>
      </div>
      {match && (
        <div className="flex absolute right-0 lg:static lg:ml-auto bg-mainColor h-full w-[5px] rounded-sm"></div>
      )}
    </NavLink>
  );
};

export default Item;
