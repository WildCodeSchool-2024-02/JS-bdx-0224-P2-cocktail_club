import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/HomePage";
import CocktailPage from "./pages/CocktailPage";
import CategoryPage from "./pages/CategoryPage";

async function fetchCocktailsBySeason(ingredient) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.drinks;
}

const getCocktails = (id) => {
  let ingredient;
  switch (id) {
    case "summer":
      ingredient = "Pineapple juice";
      break;
    case "autumn":
      ingredient = "Blended whiskey";
      break;
    case "winter":
      ingredient = "Kahlua";
      break;
    case "spring":
      ingredient = "Sweet Vermouth";
      break;
    default:
      ingredient = "";
  }

  return fetchCocktailsBySeason(ingredient);
};

function allCocktails() {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
  )
    .then((response) => response.json())
    .then((data) => data.drinks);
}

function getPopularCocktails() {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
  )
    .then((response) => response.json())
    .then((data) => data.drinks);
}

function getRandomCocktail() {
  return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => data.drinks[0]);
}

function getMocktails() {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
  )
    .then((response) => response.json())
    .then((data) => data.drinks);
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/season/:id",
        element: <CategoryPage />,
        loader: ({ params }) => getCocktails(params.id),
      },
      {
        path: "/cocktails/:id",
        element: <CocktailPage />,
      },
      {
        path: "/popularcocktails",
        element: <CategoryPage />,
        loader: () => getPopularCocktails(),
      },
      {
        path: "/randomcocktail",
        element: <CocktailPage />,
        loader: () => getRandomCocktail(),
      },
      {
        path: "/mocktails",
        element: <CategoryPage />,
        loader: () => getMocktails(),
      },
      {
        path: "/allCocktails",
        element: <CategoryPage />,
        loader: () => allCocktails(),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
