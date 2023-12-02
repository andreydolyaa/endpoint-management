import Logo from "../Logo";
import Item from "./Item";
import Title from "./Title";

const Sidebar = () => {
  return (
    <div className="sidebar px-4">
      <Logo />
      <Title title={"Management"} />
      <Item linkName={"devices"} />
      <Item linkName={"response"} />
      <Item linkName={"data"} />
      <Title title={"System"} />
      <Item linkName={"settings"} />
      <Item linkName={"logout"} />
    </div>
  );
};

export default Sidebar;
