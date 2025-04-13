import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import RecipesTable from "./components/RecipesTable";

function App() {
  const [cook, setCook] = useState([])
  const [currentCooking, setCurrentCooking] = useState([]);

  // 3 number section er jonno
  const handleCooking = (cooking) => {
    setCurrentCooking([...currentCooking, cooking]);
  };

  const handleCook = (item) => {
    const isAxist = cook.find((cookItem) => cookItem.recipe_id === item.recipe_id);
    if(!isAxist){

      setCook([...cook, item])
    }else{
      alert("This item is axist")
    }
  }


  return (
    <>
      <div className="md:w-10/12 mx-auto">
        {/* Header */}
        <Header />
        {/* Banner */}
        <Banner />
        {/* our recipies */}
        <section>
          {/* our recipes */}
          <div className="mt-20 text-center">
            <h1 className="text-5xl font-semibold">Our Recipes</h1>
            <p className="w-2/4 mx-auto mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              eum, deserunt enim corporis inventore placeat delectus mollitia
              quas? Quia unde harum facere id consequuntur repellendus tenetur
              maiores facilis, beatae quidem.
            </p>
          </div>

          {/* recipes details */}
          <div className="flex mt-20">
          {/* recipes cart */}
            <Recipes handleCook={handleCook} />
          {/* recipes prosses */}
            <RecipesTable cook={cook} handleCooking={handleCooking} currentCooking={currentCooking}/>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
