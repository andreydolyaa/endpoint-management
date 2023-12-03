import Logo from "../Logo";
import Item from "./Item";
import Title from "./Title";

const Sidebar = () => {
  return (
    <div className="sidebar border-r border-gray-500">
      <Logo />
      <div className="lg:animate-appear">
        <Title title={"Operations & Actions"} />
        <Item linkName={"devices"} />
        <Item linkName={"response"} />
        <Item linkName={"data"} />
        <Title title={"System & Settings"} />
        <Item linkName={"settings"} />
        <Item linkName={"logout"} />
      </div>
    </div>
  );
};

export default Sidebar;
