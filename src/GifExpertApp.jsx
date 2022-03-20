import React, { useState } from "react";


import { FormInput } from "./components/FormInput/FormInput";
import { GifGrid } from "./components/GifGrid/GifGrid";

export function GifExpertApp() {
  const categoriesA = ['Web Dev'];
  const [categories, setCategories] = useState(categoriesA);

  const handdleAddCat = (argument) => {
    // setCategories(( e ) => e.concat(argument)) this solution is bad
    if (categories.includes(argument)) {
      return;
    } else if (argument === "") {
      return;
    }
    return setCategories([argument, ...categories]);
  };
  const handdleReset = () => {
    // setCategories(( e ) => e.concat(argument)) this solution is bad
    setCategories(categoriesA);
  };

  function deleteCategory ( deletedCat ){
    const newCategories  = categories.filter( e =>  e === deletedCat ? '' : e )
      return setCategories( newCategories )
    
  }

  return (
    <div className="App">
      <div className='app-header'>
        <FormInput add={handdleAddCat} reset={handdleReset} />
      </div>
      <div className="categories">
        {categories.map((category) => (
          <GifGrid deleteCategory={deleteCategory} key={category} category={category} />
        ))}
      </div>
    </div>
  );
}
