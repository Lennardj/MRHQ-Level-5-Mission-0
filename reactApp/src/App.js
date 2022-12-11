import Topnav from "./components/Topnav";
import Info from "./components/info";
import MediaCard from "./components/MediaCard";
import Chat from "./components/Chat";

// import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Topnav />
      <Info />
      <MediaCard />
      <Chat />
      {/* <MediaCard /> */}

      {/* <Footer /> */}
      {/* <Routes>
        <Route path="/" element={<Topnav />} />
      </Routes> */}
    </div>
  );
}

export default App;
