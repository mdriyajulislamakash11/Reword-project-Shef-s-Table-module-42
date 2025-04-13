import React from "react";

const RecipesTableCart = ({ cookCart, handleCooking}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Time (min)</th>
            <th>Calories</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cookCart.map((item, index) => (
            <tr key={index} className="hover">
              <th>{index + 1}</th>
              <td>{item.recipe_name}</td>
              <td>{item.preparing_time} min</td>
              <td>{item.calories}</td>
              <td>
                <button
                  onClick={() => handleCooking(item)}
                  className="btn btn-primary rounded-full"
                >
                  preparing
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipesTableCart;
