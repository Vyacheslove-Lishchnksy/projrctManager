import { useSelector } from "react-redux";
import { RootState } from "./store/rootReduser";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Navigation } from "components/Navigation/Navigation";

function App() {
  const { settingsReduser } = useSelector((state: RootState) => state);
  console.log(settingsReduser);

  return (
    <>
      <Sidebar />
      <Navigation />
    </>
  );
}

export default App;
