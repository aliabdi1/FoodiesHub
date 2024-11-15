const RecipeCard = ({ recipe }) => (
    <div className="border p-4">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-40 object-cover"
      />
      <h2 className="font-bold text-lg mt-2">{recipe.strMeal}</h2>
      <p className="text-sm">Category: {recipe.strCategory}</p>
      <p className="text-sm">Area: {recipe.strArea}</p>
      <a
        href={recipe.strSource}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline mt-2 inline-block"
      >
        View Full Recipe
      </a>
    </div>
  );
  
  export default RecipeCard;
  