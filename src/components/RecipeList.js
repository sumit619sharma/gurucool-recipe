import React from 'react'

const RecipeList = ({recipe , handleRecipeClick}) => {
    
    const regex = /recipe_([^#]+)$/;
    const match = recipe.uri.match(regex);
    const recipeId = match[1];

    return (
        <div className="container col-md-4  my-4" >
        
            <div className="card" onClick={() => handleRecipeClick(recipeId)}>
              <img style={{height: '200px'}} src={recipe.image} className="card img-fluid" alt={recipe.title} />
              <div className="card-body">
                <h3 style={{color:'purple'}} className="card-title ">{recipe.label}</h3>
                <p className="card-text">
                  <strong>Ingredients:</strong> {recipe.ingredients.length}
                  <br />
                  <strong>Calories:</strong> {Math.floor(recipe.calories)}
                  <br />
               
                </p>
              </div>
            </div>
        </div>
      
  )
}

export default RecipeList;
