import "./styles/App.css";
import HomePage from "./components/HomePage";
import CocktailPage from "./components/CocktailPage";
import CategoryPage from "./components/CategoryPage";

function App() {
  return (
    <>
      <HomePage />
      <CategoryPage />
      <CocktailPage />
    </>
  );
}

export default App;
