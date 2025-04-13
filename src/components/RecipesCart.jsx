import React from "react";

const RecipesCart = ({ recipe, handleCook }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    preparing_time,
    calories,
    ingredients,
  } = recipe;

  return (
    <div className="card bg-base-100 shadow-xl  border">
      <figure>
        <img
          src={recipe_image}
          alt={recipe_name}
          className="w-full h-64 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <p>{short_description}</p>

        <div>
          <h3 className="font-semibold">Ingredients:</h3>
          <ul className="list-disc list-inside text-sm">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between text-sm text-gray-400 mt-2">
          <span>⏱️ Time: {preparing_time}</span>
          <span>🔥 Calories: {calories}</span>
        </div>

        <div className="card-actions justify-start mt-4">
          <button
            onClick={() => handleCook(recipe)}
            className="btn btn-primary"
          >
            Want to cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipesCart;
