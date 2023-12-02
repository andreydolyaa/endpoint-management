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
      <Link
        to={linkName}
        className="capitalize group rounded-lg text-[14px] text-gray-400 sidebar-item px-5 transition duration-300 flex items-center h-14 cursor-pointer hover:bg-indigo-500  hover:bg-opacity-10 hover:text-white group-hover:text-white"
      >
        <IconComponent className="icon mr-4" />
        <span>{linkName}</span>
      </Link>
    </div>
  );
};

export default Item;
