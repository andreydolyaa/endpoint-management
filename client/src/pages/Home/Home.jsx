import useRefreshToken from "../../hooks/useRefreshToken";


function Home() {
  const refresh = useRefreshToken();

  return (
    <div>
      Home
      <button onClick={() => refresh()}>refresh</button>
    </div>
  );
}

export default Home;
