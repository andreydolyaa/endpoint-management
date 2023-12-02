import Logo from "./Logo";
import Logout from "./Logout";

const TopBar = () => {
  return (
    <div className="topbar px-6 flex items-center justify-between">
      <Logo />
      <Logout />
    </div>
  );
};

export default TopBar;
