import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

// page components

import Home from "./pages/HomePage";
import CocktailPage from "./pages/CocktailPage";
import CategoryPage from "./pages/CategoryPage";

// router creation

const getSomeData = (id) => {
  const allData = {
    spring: {
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet",
    },
    summer: {
      title: "Schnapsum",
      content: "Lorem Elsass ipsum Salut bisamme",
    },
    winter: {
      title: "Cupcake Ipsum",
      content: "Tiramisu pastry wafer brownie soufflé",
    },
  };

  return allData[id];
};

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
        loader: ({ params }) => getSomeData(params.id)
      },
      {
        path: "/cocktail/:id",
        element: <CocktailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
