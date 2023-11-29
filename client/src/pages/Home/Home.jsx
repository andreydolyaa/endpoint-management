import TopBar from "../../components/TopBar";
import DevicesList from "../../components/DevicesList";

function Home() {
  return (
    <div className="home">
      <TopBar />
      <div className="container">
        <DevicesList />
      </div>
    </div>
  );
}

export default Home;
