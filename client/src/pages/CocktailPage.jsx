
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// function CocktailPage() {
//   const { id } = useParams();
//   const [cocktails, setCocktails] = useState([]);
//   const fetchCocktailsByCategory = (id) => {
//     const API_BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1/`;
//     return fetch(`${API_BASE_URL}/filter.php?c=${id}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch cocktails");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         return data.drinks;
//       })
//       .catch((error) => {
//         console.error("Error fetching cocktails by category:", error);
//         return null;
//       });
//   };
//   useEffect(() => {
//     fetchCocktailsByCategory(id)
//       .then((data) => setCocktails(data))
//       .catch((error) => console.error("Error fetching cocktails:", error));
//   }, [id]);
//   const handleButtonClick = (season) => {
//     console.log(`Button clicked for season: ${season}`);
//   };
//   return (
//     <>
//       <h1>Cocktails {id}</h1>
//       <ul>
//         {cocktails.map((cocktail) => (
//           <li key={cocktail.idDrink}>
//             <h3>{cocktail.strDrink}</h3>
//             <p>
//               Ingrédients: {cocktail.strIngredient1}, {cocktail.strIngredient2}, ...
//             </p>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }


// export default CocktailPage;

