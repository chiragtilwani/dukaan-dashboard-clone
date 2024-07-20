import "./App.css";
import MainContainer from "./components/mainContainer/MainContainer";
import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <div className="bg-customAppBg flex">
      <SideBar />
      <MainContainer />
    </div>
  );
}

export default App;
