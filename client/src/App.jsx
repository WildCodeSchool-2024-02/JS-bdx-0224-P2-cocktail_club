import { Outlet } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="pageWrapper">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
