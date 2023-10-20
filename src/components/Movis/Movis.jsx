import Axios from "axios";

import React, { useEffect, useState } from 'react'

export default function Movis() {
  let [recipes, setrecipes] = useState([]);

  let getRecipes = async () => {
    let  {data } = await Axios.get(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    
    setrecipes(data.recipes);
    // console.log(recipes)
  };

  useEffect(()=>{
    getRecipes()
  },[])
  return (
    <>
      <div className="contaner">
       <div className="row">
        {recipes.map((recipe,index)=>{
          return <div className="col-md-4" key={index}>
            <img style={{height:"200px"}} src={recipe.image_url} className="w-100"/>
            <h3>{recipe.title}</h3>
          </div>
        })}
       </div>
      </div>
    </>
  )
}
