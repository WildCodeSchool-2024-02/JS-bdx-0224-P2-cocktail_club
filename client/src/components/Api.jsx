import { useEffect, useState } from "react";

function Api() {
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
      .then((response) => response.json())
      .then((data) => setCocktail(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>{cocktail ? <p>{JSON.stringify(cocktail)}</p> : "Loading..."}</div>
  );
}

export default Api;
