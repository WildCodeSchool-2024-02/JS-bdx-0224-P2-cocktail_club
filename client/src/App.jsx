import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import CocktailPage from "./components/CocktailPage";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <CocktailPage />
      <Footer />
    </>
  );
}

export default App;
