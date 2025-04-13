
import React from 'react';
import RecipesTableCart from './RecipesTableCart';
import CCooking from './CCooking';

const RecipesTable = ({ cook, handleCooking, currentCooking }) => {
  return (
    <div className='w-1/3 border mt-6 ml-4'>
      <h2 className='font-bold text-center text-2xl border m-6 p-5'>
        Want to cook: {cook.length}
      </h2>

      <RecipesTableCart cookCart={cook} handleCooking={handleCooking} />

      {/* Current Cooking */}
      <h2 className='font-bold text-center text-2xl border m-6 p-5'>Current Cooking: {currentCooking.length}</h2>

      <CCooking currentCooking={currentCooking}/>
    </div>
  );
};

export default RecipesTable;
