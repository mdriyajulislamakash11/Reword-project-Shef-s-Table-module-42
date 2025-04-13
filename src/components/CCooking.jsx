import React from 'react';

const CCooking = ({ currentCooking }) => {
    console.log(currentCooking)
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Time (min)</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {
            currentCooking.map((item, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{item.recipe_name}</td>
                <td>{item.preparing_time} min</td>
                <td>{item.calories}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default CCooking;
