// import { Outlet } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryPage from "./components/CategoryPage";
// import HomePage from "./components/HomePage"

function App() {
  return (
    <>
      <Navbar />
      <CategoryPage />
      <Footer />
    </>
  );
}

export default App;
