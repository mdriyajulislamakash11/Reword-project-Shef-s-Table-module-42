import React, { useEffect, useState } from "react";
import RecipesCart from "./RecipesCart";

const Recipes = ({handleCook}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="w-2/3">
      <h2>recipes cart: {recipes.length}</h2>
      <div  className="grid lg:grid-cols-2 gap-4 p-4 border ">
        
        {recipes.map((recipe) => (
          <RecipesCart
           key={recipe.recipe_id} 
           recipe={recipe} 
           handleCook={handleCook}
           />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
