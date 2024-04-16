import { Link, Outlet } from "react-router-dom";

import "./styles/App.css";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/season/:id">Article 1</Link>
        <Link to="/cocktail/:id">About</Link>
      </nav>
        <Outlet/>
    </>
  );
}

export default App;