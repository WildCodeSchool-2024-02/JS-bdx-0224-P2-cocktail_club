import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/HomePage";
import CocktailPage from "./pages/CocktailPage";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";

function fetchCocktailsBySeason(ingredient) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
  )
    .then((response) => response.json())
    .then((data) => data.drinks.slice(0, 12));
}

const getCocktailsBySeasons = (id) => {
  let ingredient;
  switch (id) {
    case "summer":
      ingredient = "Pineapple juice";
      break;
    case "autumn":
      ingredient = "Gin";
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

function getCocktailById(cocktailId) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
  )
    .then((response) => response.json())
    .then((data) => data.drinks[0]);
}

function mocktails() {
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
        loader: ({ params }) => getCocktailsBySeasons(params.id),
      },
      {
        path: "/cocktails/:id",
        element: <CocktailPage />,
        loader: ({ params }) => getCocktailById(params.id),
      },
      {
        path: "/popularcocktails",
        element: <CategoryPage />,
        loader: () => getPopularCocktails(),
      },
      {
        path: "/surprisecocktail",
        element: <CocktailPage />,
        loader: () => getRandomCocktail(),
      },
      {
        path: "/allCocktails",
        element: <CategoryPage />,
        loader: () => allCocktails(),
      },
      {
        path: "/mocktails",
        element: <CategoryPage />,
        loader: () => mocktails(),
      },
      {
        path: "/contact",
        element: <ContactPage />,
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
