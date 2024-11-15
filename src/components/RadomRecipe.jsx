import { useState, useEffect } from "react";

const RandomRecipe = () => {
  const [recipe, setRecipe] = useState(null);

  const fetchRandomRecipe = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setRecipe(data.meals[0]));
  };

  useEffect(() => {
    fetchRandomRecipe();
  }, []);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="border p-4">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-40 object-cover"
      />
      <h2 className="font-bold text-lg mt-2">{recipe.strMeal}</h2>
      <p className="text-sm">Category: {recipe.strCategory}</p>
      <p className="text-sm">Area: {recipe.strArea}</p>
      <p className="mt-2">{recipe.strInstructions.substring(0, 100)}...</p>
      <button
        onClick={fetchRandomRecipe}
        className="bg-green-500 text-white px-4 py-2 mt-2"
      >
        Get Another Recipe
      </button>
    </div>
  );
};

export default RandomRecipe;
