import React from 'react'
import RecipeList from '../components/RecipeList';

const ShowFavorite = () => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  
  
  return (
    <div>
      <h2 style={{color:'purple'}}>Favorite Recipe</h2>
      {
        favoriteRecipes.length==0 ?
        <div>No Favorite Recipe </div>
    :   <ul >
  { favoriteRecipes.map((recipe) => (
      <RecipeList  recipe={recipe} handleRecipeClick={()=> {}} />
  ))         
     }
     </ul>
}      
 </div>
  )
}

export default ShowFavorite
