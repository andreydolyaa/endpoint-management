import {
  RiComputerLine,
  RiSettings2Line,
  RiLogoutBoxRLine,
  RiShieldLine,
  RiPieChartLine,
} from "react-icons/ri";

import { Link, NavLink } from "react-router-dom";

const Item = ({ linkName }) => {
  const iconsMap = {
    devices: RiComputerLine,
    response: RiShieldLine,
    data: RiPieChartLine,
    settings: RiSettings2Line,
    logout: RiLogoutBoxRLine,
  };

  const IconComponent = iconsMap[linkName];

  return (
    <div className="">
      <NavLink
        to={linkName}
        className="capitalize h-12 px-5 mb-2 group rounded-lg text-[14px] text-gray-500 sidebar-item transition duration-300 flex items-center cursor-pointer hover:bg-indigo-500  hover:bg-opacity-20 hover:text-white group-hover:text-white"
      >
        <IconComponent className="icon mr-3" />
        <span>{linkName}</span>
      </NavLink>
    </div>
  );
};

export default Item;
