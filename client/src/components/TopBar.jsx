// import Logout from "./Logout";
// function TopBar() {
//   return (
//     <div className="top-bar">
//       <p>topbar</p>
//       <Logout />
//     </div>
//   );
// }

import Logout from "./Logout";

// export default TopBar;

const TopBar = () => {
  return (
    <div className="topbar border border-emerald-500">
      topbar
      <Logout/>
    </div>
  );
};

export default TopBar;
